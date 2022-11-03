import { Module } from '@nestjs/common'
import { LazyExampleService } from './lazy-example.service'

@Module({
    providers: [LazyExampleService],
    exports: [LazyExampleService]
})
export class LazyExampleModule { }
