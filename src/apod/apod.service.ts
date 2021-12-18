import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateApodInput } from './dto/create-apod.input';
import { UpdateApodInput } from './dto/update-apod.input';
import { Apod } from './entities/apod.entity';

@Injectable()
export class ApodService {
  constructor(@InjectRepository(Apod) private apodRepository: Repository<Apod>, @Inject('HttpServiceApod') private readonly apodApi: HttpService) {}

  // findAll() {
  //   return `This action returns all apod`;
  // }

  async findOne(): Promise<Apod> {
    const res = this.apodApi.get(``)

    const apodRes = await lastValueFrom(res)

    let apod: Apod = apodRes.data

    return apod
  }
}
