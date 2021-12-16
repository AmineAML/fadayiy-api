import { Test, TestingModule } from '@nestjs/testing';
import { LaunchResolver } from './launch.resolver';
import { LaunchService } from './launch.service';

describe('LaunchResolver', () => {
  let resolver: LaunchResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaunchResolver, LaunchService],
    }).compile();

    resolver = module.get<LaunchResolver>(LaunchResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
