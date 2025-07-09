import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DataModule } from './data/data.module';
import { StatsModule } from './stats/stats.module';
import { SupabaseModule } from './supabase/supabase.module';
import { UserLoggingModule } from './user-logging/user-logging.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SupabaseModule,
    AuthModule,
    DataModule,
    StatsModule,
    UserModule,
    UserLoggingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
