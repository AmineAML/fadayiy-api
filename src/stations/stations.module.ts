import { Module } from '@nestjs/common';
import { StationsService } from './stations.service';
import { StationsResolver } from './stations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Station } from './entities/station.entity';
import { HttpLaunchLibrary } from 'src/common/http/http-launch-library.module';
import { TranslationService } from 'src/common/translation/translation.service';
import { CacheService } from 'src/common/cache/cache.service';

@Module({
  providers: [
    StationsService,
    StationsResolver,
    TranslationService,
    CacheService
  ],
  imports: [
    TypeOrmModule.forFeature([Station]),
    HttpLaunchLibrary
  ]
})
export class StationsModule {}
