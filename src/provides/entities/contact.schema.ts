/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Document } from "mongoose";

export @Schema()
class Contact {
  @Prop({ required: true })
  cell_phone: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  address: string;
}
export const ContactSchema = SchemaFactory.createForClass(Contact);