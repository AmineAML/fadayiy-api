import { Test, TestingModule } from '@nestjs/testing';
import { BingImageSearchResolver } from './bing-image-search.resolver';
import { BingImageSearchService } from './bing-image-search.service';

describe('BingImageSearchResolver', () => {
  let resolver: BingImageSearchResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BingImageSearchResolver, BingImageSearchService],
    }).compile();

    resolver = module.get<BingImageSearchResolver>(BingImageSearchResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
