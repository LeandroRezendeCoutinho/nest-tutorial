import { Controller, Get, Post, Body, Put, Param, Delete, UseFilters, UsePipes, Query, DefaultValuePipe, ParseBoolPipe, UseGuards } from '@nestjs/common'
import { JoiValidationPipe } from '../validations/joi-validation.pipe'
import { CatSchema } from '../validations/schemas/cat.schema'
import { ValidationPipe } from '../validations/validation.pipe'
import { CatNotFoundException } from '../exceptions/cat-not-found.exception'
import { HttpExceptionFilter } from '../exceptions/http-exception.filter'
import { CatsService } from './cats.service'
import { CreateCatDto, UpdateCatDto } from './dto'
import { Cat } from './interfaces/cat.interface'
import { ParseIntPipe } from '../pipes/parse-int.pipe'
import { AuthGuard } from '../guards/auth.guard'
import { Roles } from '../decorators/roles.decorator'

@Roles('user')
@Controller('cats')
@UseGuards(AuthGuard)
export class CatsController {
  constructor(private catsService: CatsService) { }

  @Post()
  @Roles('admin')
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new JoiValidationPipe(CatSchema))
  async create(@Body() createCatDto: CreateCatDto): Promise<void> {
    return this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(
    @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe) activeOnly: boolean,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ): Promise<Cat[]> {
    const cats = this.catsService.findAll()

    return cats
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const cat = this.catsService.find(id)
    if (cat === undefined) {
      throw new CatNotFoundException()
    }

    return cat
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
