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
            const user = await this.userService.createUser(body);
            return {
                status: "Success",
                data: user,
                message: "User created successfully",
            };
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
            // Check if JWT token user ID matches the user being updated
            const tokenUserId = req.user.sub;

            if (!tokenUserId) {
                return {
                    status: "Error",
                    message: "Unauthorized: Invalid token",
                };
            }

            // Verify that the user ID in the request body matches the logged-in user
            if (body.id && body.id !== tokenUserId) {
                return {
                    status: "Error",
                    message: "Unauthorized: Cannot update another user's profile",
                };
            }

            // Only allow users to update their own profile
            return this.userService.updateUser(tokenUserId, body);
        }
        catch (error) {
            return {
                status: "Error",
                message: "Failed to update user",
            };
        }
    }
}