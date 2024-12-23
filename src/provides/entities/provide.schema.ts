/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import {  Contact, ContactSchema } from "./contact.schema";

export class Provide extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ type: ContactSchema, required: true })
  contact: Contact;
}
export const ProvideSchema = SchemaFactory.createForClass(Provide);
