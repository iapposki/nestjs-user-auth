import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { UserService } from './user.service';
import { Role, User } from './user.model';

@Controller('u')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async createUser(
    @Body('email') email: string,
    @Body('name') name: string,
    @Body('role') role: number,
  ): Promise<User> {
    let createdUser: any;
    switch (role) {
      case Role.powerUser:
        console.log('creating power user.');
        createdUser = this.userService.createUser({ email, name, role });
        break;
      case Role.support:
        console.log('creating support user.');
        createdUser = this.userService.createUser({ email, name, role });
        break;
      case Role.user:
        console.log('creating user.');
        createdUser = this.userService.createUser({ email, name, role });
        break;
      default:
        console.log('No such user exists!');
        break;
    }

    return createdUser;
  }
}
