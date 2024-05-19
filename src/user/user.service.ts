import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userReopsitory: Repository<User>){}
  async create(createUserDto: CreateUserDto) {
    return await this.userReopsitory.save({...createUserDto})
  }

  async findAll() {
    return await this.userReopsitory.find()
  }

  async findOne(id: number) {
    return await this.userReopsitory.findBy({id});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userReopsitory.update(id,{...updateUserDto})
    return 'User updated'
  }

  async remove(id: number) {
    await this.userReopsitory.delete(id)
    return 'User deleted'
  }
}