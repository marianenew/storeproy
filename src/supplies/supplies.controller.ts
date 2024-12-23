/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SupplyService } from './supplies.service';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('supply')
export class SupplyController {
  constructor(private readonly supplyService: SupplyService) {}

  @Post()
  create(@Body() createSupplyDto: CreateSupplyDto) {
    return this.supplyService.create(createSupplyDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.supplyService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupplyDto: UpdateSupplyDto) {
    return this.supplyService.update(id, updateSupplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplyService.remove(id);
  }
}