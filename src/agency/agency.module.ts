import { Module } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { AgencyResolver } from './agency.resolver';
import { Agency } from './entities/agency.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpLaunchLibrary } from 'src/common/http/http-launch-library.module';
import { HttpLibreTranslate } from 'src/common/http/http-libre-translate.module';
import { TranslationService } from 'src/common/translation/translation.service';

@Module({
  providers: [
    AgencyResolver,
    AgencyService,
    TranslationService
  ],
  imports: [
    TypeOrmModule.forFeature([Agency]),
    HttpLaunchLibrary,
    HttpLibreTranslate
  ]
})
export class AgencyModule {}
