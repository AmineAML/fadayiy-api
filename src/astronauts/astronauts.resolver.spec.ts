import { Test, TestingModule } from '@nestjs/testing';
import { AstronautsResolver } from './astronauts.resolver';
import { AstronautsService } from './astronauts.service';

describe('AstronautsResolver', () => {
  let resolver: AstronautsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AstronautsResolver, AstronautsService],
    }).compile();

    resolver = module.get<AstronautsResolver>(AstronautsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
