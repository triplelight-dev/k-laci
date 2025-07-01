import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignInDto {
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
}

export class UserProfileDto {
  @ApiProperty({ description: 'User name' })
  name: string;

  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({ description: 'User organization', required: false })
  organization?: string;

  @ApiProperty({ description: 'Interest region ID', required: false })
  interest_region_id?: number;

  @ApiProperty({ description: 'User type' })
  user_type: string;
}

export class SignInResponseDto {
  @ApiProperty({ description: 'Access token' })
  access_token: string;

  @ApiProperty({ description: 'User ID' })
  user_id: string;

  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({
    description: 'User profile information',
    type: UserProfileDto,
  })
  profile: UserProfileDto;
}
