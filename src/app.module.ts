import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { MeterController } from './meter/meter.controller';
import { MeterService } from './meter/meter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeterEntity } from './meter/meter.entity';
import { MeterModule } from './meter/meter.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [MeterEntity],
        synchronize: true,
      }
    ),
    MeterModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  
  configure(consumer: MiddlewareConsumer) {

    consumer
        .apply(LoggerMiddleware)
        .forRoutes({path: '*', method: RequestMethod.ALL});
  }

}
