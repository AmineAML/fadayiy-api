import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';
import { TranslationService } from 'src/common/translation/translation.service';
import { Repository } from 'typeorm';
import { CreateAgencyInput } from './dto/create-agency.input';
import { UpdateAgencyInput } from './dto/update-agency.input';
import { Agency } from './entities/agency.entity';

@Injectable()
export class AgencyService {
  constructor(@InjectRepository(Agency) private agenciesRepository: Repository<Agency>, @Inject('HttpServiceLaunchLibrary') private readonly launchLibraryApi: HttpService, private readonly translationService: TranslationService) {}

  async findAll(): Promise<Agency[]> {
    let agencies: Agency[] =[]

    let isNextNull: boolean = false

    let offset = 0

    while(!isNextNull) {
      const res = this.launchLibraryApi.get(`/agencies/?limit=100&&offset=${offset}`)

      const agenciesRes = await lastValueFrom(res)

      agenciesRes.data.next == null ? isNextNull = true :  isNextNull = false
  
      agencies.push(...agenciesRes.data.results)

      offset += 100
    }

    return agencies
  }

  async findOne(id: number): Promise<Agency> {
    const res = this.launchLibraryApi.get(`agencies/${id}`)

    const agencyRes = await lastValueFrom(res)

    let agency: Agency = agencyRes.data

    // agency = await this.translationService.translatedData(agency)

    return agency
  }
}
