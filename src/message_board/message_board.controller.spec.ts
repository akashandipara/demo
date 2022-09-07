import { Test, TestingModule } from '@nestjs/testing';
import { MessageBoardController } from './message_board.controller';

describe('MessageBoardController', () => {
  let controller: MessageBoardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageBoardController],
    }).compile();

    controller = module.get<MessageBoardController>(MessageBoardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
