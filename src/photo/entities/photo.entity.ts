import { Column, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../../user/entities/user.entity"

export class Photo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    user: User
}