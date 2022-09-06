import { HttpException, HttpStatus } from "@nestjs/common"

export class CatNotFoundException extends HttpException {
    constructor() {
        super('Cat not found', HttpStatus.NOT_FOUND)
    }
}