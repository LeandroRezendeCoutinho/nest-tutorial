import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsModule } from './cats/cats.module'
import { logger } from './middlewares/logger.middleware'
import { TypeOrmModule } from "@nestjs/typeorm"
import { UserModule } from './user/user.module'
import { ConfigModule } from './config/config.module'
import { ConfigModuleOptionsFactory } from './config/config.module.options-factory'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "tutorial.db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    CatsModule,
    UserModule,

    ConfigModule.registerAsync({
      useClass: ConfigModuleOptionsFactory,
    })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes({ path: 'cats', method: RequestMethod.GET })
  }
}
