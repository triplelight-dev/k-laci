import { apiClient } from '../client';
import { ApiResponse } from '../types/api.types';

export interface UserProfileResponse {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  agreeToReportReservation?: boolean;
}

export interface UpdateUserProfileRequest {
  name?: string;
  email?: string;
  agree_to_report_reservation?: boolean;
}

export class UserService {
  static async getProfile(): Promise<ApiResponse<UserProfileResponse>> {
    const response = await apiClient.get('/users/profile');
    return response.data;
  }

  static async updateProfile(data: UpdateUserProfileRequest): Promise<ApiResponse<UserProfileResponse>> {
    const response = await apiClient.put('/users/profile', data);
    return response.data;
  }

  static async updateReportReservation(agreeToReportReservation: boolean): Promise<ApiResponse<UserProfileResponse>> {
    const response = await apiClient.put('/users/profile', {
      agree_to_report_reservation: agreeToReportReservation,
    });
    return response.data;
  }
} 