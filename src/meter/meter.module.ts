import { Module } from "@nestjs/common";
import { MeterController } from "./meter.controller";
import { MeterService } from "./meter.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MeterEntity } from "./meter.entity";

@Module({
    imports: [TypeOrmModule.forFeature([MeterEntity])],
    controllers: [MeterController],
    providers: [MeterService],
    exports: []
})
export class MeterModule { }