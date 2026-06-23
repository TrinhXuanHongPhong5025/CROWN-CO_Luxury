import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  async register(dto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user: User = {
      id: this.idCounter++,
      username: dto.username,
      password: hashedPassword,
    };
    this.users.push(user);
    const { password, ...result } = user;
    return result;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find((u) => u.username === username);
  }
}
