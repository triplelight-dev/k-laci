import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailService } from './email.service';

interface VerificationData {
  code: string;
  attempts: number;
  createdAt: Date;
}

@Injectable()
export class VerificationCodeService {
  private readonly VERIFICATION_TTL = 180; // 3분
  private readonly MAX_ATTEMPTS = 3;

  // 메모리 맵으로 캐시 대체
  private verificationCache = new Map<string, VerificationData>();

  constructor(
    private configService: ConfigService,
    private emailService: EmailService,
  ) {
    // 3분마다 만료된 데이터 정리
    setInterval(() => {
      this.cleanupExpiredData();
    }, 60000); // 1분마다 실행
  }

  private cleanupExpiredData(): void {
    const now = new Date();
    for (const [key, data] of this.verificationCache.entries()) {
      const elapsed = (now.getTime() - data.createdAt.getTime()) / 1000;
      if (elapsed > this.VERIFICATION_TTL) {
        this.verificationCache.delete(key);
        console.log(`[DEBUG] Expired cache removed: ${key}`);
      }
    }
  }

  private generateRandomCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async generateAndSendCode(email: string): Promise<void> {
    const code = this.generateRandomCode();
    const cacheKey = `verification:${email}`;

    console.log(`[DEBUG] Generating code for email: ${email}`);
    console.log(`[DEBUG] Cache key: ${cacheKey}`);
    console.log(`[DEBUG] Generated code: ${code}`);

    // 기존 코드가 있으면 삭제
    this.verificationCache.delete(cacheKey);
    console.log(`[DEBUG] Existing cache deleted`);

    // 새 코드를 메모리에 저장
    const verificationData: VerificationData = {
      code,
      attempts: 0,
      createdAt: new Date(),
    };

    this.verificationCache.set(cacheKey, verificationData);
    console.log(
      `[DEBUG] Code saved to memory with TTL: ${this.VERIFICATION_TTL} seconds`,
    );
    console.log(`[DEBUG] Verification - saved data:`, verificationData);
    console.log(`[DEBUG] Verification - saved code: ${code}`);
    console.log(`[DEBUG] Cache key used for save: ${cacheKey}`);

    // 저장된 데이터 확인
    const savedData = this.verificationCache.get(cacheKey);
    console.log(`[DEBUG] Immediately after save - cached data:`, savedData);
    console.log(`[DEBUG] Current cache size: ${this.verificationCache.size}`);

    // 이메일 발송
    await this.emailService.sendVerificationCode(email, code);
  }

  async verifyCode(email: string, code: string): Promise<boolean> {
    const cacheKey = `verification:${email}`;

    console.log(`[DEBUG] Verifying code for email: ${email}`);
    console.log(`[DEBUG] Cache key: ${cacheKey}`);
    console.log(`[DEBUG] Input code: ${code}`);
    console.log(`[DEBUG] Current cache size: ${this.verificationCache.size}`);

    const cachedData = this.verificationCache.get(cacheKey);
    console.log(`[DEBUG] Cached data:`, cachedData);

    if (!cachedData) {
      console.log(`[DEBUG] No cached data found`);
      throw new UnauthorizedException(
        '인증번호가 만료되었습니다. 다시 발송해주세요.',
      );
    }

    // 만료 시간 확인
    const now = new Date();
    const elapsed = (now.getTime() - cachedData.createdAt.getTime()) / 1000;

    console.log(`[DEBUG] Elapsed time: ${elapsed} seconds`);
    console.log(`[DEBUG] TTL: ${this.VERIFICATION_TTL} seconds`);

    if (elapsed > this.VERIFICATION_TTL) {
      console.log(`[DEBUG] Code expired`);
      this.verificationCache.delete(cacheKey);
      throw new UnauthorizedException(
        '인증번호가 만료되었습니다. 다시 발송해주세요.',
      );
    }

    // 시도 횟수 확인
    if (cachedData.attempts >= this.MAX_ATTEMPTS) {
      console.log(`[DEBUG] Max attempts reached`);
      this.verificationCache.delete(cacheKey);
      throw new UnauthorizedException(
        '인증 시도 횟수를 초과했습니다. 다시 발송해주세요.',
      );
    }

    // 인증번호 확인
    if (cachedData.code === code) {
      console.log(`[DEBUG] Code verified successfully`);
      this.verificationCache.delete(cacheKey); // 성공 시 캐시 삭제
      return true;
    } else {
      console.log(`[DEBUG] Code mismatch`);
      // 시도 횟수 증가
      cachedData.attempts++;
      this.verificationCache.set(cacheKey, cachedData);
      console.log(`[DEBUG] Attempts increased to: ${cachedData.attempts}`);
      return false;
    }
  }
}
