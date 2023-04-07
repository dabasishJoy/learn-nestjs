import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Res() response, @Body() createUserDto: CreateUserDto) {
    const newUser = await this.userService.createUser(createUserDto);

    return response
      .status(HttpStatus.CREATED)
      .json({ message: 'Student Created Successfully', newUser });
  }

  @Get()
  async getUsers(@Res() response) {
    const users = await this.userService.getUsers();

    return response.status(HttpStatus.OK).json({
      users,
    });
  }
}
