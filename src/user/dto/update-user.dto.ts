import { IsString, IsOptional, IsNumber, Min, Max } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(150)
    age?: number;
}
