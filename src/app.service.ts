import { Injectable, OnModuleInit } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { CommonService } from './common/common.service'

@Injectable()
export class AppService implements OnModuleInit {
  private service: CommonService
  constructor(private moduleRef: ModuleRef) { }

  onModuleInit() {
    this.service = this.moduleRef.get(CommonService, { strict: false })
  }

  getHello(): string {
    return 'Hello World!'
  }
}
