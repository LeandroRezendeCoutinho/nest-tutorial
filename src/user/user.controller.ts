import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserDecorator } from '../decorators/user.decorator'
import { RolesGuard } from '../guards/roles.guard'
import { Auth } from '../decorators/auth.decorator'

@Controller('users')
@UseGuards(RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto)
  }

  @Get()
  async findAll() {
    return await this.userService.findAll()
  }

  @Get('byname')
  async findUser(@UserDecorator('firstName') firstName: string) {
    return this.userService.findOneByFirstName(firstName)
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOneById(+id)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  }

  @Get('users')
  @Auth('admin')
  async findAllUsers() {
    return await this.userService.findAll()
  }
}
