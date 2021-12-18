import { Module } from '@nestjs/common';
import { ApodService } from './apod.service';
import { ApodResolver } from './apod.resolver';
import { Apod } from './entities/apod.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpApod } from 'src/common/http/http-nasa-apod.module';

@Module({
  providers: [ApodResolver, ApodService],
  imports: [
    TypeOrmModule.forFeature([Apod]),
    HttpApod
  ]
})
export class ApodModule {}
