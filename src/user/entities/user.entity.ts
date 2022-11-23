import { IsBoolean, IsNumber, IsString } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Photo } from "../../photo/entities/photo.entity"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @IsNumber()
    id: number

    @Column()
    @IsString()
    firstName: string

    @Column()
    @IsString()
    lastName: string

    @Column()
    @IsBoolean()
    isActive: boolean

    @OneToMany(type => Photo, photo => photo.user)
    photos: Photo[]
}