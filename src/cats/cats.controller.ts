import { Controller, Get, Post, Body, Put, Param, Delete, ForbiddenException } from '@nestjs/common';
import { CatNotFoundException } from 'src/exceptions/cat-not-found.exception';
import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {  
  constructor(private catsService: CatsService) {}   
  
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    let cats = this.catsService.findAll()
    if (JSON.stringify(cats) === JSON.stringify([])) {
      throw new CatNotFoundException();
    }
    
    return cats
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}