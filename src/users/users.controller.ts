import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {

    @Post()
    getUserId(@Req() request: Request): string {
    console.log("🚀 ~ file: users.controller.ts ~ line 8 ~ UsersController ~ getUserId ~ request", request)

        return 'Success'; 
    }
}
