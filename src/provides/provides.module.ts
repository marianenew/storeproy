/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProvideService } from './provides.service';
import { ProvideController } from './provides.controller';
import { Provide, ProvideSchema } from './entities/provide.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ProvideController],
  providers: [ProvideService],
imports: [
    MongooseModule.forFeature([
      {
        name: Provide.name,
        schema: ProvideSchema
      }
    ])
  ]
})
export class ProvidesModule {}
