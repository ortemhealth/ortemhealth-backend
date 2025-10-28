import { IsEmail, IsString, MinLength, IsEnum } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class RegisterDto {
  @IsEmail() email: string;
  @MinLength(6) password: string;
  @IsString() fullName: string;
  @IsEnum(UserRole) role: UserRole;
  @IsString() phone: string;
}

export class LoginDto {
  @IsEmail() email: string;
  @MinLength(6) password: string;
}
