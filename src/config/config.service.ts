import { Inject, Injectable } from '@nestjs/common'
import path from 'path'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import { EnvConfig } from './interfaces/env.config'
import { ConfigModuleOptions } from './interfaces/config-module-options.interface'
import { MODULE_OPTIONS_TOKEN } from './config.module-definition'


@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig

  constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: ConfigModuleOptions) {
    const filePath = `${process.env.NODE_ENV || 'development'}.env`
    const envFile = path.resolve(__dirname, '../../', options.folder, filePath)
    this.envConfig = dotenv.parse(fs.readFileSync(envFile))
  }

  get(key: string): string {
    return this.envConfig[key]
  }
}
