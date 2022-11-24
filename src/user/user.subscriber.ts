import { DataSource, EntitySubscriberInterface, InsertEvent } from "typeorm"
import { User } from "./entities/user.entity"

export class UserSubscriber implements EntitySubscriberInterface<User> {
    constructor(dataSource: DataSource) {
        dataSource.subscribers.push(this)
    }

    listenTo(): typeof User {
        return User
    }

    beforeInsert(event: InsertEvent<User>): void | Promise<any> {
        console.log('BEFORE USER INSERTED: ', event.entity)
    }
}