import { Injectable, OnModuleInit } from "@nestjs/common"
import { ModuleRef } from "@nestjs/core"
import { TransientService } from "./transient.service"

@Injectable()
export default class CoreService implements OnModuleInit {
    private transientService: TransientService
    constructor(private moduleRef: ModuleRef) { }

    async onModuleInit() {
        this.transientService = await this.moduleRef.resolve(TransientService)
    }
}