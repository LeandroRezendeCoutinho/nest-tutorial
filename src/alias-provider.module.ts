import { Injectable, Module } from "@nestjs/common"
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';

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
    imports: [AuthModule, ConfigModule],
})
export class AppModule {}
