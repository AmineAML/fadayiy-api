import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateAstronautInput } from './dto/create-astronaut.input';
import { UpdateAstronautInput } from './dto/update-astronaut.input';
import { Astronaut } from './entities/astronaut.entity';
import * as googleTranslateApi from '@vitalets/google-translate-api';
import { TranslationService } from 'src/common/translation/translation.service';
import { Cache } from 'cache-manager';
import { CacheService } from 'src/common/cache/cache.service';

@Injectable()
export class AstronautsService {
  constructor(@InjectRepository(Astronaut) private astronautsRepository: Repository<Astronaut>, @Inject('HttpServiceLaunchLibrary') private readonly launchLibraryApi: HttpService, private readonly translationService: TranslationService, private readonly cacheService: CacheService) { }

  async findAll(): Promise<Astronaut[]> {
    const cachedData = await this.cacheService.getCache('astronauts')

    if (cachedData) {
      console.log('astronauts from cache')
      return cachedData
    }

    console.log('astronauts from http')

    let astronauts: Astronaut[] = []

    // astronauts = await this.cacheManager.get('astronauts') || []

    // console.log(astronauts)

    // if (astronauts && astronauts.length > 0) return astronauts

    // if (astronauts == null || astronauts.length == 0 || astronauts == undefined) {
      let isNextNull: boolean = false

      let offset = 0
  
      while (!isNextNull) {
        const res = this.launchLibraryApi.get(`/astronaut/?limit=100&&offset=${offset}`)
  
        const astronautsRes = await lastValueFrom(res)
  
        astronautsRes.data.next == null ? isNextNull = true : isNextNull = false
  
        astronauts.push(...astronautsRes.data.results)
  
        offset += 100
      }
  
      let astronautsBeenToSpace = astronauts.filter(function (astronaut) {
        if (astronaut.first_flight != null) return astronaut
      })
  
      let astronautsDidNotBeenToSpace = astronauts.filter(function (astronaut) {
        if (astronaut.first_flight == null) return astronaut
      })
  
      astronautsBeenToSpace.sort((a, b) => new Date(a.first_flight).getTime() - new Date(b.first_flight).getTime())
  
      astronauts = [...astronautsBeenToSpace, ...astronautsDidNotBeenToSpace]
  
      // This is too slow and gets this API rate limited by Google Translate API
      // await Promise.all(astronauts.map(async (astronaut, index) => {
      //   console.log(index+1)
      //   astronaut = await this.translationService.translatedData(astronaut)
      // }))
  
      console.log(astronauts)
  
  
      // await this.cacheManager.set('astronauts', astronauts, { ttl: 0 });
    // }

    await this.cacheService.setCache('astronauts', astronauts)

    return astronauts
  }

  async findOne(id: number): Promise<Astronaut> {
    const res = this.launchLibraryApi.get(`astronaut/${id}`)

    const astronautRes = await lastValueFrom(res)

    let astronaut: Astronaut = astronautRes.data

    // astronaut = await this.translationService.translatedData(astronaut)

    return astronaut
  }
}
