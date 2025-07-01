import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export enum UserType {
  GOV = 'GOV',
  EDU = 'EDU',
  GENERAL = 'GENERAL',
}

export class CompleteSignupDto {
  @ApiProperty({
    description: 'User name',
    example: '홍길동',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User password',
    example: 'password123',
  })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'Verification token from email',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  @IsString()
  @IsNotEmpty()
  token: string;

  @ApiProperty({
    description: 'User organization',
    example: '한국토지주택공사',
    required: false,
  })
  @IsString()
  @IsOptional()
  organization?: string;

  @ApiProperty({
    description: 'User phone number',
    example: '01012345678',
    required: false,
  })
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @ApiProperty({
    description: 'Interest region ID',
    example: 11010,
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => {
    if (value === '' || value === null || value === undefined) {
      return null;
    }
    return Number(value);
  })
  regionId?: number | null;

  @ApiProperty({
    description: 'User type (GOV, EDU, GENERAL)',
    example: 'GENERAL',
    enum: UserType,
  })
  @IsEnum(UserType)
  userType: UserType;

  @ApiProperty({
    description: 'Agree to age verification (14세 이상)',
    example: true,
  })
  @IsBoolean()
  agreeToAge: boolean;

  @ApiProperty({
    description: 'Agree to terms of service',
    example: true,
  })
  @IsBoolean()
  agreeToTerms: boolean;

  @ApiProperty({
    description: 'Agree to privacy policy',
    example: true,
  })
  @IsBoolean()
  agreeToPrivacy: boolean;

  @ApiProperty({
    description: 'Agree to marketing emails',
    example: false,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  agreeToMarketing?: boolean;

  @ApiProperty({
    description: 'Agree to report reservation',
    example: false,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  agreeToReportReservation?: boolean;
}

export class CompleteSignupResponseDto {
  @ApiProperty({ description: 'User ID' })
  user_id: string;

  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({ description: 'User name' })
  name: string;

  @ApiProperty({ description: 'User organization' })
  organization?: string;

  @ApiProperty({ description: 'User phone number' })
  phoneNumber?: string;

  @ApiProperty({ description: 'Interest region ID' })
  regionId?: number | null;
}
