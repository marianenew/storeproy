/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class Product extends Document {
  //id mongo lo genera
  @Prop({
    unique: true,
    index: true,
    required: true
  })
  name: string
  @Prop({
    required: true
  })
  product_date: Date
  @Prop({
    required: true
  })
  expiration_date: Date
  @Prop({
    required: true
  })
  stock: number
  @Prop({
    required: true
  })
  price: number
  tags: [string] //imag

  //Referencia User
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user_id: Types.ObjectId

  //Referencia Category
  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  category_id: Types.ObjectId

  //(One-to-Many) Suministra
  @Prop({ type: [{ type: String, ref: 'Supply' }], default: [] })
  products: string[]
}

export const ProductSchema = SchemaFactory.createForClass(Product)
