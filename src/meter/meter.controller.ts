import { Controller, Get, Patch, Body } from '@nestjs/common';
import { MeterService } from './meter.service';
import { MeterEntity } from './meter.entity';
import { ApiTags, ApiOkResponse, ApiInternalServerErrorResponse, ApiOperation, ApiCreatedResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { NewMeterDTO } from './dto/newMeter.dto';

@ApiTags('# Meter')
@Controller('/')
export class MeterController {
  
  constructor(private readonly meterService: MeterService) { }

  @Get()
  @ApiOperation({description: 'Get one value square meter'})
  @ApiOkResponse({type: MeterEntity})
  @ApiInternalServerErrorResponse({description: 'When an error unexpected in server.'})
  async findValueSquareMeter(): Promise<MeterEntity> {
    return this.meterService.findValueSquareMeter();
  }

  @Patch()
  @ApiCreatedResponse({description: 'New Value for square meter been successfully updated.',type: NewMeterDTO})
  @ApiOperation({description: 'Update information about a value square meter.'})
  @ApiOkResponse({ type: MeterEntity })
  @ApiNotFoundResponse({description: '.'})
  @ApiInternalServerErrorResponse({description: 'When an error unexpected in server.'})
  async patch(@Body() newMeterDTO: NewMeterDTO){
    return this.meterService.patch(newMeterDTO);
  }

}
