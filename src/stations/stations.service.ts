import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';
import { CacheService } from 'src/common/cache/cache.service';
import { TranslationService } from 'src/common/translation/translation.service';
import { Repository } from 'typeorm';
import { Station } from './entities/station.entity';

@Injectable()
export class StationsService {
    constructor(@InjectRepository(Station) private stationsRepository: Repository<Station>, @Inject('HttpServiceLaunchLibrary') private readonly launchLibraryApi: HttpService, private readonly translationService: TranslationService, private readonly cacheService: CacheService) { }

    async findAll(): Promise<Station[]> {
        const cachedData = await this.cacheService.getCache('spacestations')

        if (cachedData) {
            console.log('spacestations from cache')
            return cachedData
        }

        console.log('spacestations from http')

        const res = this.launchLibraryApi.get('/spacestation/?limit=100')

        const spaceStationsRes = await lastValueFrom(res)

        const spaceStations: Station[] = spaceStationsRes.data.results

        await this.cacheService.setCache('spacestations', spaceStations)

        return spaceStations
    }

    async findOne(id: number): Promise<Station> {
        const res = this.launchLibraryApi.get(`spacestation/${id}`)

        const spaceStationRes = await lastValueFrom(res)

        let spaceStation: Station = spaceStationRes.data

        // spaceStation = await this.translationService.translatedData(spaceStation)

        return spaceStation
    }
}
