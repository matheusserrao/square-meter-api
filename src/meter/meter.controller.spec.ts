import { Test, TestingModule } from '@nestjs/testing';
import { MeterController } from './meter.controller';
import { MeterService } from './meter.service';

describe('MeterController', () => {
  
  let meterController: MeterController;

  beforeEach(async () => {

    const app: TestingModule = await Test.createTestingModule({
      controllers: [MeterController],
      providers: [MeterService],
    }).compile();

    meterController = app.get<MeterController>(MeterController);
  });

  describe('root', () => {

    it('should return "Hello World!"', () => {
      expect(meterController.findValueSquareMeter()).toBe(1);
    });

  });
});
