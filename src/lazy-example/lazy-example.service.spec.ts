import { Test, TestingModule } from '@nestjs/testing';
import { LazyExampleService } from './lazy-example.service';

describe('LazyExampleService', () => {
  let service: LazyExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LazyExampleService],
    }).compile();

    service = module.get<LazyExampleService>(LazyExampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
