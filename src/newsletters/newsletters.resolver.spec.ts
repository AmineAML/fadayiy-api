import { Test, TestingModule } from '@nestjs/testing';
import { NewslettersResolver } from './newsletters.resolver';

describe('NewslettersResolver', () => {
  let resolver: NewslettersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewslettersResolver],
    }).compile();

    resolver = module.get<NewslettersResolver>(NewslettersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
