import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EpicService } from './epic.service';
import { Epic } from './entities/epic.entity';
import { CreateEpicInput } from './dto/create-epic.input';
import { UpdateEpicInput } from './dto/update-epic.input';

@Resolver(() => Epic)
export class EpicResolver {
  constructor(private readonly epicService: EpicService) {}

  // @Query(() => [Epic], { name: 'epic' })
  // findAll() {
  //   return this.epicService.findAll();
  // }

  @Query(() => Epic, { name: 'EarthPolychromaticImagingCamera' })
  findOne() {
    return this.epicService.findAllRecentByDay();
  }
}
