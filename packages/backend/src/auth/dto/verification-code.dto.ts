import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class SendVerificationCodeDto {
  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  @IsEmail()
  email: string;
}

export class SendVerificationCodeResponseDto {
  @ApiProperty({
    description: 'Success message',
    example: '인증번호가 발송되었습니다.',
  })
  message: string;
}

export class VerifyCodeDto {
  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: '6-digit verification code',
    example: '123456',
  })
  @IsString()
  @Length(6, 6)
  code: string;
}

export class VerifyCodeResponseDto {
  @ApiProperty({
    description: 'Verification result',
    example: true,
  })
  verified: boolean;

  @ApiProperty({
    description: 'Success message',
    example: '인증이 완료되었습니다.',
  })
  message: string;
}
