import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  age: number;

  @Prop()
  phone: string;

  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
