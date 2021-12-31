import { Module } from '@nestjs/common';
import { AstronautsService } from './astronauts.service';
import { AstronautsResolver } from './astronauts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpLaunchLibrary } from 'src/common/http/http-launch-library.module';
import { Astronaut } from './entities/astronaut.entity';
import { HttpLibreTranslate } from 'src/common/http/http-libre-translate.module';
import { TranslationService } from 'src/common/translation/translation.service';

@Module({
  providers: [
    AstronautsResolver,
    AstronautsService,
    TranslationService
  ],
  imports: [
    TypeOrmModule.forFeature([Astronaut]),
    HttpLaunchLibrary,
    HttpLibreTranslate
  ]
})
export class AstronautsModule {}
