/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SupplyService } from './supplies.service';
import { SupplyController } from './supplies.controller';
import { Supply, SupplySchema } from './entities/supply.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [SupplyController],
  providers: [SupplyService],
imports: [
    MongooseModule.forFeature([
      {
        name: Supply.name,
        schema: SupplySchema
      }
    ])
  ]
})
export class SupplyModule {}