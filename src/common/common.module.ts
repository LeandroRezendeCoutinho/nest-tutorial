import { forwardRef, Module } from "@nestjs/common"
import { CatsModule } from "../cats/cats.module"
import { ConfigService } from "../config/config.service"
import { DevelopmentConfigService } from "../config/development-config.service"
import { ProductionConfigService } from "../config/production-config.service"

const configServiceProvider = {
  provide: ConfigService,
  useClass:
    process.env.NODE_ENV === 'development'
      ? DevelopmentConfigService
      : ProductionConfigService
}

@Module({
    imports: [forwardRef(() => CatsModule )],
    providers: [configServiceProvider]
})
  
export class CommonModule {}
