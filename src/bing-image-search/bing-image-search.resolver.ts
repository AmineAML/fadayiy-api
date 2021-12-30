import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BingImageSearchService } from './bing-image-search.service';
import { BingImageSearch } from './entities/bing-image-search.entity';
import { CreateBingImageSearchInput } from './dto/create-bing-image-search.input';
import { UpdateBingImageSearchInput } from './dto/update-bing-image-search.input';

@Resolver(() => BingImageSearch)
export class BingImageSearchResolver {
  constructor(private readonly bingImageSearchService: BingImageSearchService) {}

  @Query(() => BingImageSearch, { name: 'bingImageSearch' })
  findOne(@Args('query') query: string) {
    return this.bingImageSearchService.findOne(query);
  }
}
