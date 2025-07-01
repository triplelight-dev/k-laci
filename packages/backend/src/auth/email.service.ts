import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

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
    console.log('isDevelopment', isDevelopment);

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

    const mailOptions = {
      from:
        this.configService.get('SMTP_FROM') ||
        this.configService.get('SMTP_USER'),
      to: email,
      subject: '[KLACI] 이메일 인증번호',
      html: this.generateEmailTemplate(code),
    };

    console.log('mailoptions', mailOptions);

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
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #333; margin: 0; font-size: 24px;">KLACI 이메일 인증</h2>
          </div>
          
          <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            안녕하세요! KLACI 회원가입을 위한 인증번호를 발송드립니다.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 25px; text-align: center; margin: 25px 0; border-radius: 8px; border: 2px dashed #007bff;">
            <h3 style="color: #007bff; font-size: 32px; margin: 0; letter-spacing: 3px; font-weight: bold;">${code}</h3>
          </div>
          
          <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            위 인증번호를 입력하여 이메일 인증을 완료해주세요.
          </p>
          
          <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="color: #856404; font-size: 14px; margin: 0; line-height: 1.5;">
              <strong>⚠️ 주의사항:</strong><br>
              • 인증번호는 3분 후 만료됩니다.<br>
              • 본인이 요청하지 않은 경우 이 메일을 무시하셔도 됩니다.<br>
              • 인증번호는 절대 타인에게 알려주지 마세요.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              이 메일은 KLACI 회원가입 인증을 위해 발송되었습니다.
            </p>
          </div>
        </div>
      </div>
    `;
  }
}
