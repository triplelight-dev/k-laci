import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [ConfigModule, CacheModule.register({ ttl: 300, max: 100 })],
  controllers: [DataController],
  providers: [DataService],
  exports: [DataService],
})
export class DataModule {}
