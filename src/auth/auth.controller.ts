import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body() body: { email: string; password: string },
    ) {
        try {
            return this.authService.login(body.email, body.password);
        } catch (error) {
            return {
                status: "Error",
                message: "Login failed",
                error: error.message,
            };
        }
    }
}