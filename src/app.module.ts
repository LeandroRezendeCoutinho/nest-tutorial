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

@Module({
  imports: [
    CatsModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "tutorial.db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    })],
  controllers: [AppController],
  providers: [
    AppService
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes({ path: 'cats', method: RequestMethod.GET })
  }
}
