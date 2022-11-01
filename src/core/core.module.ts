import { Global, Module, OnModuleInit } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { CommonModule } from '../common/common.module'
import CoreService from './core.service'

@Global()
@Module({
    imports: [CommonModule],
})
export class CoreModule implements OnModuleInit {
    private coreService: CoreService

    constructor(private moduleRef: ModuleRef) { }

    onModuleInit() {
        this.coreService = this.moduleRef.get(CoreService, { strict: false })
    }
}
