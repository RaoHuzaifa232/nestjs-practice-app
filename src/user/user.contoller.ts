import { Body, Controller, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from './schema/user';

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
    @UseGuards(AuthGuard('jwt'))
    @Put('update')
    async updateUser(@Body() body: { userId: string, updateData: Partial<User> }) {
        try {
            return this.userService.updateUser(body.userId, body.updateData);
        }
        catch (error) {
            return {
                status: "Error",
                message: "Failed to update user",
                error: error.message,
            };
        }
    }
}