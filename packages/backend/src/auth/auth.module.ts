import { Module } from '@nestjs/common';
import { LogsService } from '../logs/logs.service';
import { SupabaseModule } from '../supabase/supabase.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmailService } from './email.service';
import { VerificationCodeService } from './verification-code.service';

@Module({
  imports: [SupabaseModule],
  controllers: [AuthController],
  providers: [AuthService, EmailService, VerificationCodeService, LogsService],
  exports: [AuthService],
})
export class AuthModule {}
