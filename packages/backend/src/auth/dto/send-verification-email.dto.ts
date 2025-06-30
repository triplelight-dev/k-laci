import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class SendVerificationEmailDto {
  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  @IsEmail()
  email: string;
}

export class SendVerificationEmailResponseDto {
  @ApiProperty({
    description: 'Success message',
    example: '인증메일이 발송되었습니다.',
  })
  message: string;
}
