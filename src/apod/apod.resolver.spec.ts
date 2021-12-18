import { Test, TestingModule } from '@nestjs/testing';
import { ApodResolver } from './apod.resolver';
import { ApodService } from './apod.service';

describe('ApodResolver', () => {
  let resolver: ApodResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApodResolver, ApodService],
    }).compile();

    resolver = module.get<ApodResolver>(ApodResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
