import { Injectable, Module } from "@nestjs/common"
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from './config/config.module'
import { PhotoController } from './photo/photo.controller';
import { PhotoModule } from './photo/photo.module';

@Injectable()
class LoggerService {
    /* implementation details */
}

const loggerAliasProvider = {
    provide: 'AliasedLoggerService',
    useExisting: LoggerService,
}

@Module({
    providers: [LoggerService, loggerAliasProvider],
    imports: [AuthModule, ConfigModule, PhotoModule],
    controllers: [PhotoController],
})
export class AliasProviderModule { }
