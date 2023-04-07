import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
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
}
