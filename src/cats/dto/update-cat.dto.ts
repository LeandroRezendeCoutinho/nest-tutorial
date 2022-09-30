import { PartialType } from '@nestjs/mapped-types'
import { IsInt } from 'class-validator'
import { CreateCatDto } from './create-cat.dto'

export class UpdateCatDto extends PartialType(CreateCatDto){
    @IsInt()
    id: number
}
