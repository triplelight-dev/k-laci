import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import * as path from 'path';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get('SMTP_USER'),
        pass: this.configService.get('SMTP_PASS'), // Gmail 앱 비밀번호
      },
    });
  }

  async sendVerificationCode(email: string, code: string): Promise<void> {
    // 개발 환경 체크
    const isDevelopment = this.configService.get('NODE_ENV') === 'development';

    // if (isDevelopment) {
    //   // 개발 환경에서는 로그로만 출력
    //   this.logger.log(
    //     `[DEV] Verification code ${code} would be sent to ${email}`,
    //   );
    //   this.logger.log(
    //     `[DEV] Email template: ${this.generateEmailTemplate(code)}`,
    //   );
    //   return;
    // }

    // 프로젝트 루트 경로 계산 (src/auth/email.service.ts에서 3단계 상위로)
    const projectRoot = path.resolve(__dirname, '../../../');
    const emailLogoPath = path.join(projectRoot, 'assets/email/email_logo.png');
    const klaciLogoPath = path.join(
      projectRoot,
      'assets/email/klaci_logo_email.png',
    );

    const mailOptions = {
      from:
        this.configService.get('SMTP_FROM') ||
        this.configService.get('SMTP_USER'),
      to: email,
      subject: '[KLACI] 이메일 인증번호',
      html: this.generateEmailTemplate(code),
      attachments: [
        {
          filename: 'email_logo.png',
          path: emailLogoPath,
          cid: 'email_logo',
        },
        {
          filename: 'klaci_logo_email.png',
          path: klaciLogoPath,
          cid: 'klaci_logo_email',
        },
      ],
    };

    try {
      await this.transporter.sendMail(mailOptions);
      this.logger.log(`Verification code ${code} sent to ${email}`);
    } catch (error) {
      this.logger.error(`Failed to send email to ${email}:`, error);
      throw new Error('이메일 발송에 실패했습니다.');
    }
  }

  private generateEmailTemplate(code: string): string {
    return `
      <div style="font-family: Arial, sans-serif; width: 100%; margin: 0 auto; padding: 20px; background-color: #F8F8F8;">
        <!-- 메인 콘텐츠 박스 -->
        <div style="background-color: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 600px; margin: 20px auto;">
          <!-- 상단 로고 -->
          <div style="text-align: center; margin-bottom: 10px;">
            <img src="cid:klaci_logo_email" alt="KLACI Logo" style="width: 40px; height: 40px; margin-bottom: 15px;">
          </div>

          <!-- 메인 제목 -->
          <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="color: #333; margin: 0 0 2px 0; font-size: 24px; font-weight: 600;">지역자산역량지수</h1>
            <h2 style="color: #333; margin: 0; font-size: 24px; font-weight: 600;">가입 이메일 인증</h2>
          </div>

          <!-- 설명 텍스트 -->
          <div style="text-align: center; margin-bottom: 25px;">
            <p style="color: #666; font-size: 13px; line-height: 1.6; margin: 0; width: 360px; margin: 0 auto;">
              안녕하세요, 지역자산역량지수(KLACI) 회원가입을 위한 인증번호를 보내드립니다. 아래 인증번호를 입력하여 이메일 인증을 완료해주세요.
            </p>
          </div>

          <!-- 인증번호 입력 필드 -->
          <div style="text-align: center; margin: 30px 0;">
            <div style="display: inline-block; width: 360px; border: 1px solid #000; border-radius: 6px; padding: 15px 20px; background-color: #ffffff;">
              <span style="font-size: 30px; font-weight: 600; color: #000; letter-spacing: 2px; font-family: 'Courier New', monospace;">${code}</span>
            </div>
          </div>

          <!-- 주의사항 -->
          <div style="text-align: center; margin: 30px 0;">
            <div style="display: inline-block; width: 360px; background-color: #F8F8F8; border: 1px solid #000; border-radius: 8px; padding: 20px;">
              <h3 style="color: #333; font-size: 14px; margin: 0 0 15px 0; font-weight: 600; text-align: left;">주의사항</h3>
              <ul style="color: #666; font-size: 13px; line-height: 1.4; margin: 0; padding-left: 20px; text-align: left;">
                <li style="margin-bottom: 6px;">인증번호는 3분 후 만료됩니다.</li>
                <li style="margin-bottom: 6px;">본인이 요청하지 않은 경우 이 메일을 삭제해주세요.</li>
                <li style="margin-bottom: 6px;">인증번호는 절대 타인에게 알려주지 마십시오.</li>
              </ul>
            </div>
          </div>

          <!-- 하단 정보 -->
          <div style="margin-top: 40px;">
            <div style="border-top: 1px solid #eee; margin: 0 -40px 35px -40px;"></div>
            <div style="text-align: center; margin-top: 15px;">
              <p style="color: #999; font-size: 12px; margin: 0 0 5px 0;">
                이 메일은 <a href="http://klaci.kr" style="color: #667eea; text-decoration: none;">http://klaci.kr</a> 회원가입 인증을 위해 발송되었습니다.
              </p>
              <p style="color: #999; font-size: 12px; margin: 0;">
                문의사항이 있는 경우 <a href="mailto:klaci@triplelight.co" style="color: #667eea; text-decoration: none;">klaci@triplelight.co</a>로 메일을 보내주세요.
              </p>
            </div>
          </div>
        </div>

        <!-- 하단 로고 (흰색 박스 밖) -->
        <div style="text-align: center; margin-top: 30px; margin-bottom: 100px;">
          <img src="cid:email_logo" alt="Email Logo" style="width: 150px; height: auto;">
        </div>
      </div>
    `;
  }
}
