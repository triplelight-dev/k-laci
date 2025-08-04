import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { UserType } from '../types/auth.types';

export class SignUpDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email address of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the user (minimum 6 characters)',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The full name of the user',
    minLength: 2,
  })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({
    example: '01012345678',
    description: 'The phone number of the user',
    required: false,
  })
  @IsOptional()
  @IsString()
  phone_number?: string;

  @ApiProperty({
    example: 123,
    description: 'The interest region ID of the user',
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
  interest_region_id?: number | null;

  @ApiProperty({
    example: 'Company Inc.',
    description: 'The organization of the user',
    required: false,
  })
  @IsOptional()
  @IsString()
  organization?: string;

  @ApiProperty({
    example: 'GENERAL',
    description: 'The user type (GOV, BUSINESS, GENERAL)',
    enum: UserType,
  })
  @IsEnum(UserType)
  user_type: UserType;

  @ApiProperty({
    example: true,
    description: 'Agreement to age requirement (14 years or older)',
  })
  @IsBoolean()
  agree_to_age: boolean;

  @ApiProperty({
    example: true,
    description: 'Agreement to terms of service',
  })
  @IsBoolean()
  agree_to_terms: boolean;

  @ApiProperty({
    example: true,
    description: 'Agreement to privacy policy',
  })
  @IsBoolean()
  agree_to_privacy: boolean;

  @ApiProperty({
    example: false,
    description: 'Agreement to marketing communications',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  agree_to_marketing?: boolean;

  @ApiProperty({
    example: false,
    description: 'Agreement to report reservation',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  agree_to_report_reservation?: boolean;
}

export class SignUpResponseDto {
  @ApiProperty({ description: 'User ID' })
  user_id: string;

  @ApiProperty({ description: 'User email' })
  email: string;
}
