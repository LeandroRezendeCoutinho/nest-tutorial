import { Module } from '@nestjs/common'
import { Photo } from './entities/photo.entity'
import { PhotoController } from './photo.controller'
import { PhotoService } from './photo.service'

@Module({
    imports: [Photo],
    providers: [PhotoService],
    controllers:[PhotoController]
})
export class PhotoModule { }
