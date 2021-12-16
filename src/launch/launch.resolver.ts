import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LaunchService } from './launch.service';
import { Launch } from './entities/launch.entity';
import { CreateLaunchInput } from './dto/create-launch.input';
import { UpdateLaunchInput } from './dto/update-launch.input';

@Resolver(() => Launch)
export class LaunchResolver {
  constructor(private readonly launchService: LaunchService) {}

  @Query(() => [Launch], { name: 'launches' })
  findAll() {
    return this.launchService.findAll();
  }
}
