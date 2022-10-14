import { Module } from "@nestjs/common"

class OptionsProvider  {
    get() {
        return ''
    } 
}

class DatabaseConnection {   
    private options: string
    constructor(options: string) {
        this.options = options
    }
}

const connectionFactory = {
    provide: 'CONNECTION',
    useFactory: (optionsProvider: OptionsProvider) => {
        const options = optionsProvider.get()
        return new DatabaseConnection(options)
    },
    inject: [OptionsProvider],
}

@Module({
    providers: [connectionFactory],
    exports: ['CONNECTION'],
})
export class AppModule { }