import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateBingImageSearchInput } from './dto/create-bing-image-search.input';
import { UpdateBingImageSearchInput } from './dto/update-bing-image-search.input';
import { BingImageSearch } from './entities/bing-image-search.entity';

@Injectable()
export class BingImageSearchService {
  constructor(/*@InjectRepository(BingImageSearch) private bingImageSearchRepository: Repository<BingImageSearch>,*/ @Inject('HttpServiceBingImageSearch') private readonly bingImageSearchApi: HttpService) {}

  async findOne(query: string): Promise<BingImageSearch> {
    const res = this.bingImageSearchApi.get('', {
      params: {
        q: query
      }
    })

    const imageUrlRes = await lastValueFrom(res)

    const { contentUrl } = imageUrlRes.data.value[0]

    let imageUrl: BingImageSearch = {
      url: contentUrl
    }

    return imageUrl
  }
}
