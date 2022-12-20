import { IsNotEmpty, IsOptional, IsString, ValidateIf } from "class-validator"
import { IsRequiredIf } from "../validations/is-required-if.validator"

export class PhotoDto {
    @IsNotEmpty()
    id: number
    
    @IsRequiredIf((photoDto: PhotoDto) => photoDto.id !== undefined)
    url: string

    userId: string
}