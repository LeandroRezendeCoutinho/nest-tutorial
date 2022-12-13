import { DataSource } from "typeorm"
import { Photo } from "./entities/photo.entity"

export class PhotoService {
    constructor(private dataSource: DataSource) { }

    async createMany(photos: Photo[]) {
        const queryRunner = this.dataSource.createQueryRunner()

        await queryRunner.connect()
        await queryRunner.startTransaction()
        try {
            photos.forEach(async photo => {
                await queryRunner.manager.save(photo)
            })
            await queryRunner.commitTransaction()
        } catch (error) {
            await queryRunner.rollbackTransaction()
        } finally {
            await queryRunner.release()
        }
    }

    async updateMany(photos: Photo[]) {
        await this.dataSource.transaction(async manager => {
            photos.forEach(async photo => {
                await manager.update(Photo, { id: photo.id }, photo)
            })
        })
    }
}