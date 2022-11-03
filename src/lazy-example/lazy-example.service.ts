import { Injectable } from '@nestjs/common'
import { LazyModuleLoader } from '@nestjs/core'

@Injectable()
export class LazyExampleService {
    constructor(private lazyModuleLoader: LazyModuleLoader) { }
}

