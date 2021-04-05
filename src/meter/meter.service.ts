import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { MeterEntity } from './meter.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NewMeterDTO } from './dto/newMeter.dto';

@Injectable()
export class MeterService implements OnModuleInit {

  private readonly logger = new Logger(MeterService.name);

  onModuleInit() {
    this.logger.log(`Meter Service loaded at ${new Date()}`);
  }

  constructor(@InjectRepository(MeterEntity) private repository: Repository<MeterEntity>) { }

  async findValueSquareMeter(): Promise<MeterEntity> {
    
    const value = await this.repository.findOne({where: { isActive: true}, order: {createdAt: 'DESC'}});

    if (!value) {
      return await this.createDefaultValue()
    }

    return value;
  }

  async createDefaultValue() {
    return this.patch({value: 1181.42});
  }

  async patch(newMeterDto: NewMeterDTO) {
    return this.repository.save(newMeterDto);
  }

  async disableAllValues() {
      return this.repository.update({}, { isActive: false });
  }
}
