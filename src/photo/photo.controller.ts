import { Body, Controller, Post } from '@nestjs/common'
import { PhotoDto } from './photo.dto'
import { PhotoService } from './photo.service'

@Controller('photo')
export class PhotoController {

    constructor(private readonly photoService: PhotoService) { }

    @Post()
    create(@Body() photoDto: PhotoDto) {
        console.log(photoDto)
        
        return { code: 201, message: 'Created'}
        // return await this.photoService.createMany([photoDto])
    }
}
