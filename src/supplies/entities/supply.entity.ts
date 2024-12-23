/* eslint-disable prettier/prettier */
import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export class Supply extends Document {
  @Prop({ required: true })
  date: Date
  @Prop({ required: true })
  amount: number

  //Referencia User Producto
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  category_id: Types.ObjectId

  //Referencia User Proveedor
  @Prop({ type: Types.ObjectId, ref: 'Provide', required: true })
  provide_id: Types.ObjectId


}
export const SupplySchema = SchemaFactory.createForClass(Supply)
