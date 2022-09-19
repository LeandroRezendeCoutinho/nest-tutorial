import { Controller, Get, Post, Body, Put, Param, Delete, UseFilters, HttpStatus, UsePipes } from '@nestjs/common'
import { JoiValidationPipe } from 'src/validations/joi-validation.pipe'
import { CatSchema as CatSchema } from '../validations/schemas/cat.schema'
import { ValidationPipe } from 'src/validations/validation.pipe'
import { CatNotFoundException } from '../exceptions/cat-not-found.exception'
import { HttpExceptionFilter } from '../exceptions/http-exception.filter'
import { CatsService } from './cats.service'
import { CreateCatDto, UpdateCatDto } from './dto'
import { Cat } from './interfaces/cat.interface'
import { ParseIntPipe } from 'src/pipes/parse-int.pipe'

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) { }

  @Post()
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new JoiValidationPipe(CatSchema))
  async create(@Body() createCatDto: CreateCatDto): Promise<void> {
    return this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    const cats = this.catsService.findAll()
    if (JSON.stringify(cats) === JSON.stringify([])) {
      throw new CatNotFoundException()
    }

    return cats
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    return `This action returns a #${id} cat`
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body(new ValidationPipe()) updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`
  }
}
