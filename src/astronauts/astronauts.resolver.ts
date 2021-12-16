import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AstronautsService } from './astronauts.service';
import { Astronaut } from './entities/astronaut.entity';
import { CreateAstronautInput } from './dto/create-astronaut.input';
import { UpdateAstronautInput } from './dto/update-astronaut.input';

@Resolver(() => Astronaut)
export class AstronautsResolver {
  constructor(private readonly astronautsService: AstronautsService) {}

  @Query(() => [Astronaut], { name: 'astronauts' })
  findAll() {
    return this.astronautsService.findAll();
  }

  @Query(() => Astronaut, { name: 'astronaut' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.astronautsService.findOne(id);
  }
}
