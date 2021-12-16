import { Test, TestingModule } from '@nestjs/testing';
import { AstronautsService } from './astronauts.service';

describe('AstronautsService', () => {
  let service: AstronautsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AstronautsService],
    }).compile();

    service = module.get<AstronautsService>(AstronautsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
