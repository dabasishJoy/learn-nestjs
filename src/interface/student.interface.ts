import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  readonly email: string;
  age: number;
  phone: string;
}
