import { Injectable } from '@nestjs/common';
import { User } from '../../../libs/shared/src/entities/user.entity';

@Injectable()
export class UserService {
  async findById(id: string): Promise<User> {
    // TODO: fetch from DB
    return { id, email: 'john@doe.com', role: 'patient' } as User;
  }
}
