import { Test, TestingModule } from '@nestjs/testing';
import { EpicResolver } from './epic.resolver';
import { EpicService } from './epic.service';

describe('EpicResolver', () => {
  let resolver: EpicResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EpicResolver, EpicService],
    }).compile();

    resolver = module.get<EpicResolver>(EpicResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
