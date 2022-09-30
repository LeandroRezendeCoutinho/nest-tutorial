import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto & User> {
    return await this.userRepository.save(createUserDto)
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find()
  }

  async findOneById(id: number) {
    return await this.userRepository.findOneBy( { id })
  }

  async findOneByFirstName(firstName: string) {
    return await this.userRepository.findOneBy( { firstName })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, updateUserDto)
  }

  async remove(id: number) {
    return this.userRepository.delete({ id })
  }
}
