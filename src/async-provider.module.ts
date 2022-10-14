import { Module } from "@nestjs/common"
import { createConnection } from "typeorm"

const options = ''

@Module({
    providers: [{
        provide: 'ASYNC_CONNECTION',
        useFactory: async () => {
            const connection = await createConnection(options)
            return connection
        },
    }],
    exports: ['CONNECTION'],
})
export class AsyncAppModule { }