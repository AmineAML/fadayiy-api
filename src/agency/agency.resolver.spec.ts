import { Test, TestingModule } from '@nestjs/testing';
import { AgencyResolver } from './agency.resolver';
import { AgencyService } from './agency.service';

describe('AgencyResolver', () => {
  let resolver: AgencyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgencyResolver, AgencyService],
    }).compile();

    resolver = module.get<AgencyResolver>(AgencyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
