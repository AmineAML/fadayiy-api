import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { lastValueFrom } from 'rxjs';
import { BingImageSearchService } from 'src/bing-image-search/bing-image-search.service';
import { CacheService } from 'src/common/cache/cache.service';
import { TranslationService } from 'src/common/translation/translation.service';
import { Repository } from 'typeorm';
import { CreateAgencyInput } from './dto/create-agency.input';
import { UpdateAgencyInput } from './dto/update-agency.input';
import { Agency } from './entities/agency.entity';

@Injectable()
export class AgencyService {
  constructor(@InjectRepository(Agency) private agenciesRepository: Repository<Agency>, @Inject('HttpServiceLaunchLibrary') private readonly launchLibraryApi: HttpService, private readonly translationService: TranslationService, @Inject(CACHE_MANAGER) private cacheManager: Cache, private readonly cacheService: CacheService, private readonly bingImageSearchService: BingImageSearchService, @Inject('HttpServiceFetch') private readonly http: HttpService) { }

  async findAll(): Promise<Agency[]> {
    const cachedData = await this.cacheService.getCache('agencies')

    if (cachedData) {
      console.log('agencies from cache')
      return cachedData
    }

    console.log('agencies from http')
    
    let agencies: Agency[] = []

    // agencies = await this.cacheManager.get('agencies') || []

    // console.log(agencies)

    // if (agencies && agencies.length > 0) return agencies

    let isNextNull: boolean = false

    let offset = 0

    while (!isNextNull) {
      const res = this.launchLibraryApi.get(`/agencies/?limit=100&&offset=${offset}`)

      const agenciesRes = await lastValueFrom(res)

      agenciesRes.data.next == null ? isNextNull = true : isNextNull = false

      agencies.push(...agenciesRes.data.results)

      offset += 100
    }

    for (let i = 0; i < agencies.length; i++) {
      agencies[i] = await this.findOne(agencies[i].id)

      console.log(agencies[i])
    }

    await this.cacheService.setCache('agencies', agencies)

    // await this.cacheManager.set('agencies', agencies, { ttl: 0 });

    return agencies
  }

  async findOne(id: number): Promise<Agency> {
    const res = this.launchLibraryApi.get(`agencies/${id}`)

    const agencyRes = await lastValueFrom(res)

    let agency: Agency = agencyRes.data

    if (!agency.logo_url) {
      if (agency.name.toLowerCase() == 'general electric') {
        agency.logo_url = "https://logo.clearbit.com/ge.com"
      } else if (agency.info_url) {
        let url = "https://logo.clearbit.com/" + agency.info_url.replace(new RegExp("https://", "g"), "").replace(new RegExp("http://", "g"), "").replace(new RegExp("www.", "g"), "").split("/")[0]

        if (await this.checkImage(url)) {
          agency.logo_url = url
        }
      } else if (agency.image_url) {
        agency.logo_url = agency.image_url
      } else {
        let urlRes = await this.bingImageSearchService.findOne(`${agency.name.toLowerCase()} logo`);

        agency.logo_url = urlRes.url
      }
    }

    return agency
  }

  async checkImage(url) {
    try {
      const res = this.http.get(url, {
        // mode: "no-cors",
        responseType: 'blob'
      });
  
      const urlRes = await lastValueFrom(res)
  
      console.log(urlRes)
  
      const buff = await urlRes.headers['content-type']//.data.blob();
  
      return buff/*.type*/.startsWith("image/");
    } catch (err) {}
    console.log(`Error fetching ${url}`)
    return false
  }
}
