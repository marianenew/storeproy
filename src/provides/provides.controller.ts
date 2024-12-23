/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Body, Delete } from "@nestjs/common";
import { ProvideService } from "./provides.service";
import { CreateProvideDto } from "./dto/create-provide.dto";

@Controller("provide")
export class ProvideController {
  constructor(private readonly provideService: ProvideService) {}

  @Post()
  create(@Body() createProvideDto: CreateProvideDto) {
    return this.provideService.create(createProvideDto);
  }

  @Get()
  findAll() {
    return this.provideService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.provideService.findOne(id);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.provideService.delete(id);
  }
}