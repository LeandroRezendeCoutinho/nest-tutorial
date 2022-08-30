import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
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

    @Get('/redirect')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        switch (version) {
            case '5':
                return {
                    "url": 'https://docs.nestjs.com/v5/',
                    "statusCode": 301
                }    
                break;
            case '6':
                return {
                    "url": 'https://docs.nestjs.com/v6/',
                    "statusCode": 301
                }
        }    
    }

    @Get(':id')
    findOne(@Param() params): string {
        return `Returns param id ${params.id}`
    }
}
