import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async getUsers(): Promise<User> {
    return this.usersRepository.find({});
  }
  async createUser(email: string, age: number, number: string): Promise<User> {
    return this.usersRepository.create({
      email,
      age,
      number,
    });
  }
}
