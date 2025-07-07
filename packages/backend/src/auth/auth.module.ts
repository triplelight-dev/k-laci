import { Module } from '@nestjs/common';
import { SupabaseModule } from '../supabase/supabase.module';
import { UserLoggingModule } from '../user-logging/user-logging.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmailService } from './email.service';
import { VerificationCodeService } from './verification-code.service';

@Module({
  imports: [SupabaseModule, UserLoggingModule],
  controllers: [AuthController],
  providers: [AuthService, EmailService, VerificationCodeService],
  exports: [AuthService],
})
export class AuthModule {}
