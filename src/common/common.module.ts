import * as common from "@nestjs/common"
import { ConfigService } from "../config/config.service"
import { DevelopmentConfigService } from "../config/development-config.service"
import { ProductionConfigService } from "../config/production-config.service"
import { CommonService } from "./common.service"

const configServiceProvider = {
  provide: ConfigService,
  useClass:
    process.env.NODE_ENV === 'development'
      ? DevelopmentConfigService
      : ProductionConfigService
}

@common.Module({
  providers: [configServiceProvider, CommonService],
  exports: [CommonService]
})

export class CommonModule { }