import { Test, TestingModule } from '@nestjs/testing';
import { BingImageSearchService } from './bing-image-search.service';

describe('BingImageSearchService', () => {
  let service: BingImageSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BingImageSearchService],
    }).compile();

    service = module.get<BingImageSearchService>(BingImageSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
