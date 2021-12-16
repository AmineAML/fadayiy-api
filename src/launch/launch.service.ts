import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateLaunchInput } from './dto/create-launch.input';
import { UpdateLaunchInput } from './dto/update-launch.input';
import { Launch } from './entities/launch.entity';

@Injectable()
export class LaunchService {
  constructor(@InjectRepository(Launch) private launchesRepository: Repository<Launch>, @Inject('HttpServiceLaunchLibrary') private readonly launchLibraryApi: HttpService) {}

  async findAll(): Promise<Launch[]> {
    let launches: Launch[] =[]

    let isNextNull: boolean = false

    let offset = 0

    while(!isNextNull) {
      const res = this.launchLibraryApi.get(`/launch/upcoming/?hide_recent_previous=false&include_suborbital=true&limit=100&&offset=${offset}&related=false`)

      const launchesRes = await lastValueFrom(res)

      launchesRes.data.next == null ? isNextNull = true :  isNextNull = false
  
      launches.push(...launchesRes.data.results)

      offset += 100
    }

    return launches
  }
}
