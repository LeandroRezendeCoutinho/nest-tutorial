import { Injectable, OnModuleInit } from "@nestjs/common"
import { ContextIdFactory, ModuleRef } from "@nestjs/core"
import { TransientService } from "./transient.service"

@Injectable()
export default class CoreService implements OnModuleInit {
    constructor(private moduleRef: ModuleRef) { }

    async onModuleInit() {
        const contextId = ContextIdFactory.create()
        const transientServices = await Promise.all([
            this.moduleRef.resolve(TransientService, contextId),
            this.moduleRef.resolve(TransientService, contextId),
        ])
        console.log(transientServices[0] === transientServices[1]) // true
    }
}