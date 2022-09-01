import { Global, Module } from '@nestjs/common';
import { CommonModule } from './common.module';

@Global()
@Module({
    imports: [CommonModule],
})
export class CoreModule {}
