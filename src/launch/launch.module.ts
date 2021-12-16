import { Module } from '@nestjs/common';
import { LaunchService } from './launch.service';
import { LaunchResolver } from './launch.resolver';
import { Launch } from './entities/launch.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpLaunchLibrary } from 'src/common/http/http-launch-library.module';
import { HttpLibreTranslate } from 'src/common/http/http-libre-translate.module';

@Module({
  providers: [LaunchResolver, LaunchService],
  imports: [
    TypeOrmModule.forFeature([Launch]),
    HttpLaunchLibrary,
    HttpLibreTranslate
  ]
})
export class LaunchModule {}
