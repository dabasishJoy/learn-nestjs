import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  age: number;

  @Prop()
  number: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
