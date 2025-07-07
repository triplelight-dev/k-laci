import { Module } from '@nestjs/common';
import { SupabaseModule } from '../supabase/supabase.module';
import { UserLoggingController } from './user-logging.controller';
import { UserLoggingService } from './user-logging.service';

@Module({
  imports: [SupabaseModule],
  controllers: [UserLoggingController],
  providers: [UserLoggingService],
  exports: [UserLoggingService],
})
export class UserLoggingModule {}
