import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ApodService } from './apod.service';
import { Apod } from './entities/apod.entity';
import { CreateApodInput } from './dto/create-apod.input';
import { UpdateApodInput } from './dto/update-apod.input';

@Resolver(() => Apod)
export class ApodResolver {
  constructor(private readonly apodService: ApodService) {}

  // @Query(() => [Apod], { name: 'apods' })
  // findAll() {
  //   return this.apodService.findAll();
  // }

  @Query(() => Apod, { name: 'astronomyPictureOfTheDay' })
  findOne() {
    return this.apodService.findOne();
  }
}
