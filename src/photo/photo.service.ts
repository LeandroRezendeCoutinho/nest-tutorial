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
}