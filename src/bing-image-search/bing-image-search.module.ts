import { Module } from '@nestjs/common';
import { BingImageSearchService } from './bing-image-search.service';
import { BingImageSearchResolver } from './bing-image-search.resolver';
import { HttpBingImageSearch } from 'src/common/http/http-bing-image-search.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BingImageSearch } from './entities/bing-image-search.entity';

@Module({
  providers: [BingImageSearchResolver, BingImageSearchService],
  imports: [
    HttpBingImageSearch,
    // TypeOrmModule.forFeature([BingImageSearch]),
  ]
})
export class BingImageSearchModule {}
