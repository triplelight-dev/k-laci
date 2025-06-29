import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataController } from './data.controller';
import { DataService } from './data.service';

@Module({
  imports: [
    ConfigModule,
    CacheModule.register({
      ttl: 300,
      max: 1000,
      isGlobal: true,
    }),
  ],
  controllers: [DataController],
  providers: [DataService],
  exports: [DataService],
})
export class DataModule {}
