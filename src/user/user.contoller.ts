import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('create')
    async createUser(@Body() body: { email: string, password: string }) {
        try {
            return this.userService.createUser(body);
        }
        catch (error) {
            return {
                status: "Error",
                message: "Failed to create user",
                error: error.message,
            };
        }
    }
}