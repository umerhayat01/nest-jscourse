import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): any {
    return [{ id: 0 }];
  }
}
