/* eslint-disable prettier/prettier */
import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class Category extends Document {
  @Prop({
    required: true
  })
  name: string

  //(One-to-Many) Categoria
  @Prop({ type: [{ type: String, ref: 'Product' }], default: [] })
  products: string[]

}

export const CategorySchema = SchemaFactory.createForClass(Category)
