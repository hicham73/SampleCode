import { Test, TestingModule } from '@nestjs/testing';
import { VilleResolver } from './ville.resolver';

describe('VilleResolver', () => {
  let resolver: VilleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VilleResolver],
    }).compile();

    resolver = module.get<VilleResolver>(VilleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
