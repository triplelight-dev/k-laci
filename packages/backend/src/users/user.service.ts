import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import {
  UpdateUserProfileDto,
  UserProfile,
  UserProfileResponse,
} from './types/user.types';

@Injectable()
export class UserService {
  constructor(private readonly supabaseService: SupabaseService) {}

  /**
   * Get user profile by ID
   */
  async getUserProfile(userId: string): Promise<UserProfileResponse> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('user_profiles')
      .select(
        'id, name, email, created_at, updated_at, agree_to_report_reservation',
      )
      .eq('id', userId)
      .single();

    if (error || !data) {
      throw new NotFoundException('User profile not found');
    }

    return this.transformUserProfile(data);
  }

  /**
   * Update user profile
   */
  async updateUserProfile(
    userId: string,
    updateDto: UpdateUserProfileDto,
  ): Promise<UserProfileResponse> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('user_profiles')
      .update({
        ...updateDto,
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId)
      .select()
      .single();

    if (error || !data) {
      throw new NotFoundException('User profile not found');
    }

    return this.transformUserProfile(data);
  }

  /**
   * Agree to report reservation (simple utility method)
   */
  async agreeToReportReservation(userId: string): Promise<UserProfileResponse> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('user_profiles')
      .update({
        agree_to_report_reservation: true,
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId)
      .select()
      .single();

    if (error || !data) {
      throw new NotFoundException('User profile not found');
    }

    return this.transformUserProfile(data);
  }

  /**
   * Delete user account and profile
   */
  async deleteUser(userId: string): Promise<void> {
    // First delete the user profile
    const { error: profileError } = await this.supabaseService
      .getClient()
      .from('user_profiles')
      .delete()
      .eq('id', userId);

    if (profileError) {
      throw new Error('Failed to delete user profile');
    }

    // Then delete the user from auth.users
    const { error: authError } = await this.supabaseService
      .getClient()
      .auth.admin.deleteUser(userId);

    if (authError) {
      throw new Error('Failed to delete user from auth');
    }
  }

  /**
   * Transform database user profile to response format
   */
  private transformUserProfile(profile: UserProfile): UserProfileResponse {
    const response = new UserProfileResponse();
    response.id = profile.id;
    response.name = profile.name;
    response.email = profile.email;
    response.createdAt = profile.created_at;
    response.updatedAt = profile.updated_at;
    response.agreeToReportReservation = profile.agree_to_report_reservation;
    return response;
  }
}
