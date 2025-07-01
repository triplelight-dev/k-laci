import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import {
    CompleteSignupDto,
    CompleteSignupResponseDto,
} from './dto/complete-signup.dto';
import { SendVerificationEmailDto } from './dto/send-verification-email.dto';
import { SignUpDto, SignUpResponseDto } from './dto/sign-up.dto';
import {
    SendVerificationCodeDto,
    VerifyCodeDto,
} from './dto/verification-code.dto';
import { EmailService } from './email.service';
import { VerificationCodeService } from './verification-code.service';

@Injectable()
export class AuthService {
  private supabase: SupabaseClient;

  constructor(
    private configService: ConfigService,
    private verificationCodeService: VerificationCodeService,
    private emailService: EmailService,
  ) {
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

      // AWS SES를 사용한 인증번호 발송 (기존 매직링크 대신)
      await this.verificationCodeService.generateAndSendCode(email);

      return { message: '인증번호가 발송되었습니다.' };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('인증번호 발송 중 오류가 발생했습니다.');
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
            interest_region_id: completeSignupDto.regionId || null,
            user_type: completeSignupDto.userType || 'GENERAL',
            agree_to_age: completeSignupDto.agreeToAge,
            agree_to_terms: completeSignupDto.agreeToTerms,
            agree_to_privacy: completeSignupDto.agreeToPrivacy,
            agree_to_marketing: completeSignupDto.agreeToMarketing || false,
            agree_to_report_reservation:
              completeSignupDto.agreeToReportReservation || false,
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
    phone_number,
    interest_region_id,
    organization,
    user_type,
    agree_to_age,
    agree_to_terms,
    agree_to_privacy,
    agree_to_marketing,
    agree_to_report_reservation,
  }: SignUpDto): Promise<SignUpResponseDto> {
    try {
      console.log('signup', {
        name,
        email,
        password,
        phone_number,
        interest_region_id,
        organization,
        user_type,
        agree_to_age,
        agree_to_terms,
        agree_to_privacy,
        agree_to_marketing,
        agree_to_report_reservation,
      });

      // 필수 동의 항목 확인
      if (!agree_to_age || !agree_to_terms || !agree_to_privacy) {
        throw new UnauthorizedException('필수 동의 항목에 모두 동의해주세요.');
      }

      // 이메일 중복 체크
      const { data: existingProfile, error: profileError } = await this.supabase
        .from('user_profiles')
        .select('email')
        .eq('email', email)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        throw new UnauthorizedException('사용자 조회 중 오류가 발생했습니다.');
      }

      if (existingProfile) {
        throw new UnauthorizedException('이미 가입된 이메일입니다.');
      }

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

      console.log('authData', authData);

      // 2. Create user profile in public.user_profiles
      const profileData = {
        id: authData.user.id,
        email: authData.user.email,
        name,
        organization: organization || null,
        phone_number: phone_number || null,
        interest_region_id: interest_region_id || null,
        user_type,
        agree_to_age,
        agree_to_terms,
        agree_to_privacy,
        agree_to_marketing: agree_to_marketing || false,
        agree_to_report_reservation: agree_to_report_reservation || false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      console.log('Inserting profile data:', profileData);

      const { error: insertError } = await this.supabase
        .from('user_profiles')
        .insert([profileData]);

      if (insertError) {
        console.error('Profile insertion error:', insertError);
        throw new UnauthorizedException(
          `Failed to create user profile: ${insertError.message}`,
        );
      }

      console.log('profileData', profileData);

      return {
        user_id: authData.user.id,
        email: authData.user.email,
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      console.error('Signup error:', error);
      throw new UnauthorizedException('회원가입 중 오류가 발생했습니다.');
    }
  }

  async sendVerificationCode({ email }: SendVerificationCodeDto) {
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

      console.log('email', email);
      console.log('## gonna send verification code');

      // 인증번호 생성 및 발송
      await this.verificationCodeService.generateAndSendCode(email);

      return { message: '인증번호가 발송되었습니다.' };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('인증번호 발송 중 오류가 발생했습니다.');
    }
  }

  async verifyCode({ email, code }: VerifyCodeDto) {
    try {
      const isVerified = await this.verificationCodeService.verifyCode(
        email,
        code,
      );

      if (isVerified) {
        return {
          verified: true,
          message: '인증이 완료되었습니다.',
        };
      } else {
        return {
          verified: false,
          message: '인증번호가 일치하지 않습니다.',
        };
      }
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('인증 중 오류가 발생했습니다.');
    }
  }
}
