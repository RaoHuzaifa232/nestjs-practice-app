import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @IsEmail({}, { message: 'Invalid email address' })
    email: string;

    @IsString()
    @MinLength(4, { message: 'Password must be at least 4 characters' })
    password: string;
}
