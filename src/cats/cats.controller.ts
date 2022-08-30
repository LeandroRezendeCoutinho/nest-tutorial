import { Controller, Get, Header, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from "express";

@Controller('cats')
export class CatsController {
    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    create(): string {
        return 'Add a new cat'
    }


    @Get()
    findAll(@Req() request: Request): string{
        return 'Return all cats'
    }
}
