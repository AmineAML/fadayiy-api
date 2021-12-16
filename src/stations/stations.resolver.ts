import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Station } from './entities/station.entity';
import { StationsService } from './stations.service';

@Resolver(of => Station)
export class StationsResolver {
    constructor(private stationsService: StationsService) {}

    @Query(returns => [Station], { name: 'stations' })
    findAll(): Promise<Station[]> {
        return this.stationsService.findAll();
    }

    @Query(returns => Station, { name: 'station' })
    findOne(@Args('id', { type: () => Int}) id: number): Promise<Station> {
        return this.stationsService.findOne(id);
    }
}
