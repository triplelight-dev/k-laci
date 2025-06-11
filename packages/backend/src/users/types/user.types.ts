import { ApiProperty } from '@nestjs/swagger';

/**
 * User profile data from public.user_profiles table
 */
export interface UserProfile {
  id: string; // UUID from auth.users
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

/**
 * Response type for user profile data
 */
export class UserProfileResponse {
  @ApiProperty({ description: 'User ID (UUID)' })
  id: string;

  @ApiProperty({ description: 'User name' })
  name: string;

  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({ description: 'Account creation timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string;
}

/**
 * Update user profile DTO
 */
export class UpdateUserProfileDto {
  @ApiProperty({ description: 'New user name', required: false })
  name?: string;

  @ApiProperty({ description: 'New user email', required: false })
  email?: string;
}
