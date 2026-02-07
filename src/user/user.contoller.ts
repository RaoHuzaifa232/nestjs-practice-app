import { Body, Controller, Post, Put, UseGuards, Request, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('create')
    async createUser(@Body(new ValidationPipe()) body: CreateUserDto) {
        try {
            return this.userService.createUser(body);
        }
        catch (error) {
            return {
                status: "Error",
                message: "Failed to create user",
            };
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('update')
    async updateUser(@Request() req, @Body(new ValidationPipe()) body: UpdateUserDto) {
        try {
            // Only allow users to update their own profile
            return this.userService.updateUser(req.user.sub, body);
        }
        catch (error) {
            return {
                status: "Error",
                message: "Failed to update user",
            };
        }
    }
}