import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AgencyService } from './agency.service';
import { Agency } from './entities/agency.entity';
import { CreateAgencyInput } from './dto/create-agency.input';
import { UpdateAgencyInput } from './dto/update-agency.input';

@Resolver(() => Agency)
export class AgencyResolver {
  constructor(private readonly agencyService: AgencyService) {}

  @Query(() => [Agency], { name: 'agencies' })
  findAll() {
    return this.agencyService.findAll();
  }

  @Query(() => Agency, { name: 'agency' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.agencyService.findOne(id);
  }
}
