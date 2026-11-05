import { Test, TestingModule } from '@nestjs/testing';
import { PublishersController } from './publishers.controller.js';
import { PublishersService } from './publishers.service.js';

describe('PublishersController', () => {
  let controller: PublishersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublishersController],
      providers: [PublishersService],
    }).compile();

    controller = module.get<PublishersController>(PublishersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
