/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Provide } from "./entities/provide.schema";
import { CreateProvideDto } from "./dto/create-provide.dto";

@Injectable()
export class ProvideService {
  constructor(
    @InjectModel(Provide.name) private provideModel: Model<Provide>,
  ) {}

  async create(createProvideDto: CreateProvideDto): Promise<Provide> {
    const createdProvide = new this.provideModel(createProvideDto);
    return createdProvide.save();
  }

  async findAll(): Promise<Provide[]> {
    return this.provideModel.find().exec();
  }

  async findOne(id: string): Promise<Provide> {
    const provide = await this.provideModel.findById(id).exec();
    if (!provide) {
      throw new NotFoundException(`Provide with ID ${id} not found`);
    }
    return provide;
  }

  async delete(id: string): Promise<void> {
    const result = await this.provideModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Provide with ID ${id} not found`);
    }
  }
}

