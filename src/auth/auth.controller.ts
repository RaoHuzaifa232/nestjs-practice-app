import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body(new ValidationPipe()) body: LoginDto,
    ) {
        try {
            return this.authService.login(body.email, body.password);
        } catch (error) {
            return {
                status: "Error",
                message: "Login failed",
            };
        }
    }
}