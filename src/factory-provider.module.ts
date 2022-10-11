import { Module } from "@nestjs/common"

class OptionsProvider {
    get() {
        return 'options'
    }
}

class DatabaseConnection {
    constructor(private options) {        
    }
}

const connectionProvider = {
    provide: 'CONNECTION',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useFactory: (optionsProvider: OptionsProvider, _optionalProvider?: string) => {
        const options = optionsProvider.get()
        return new DatabaseConnection(options)
    },
    inject: [OptionsProvider, { token: 'SomeOptionalProvider', optional: true }],
    //       \_____________/            \__________________/
    //        This provider              The provider with this
    //        is mandatory.              token can resolve to `undefined`.
}

@Module({
    providers: [
        connectionProvider,
        OptionsProvider,
        // { provide: 'SomeOptionalProvider', useValue: 'anything' },
    ],
})
export class FactotyProviderModule { }
