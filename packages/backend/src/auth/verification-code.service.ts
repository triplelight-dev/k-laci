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
  private readonly GRACE_PERIOD = 10; // 10초 여유 시간
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
      if (elapsed > this.VERIFICATION_TTL + this.GRACE_PERIOD) {
        this.verificationCache.delete(key);
      }
    }
  }

  private generateRandomCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async generateAndSendCode(email: string): Promise<void> {
    const code = this.generateRandomCode();
    const cacheKey = `verification:${email}`;

    // 기존 코드가 있으면 삭제
    this.verificationCache.delete(cacheKey);

    // 새 코드를 메모리에 저장
    const verificationData: VerificationData = {
      code,
      attempts: 0,
      createdAt: new Date(),
    };

    this.verificationCache.set(cacheKey, verificationData);

    // 이메일 발송
    await this.emailService.sendVerificationCode(email, code);
  }

  async verifyCode(email: string, code: string): Promise<boolean> {
    const cacheKey = `verification:${email}`;

    const cachedData = this.verificationCache.get(cacheKey);

    if (!cachedData) {
      throw new UnauthorizedException(
        '인증번호가 만료되었습니다. 다시 발송해주세요.',
      );
    }

    // 만료 시간 확인 (여유 시간 포함)
    const now = new Date();
    const elapsed = (now.getTime() - cachedData.createdAt.getTime()) / 1000;

    if (elapsed > this.VERIFICATION_TTL + this.GRACE_PERIOD) {
      this.verificationCache.delete(cacheKey);
      throw new UnauthorizedException(
        '인증번호가 만료되었습니다. 다시 발송해주세요.',
      );
    }

    // 시도 횟수 확인
    if (cachedData.attempts >= this.MAX_ATTEMPTS) {
      this.verificationCache.delete(cacheKey);
      throw new UnauthorizedException(
        '인증 시도 횟수를 초과했습니다. 다시 발송해주세요.',
      );
    }

    // 인증번호 확인
    if (cachedData.code === code) {
      this.verificationCache.delete(cacheKey); // 성공 시 캐시 삭제
      return true;
    } else {
      // 시도 횟수 증가
      cachedData.attempts++;
      this.verificationCache.set(cacheKey, cachedData);
      return false;
    }
  }
}
