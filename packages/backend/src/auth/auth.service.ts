import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import {
  CompleteSignupDto,
  CompleteSignupResponseDto,
} from './dto/complete-signup.dto';
import { SendVerificationEmailDto } from './dto/send-verification-email.dto';
import { SignUpDto, SignUpResponseDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.getOrThrow<string>('SUPABASE_URL');
    const supabaseKey =
      this.configService.getOrThrow<string>('SUPABASE_ANON_KEY');

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) {
      throw new UnauthorizedException(error.message);
    }
    return { message: 'Successfully signed out' };
  }

  async getSession() {
    const {
      data: { session },
      error,
    } = await this.supabase.auth.getSession();
    if (error) {
      throw new UnauthorizedException(error.message);
    }
    return session;
  }

  async getUserProfile(userId: string) {
    const { data, error } = await this.supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return data;
  }

  async sendVerificationEmail({ email }: SendVerificationEmailDto) {
    try {
      // 이메일 중복 체크 - user_profiles 테이블에서 확인
      const { data: existingProfile, error: profileError } = await this.supabase
        .from('user_profiles')
        .select('email')
        .eq('email', email)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        // PGRST116는 "결과가 없음" 에러
        throw new UnauthorizedException('사용자 조회 중 오류가 발생했습니다.');
      }

      if (existingProfile) {
        throw new UnauthorizedException('이미 가입된 이메일입니다.');
      }

      // 인증 이메일 발송
      const frontendUrl =
        this.configService.get<string>('FRONTEND_URL') ||
        'http://localhost:3000';
      const { error } = await this.supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${frontendUrl}/auth/signup/profile`,
        },
      });

      if (error) {
        throw new UnauthorizedException(error.message);
      }

      return { message: '인증메일이 발송되었습니다.' };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('인증메일 발송 중 오류가 발생했습니다.');
    }
  }

  async completeSignup(
    completeSignupDto: CompleteSignupDto,
  ): Promise<CompleteSignupResponseDto> {
    try {
      // 토큰으로 사용자 확인
      const {
        data: { user },
        error: tokenError,
      } = await this.supabase.auth.getUser(completeSignupDto.token);

      if (tokenError || !user) {
        throw new UnauthorizedException('유효하지 않은 인증 토큰입니다.');
      }

      // 필수 동의 항목 확인
      if (
        !completeSignupDto.agreeToAge ||
        !completeSignupDto.agreeToTerms ||
        !completeSignupDto.agreeToPrivacy
      ) {
        throw new UnauthorizedException('필수 동의 항목에 모두 동의해주세요.');
      }

      // 비밀번호 설정 및 사용자 정보 업데이트
      const { error: updateError } = await this.supabase.auth.updateUser({
        password: completeSignupDto.password,
        data: {
          name: completeSignupDto.name,
        },
      });

      if (updateError) {
        throw new UnauthorizedException(updateError.message);
      }

      // 사용자 프로필 생성
      const { error: profileError } = await this.supabase
        .from('user_profiles')
        .insert([
          {
            id: user.id,
            email: user.email,
            name: completeSignupDto.name,
            organization: completeSignupDto.organization,
            phone_number: completeSignupDto.phoneNumber,
            interest_region_id: completeSignupDto.regionId
              ? parseInt(completeSignupDto.regionId)
              : null,
            agree_to_marketing: completeSignupDto.agreeToMarketing || false,
            agree_to_report_reservation:
              completeSignupDto.agreeToReportReservation || false,
            is_over_thirteen: completeSignupDto.agreeToAge, // 14세 이상 동의 여부
            // created_at, updated_at은 자동으로 설정됨
          },
        ]);

      if (profileError) {
        throw new UnauthorizedException('프로필 생성에 실패했습니다.');
      }

      return {
        user_id: user.id,
        email: user.email,
        name: completeSignupDto.name,
        organization: completeSignupDto.organization,
        phoneNumber: completeSignupDto.phoneNumber,
        regionId: completeSignupDto.regionId,
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('회원가입 완료 중 오류가 발생했습니다.');
    }
  }

  async signup({
    name,
    email,
    password,
  }: SignUpDto): Promise<SignUpResponseDto> {
    // 1. Create user in auth.users
    const { data: authData, error: authError } =
      await this.supabase.auth.signUp({
        email,
        password,
      });

    if (authError) {
      throw new UnauthorizedException(authError.message);
    }

    if (!authData.user) {
      throw new UnauthorizedException('Failed to create user');
    }

    // 2. Create user profile in public.user_profiles
    const { error: profileError } = await this.supabase
      .from('user_profiles')
      .insert([
        {
          id: authData.user.id,
          email: authData.user.email,
          name,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]);

    if (profileError) {
      // If profile creation fails, we should clean up the auth user
      await this.supabase.auth.admin.deleteUser(authData.user.id);
      throw new UnauthorizedException(
        `Failed to create user profile: ${profileError.message}`,
      );
    }

    return {
      user_id: authData.user.id,
      email: authData.user.email,
    };
  }
}

export const AUTH_ERRORS = {
  NO_AUTH_HEADER: 'No authorization header',
  INVALID_TYPE: 'Invalid authorization type',
  NO_TOKEN: 'No token provided',
  INVALID_TOKEN: 'Invalid token',
  INVALID_CREDENTIALS: 'Invalid credentials',
  USER_NOT_FOUND: 'User not found',
  PROFILE_CREATION_FAILED: 'Failed to create user profile',
} as const;

export type AuthErrorKey = keyof typeof AUTH_ERRORS;
