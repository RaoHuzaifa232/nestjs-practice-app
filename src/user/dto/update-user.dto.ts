import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
    id: number;
    @IsOptional()
    @IsString()
    name: string;
    @IsOptional()
    @IsString()
    role: string;
}