/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { Supply } from './entities/supply.entity';
import { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class SupplyService {
  constructor(
    @InjectModel(Supply.name)
    private readonly supplyModel:Model<Supply>
  )
   {  }

   async create(createSupplyDto:CreateSupplyDto){
    try{
      const supply = await this.supplyModel.create(createSupplyDto)
        return supply
      }catch (error){
        this.handleExceptions(error)
      }
   }

  findAll(paginationDto:PaginationDto) {
    const {limit=10, offset=0} = paginationDto
    return this.supplyModel.find()
    .limit(limit)
    .skip(offset)
    .sort({
      name:1
    })
    .select('-__v')
  }

  async findOne(id: string) {
    let supply:Supply
    if(isValidObjectId(id)){
      supply=await this.supplyModel.findById(id)
    }
    if (!supply){
      throw new Notification(`Supply con id, name No "${id}" not found`)
    }
    return supply
  }

  async update(id: string, updateSupplyDto: UpdateSupplyDto) {
    const supply=await this.findOne(id)
    if (supply){
     try{
      await supply.updateOne(updateSupplyDto)
      return{ ...supply.toJSON, ...updateSupplyDto}
     }catch(error){
      this.handleExceptions(error)
     }
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.supplyModel.deleteOne({ _id: id })
    if (deletedCount === 0) {
      throw new BadRequestException(`Product con id "${id}" not foud`)
    }
    return
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(`Suply existe en BD ${JSON.stringify(error.keyValue)}`)
    }
    console.log(error)
    throw new InternalServerErrorException(`No se puede crear el suplies: verifique los registros del servidor`)
  }
  
}
