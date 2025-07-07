import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

/**
 * User profile data from public.user_profiles table
 */
export interface UserProfile {
  id: string; // UUID from auth.users
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  agree_to_report_reservation?: boolean;
}

/**
 * Response type for user profile data
 */
export class UserProfileResponse {
  @ApiProperty({ description: 'User ID (UUID)' })
  id!: string;

  @ApiProperty({ description: 'User name' })
  name!: string;

  @ApiProperty({ description: 'User email' })
  email!: string;

  @ApiProperty({ description: 'Account creation timestamp' })
  createdAt!: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt!: string;

  @ApiProperty({
    description: 'Agreement to report reservation',
    required: false,
  })
  agreeToReportReservation?: boolean;
}

/**
 * Update user profile DTO
 */
export class UpdateUserProfileDto {
  @ApiProperty({ description: 'New user name', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'New user email', required: false })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({
    description: 'Agreement to report reservation',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  agree_to_report_reservation?: boolean;
}
