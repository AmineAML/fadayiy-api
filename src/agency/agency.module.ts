import { Module } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { AgencyResolver } from './agency.resolver';
import { Agency } from './entities/agency.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpLaunchLibrary } from 'src/common/http/http-launch-library.module';
import { HttpLibreTranslate } from 'src/common/http/http-libre-translate.module';
import { TranslationService } from 'src/common/translation/translation.service';
import { CacheService } from 'src/common/cache/cache.service';
import { BingImageSearchService } from 'src/bing-image-search/bing-image-search.service';
import { HttpBingImageSearch } from 'src/common/http/http-bing-image-search.module';
import { HttpFetch } from 'src/common/http/http-fetch.module';

@Module({
  providers: [
    AgencyResolver,
    AgencyService,
    TranslationService,
    CacheService,
    BingImageSearchService
  ],
  imports: [
    TypeOrmModule.forFeature([Agency]),
    HttpLaunchLibrary,
    HttpLibreTranslate,
    HttpBingImageSearch,
    HttpFetch
  ]
})
export class AgencyModule {}
