import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateEpicInput } from './dto/create-epic.input';
import { UpdateEpicInput } from './dto/update-epic.input';
import { Epic } from './entities/epic.entity';

@Injectable()
export class EpicService {
  constructor(@InjectRepository(Epic) private epicRepository: Repository<Epic>, @Inject('HttpServiceEpic') private readonly epicApi: HttpService) {}

  // findAll() {
  //   return `This action returns all epic`;
  // }

  async findAllRecentByDay(): Promise<Epic> {
    const res = this.epicApi.get('/natural/images')

    const epicsRes = await lastValueFrom(res)

    const epics: Epic[] = epicsRes.data

    const randomIndex = Math.floor(Math.random()*epics.length)
    
    const epic = epics[randomIndex]

    console.log(epic)

    epic.url = `https://epic.gsfc.nasa.gov/archive/natural/${epic.date.split(' ')[0].replace('-', '/').replace('-', '/')}/png/${epic.image}.png`

    return epic
  }
}
