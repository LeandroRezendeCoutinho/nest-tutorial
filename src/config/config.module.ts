import { Module } from '@nestjs/common'
import { ConfigurableModuleClass } from './config.module-definition'

@Module({})
export class ConfigModule  extends ConfigurableModuleClass {}
