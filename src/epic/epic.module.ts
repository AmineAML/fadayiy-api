import { Module } from '@nestjs/common';
import { EpicService } from './epic.service';
import { EpicResolver } from './epic.resolver';
import { Epic } from './entities/epic.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpEpic } from 'src/common/http/http-nasa-epic.module';

@Module({
  providers: [EpicResolver, EpicService],
  imports: [
    TypeOrmModule.forFeature([Epic]),
    HttpEpic
  ]
})
export class EpicModule {}
