import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto, LoginDto } from '../../../libs/shared/src/dtos/user.dto';
import { User } from '../../../libs/shared/src/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(dto: RegisterDto): Promise<{ token: string; user: User }> {
    // TODO: save user in database
    const user = { ...dto, id: Date.now().toString(), role: dto.role } as User;
    const token = this.jwtService.sign({ sub: user.id });
    return { token, user };
  }

  async login(dto: LoginDto): Promise<{ token: string; user: User }> {
    // TODO: validate credentials
    const user = { email: dto.email, id: '1', role: 'patient' } as User;
    const token = this.jwtService.sign({ sub: user.id });
    return { token, user };
  }
}
