import { apiClient } from '../client';
import { ApiResponse } from '../types/api.types';

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
}

export interface SendVerificationEmailRequest {
  email: string;
}

export interface SendVerificationEmailResponse {
  message: string;
}

export interface CompleteSignupRequest {
  name: string;
  password: string;
  token: string;
  organization?: string;
  phoneNumber?: string;
  regionId?: string;
  agreeToAge: boolean;
  agreeToTerms: boolean;
  agreeToPrivacy: boolean;
  agreeToMarketing?: boolean;
  agreeToReportReservation?: boolean;
}

export interface CompleteSignupResponse {
  user_id: string;
  email: string;
  name: string;
  organization?: string;
  phoneNumber?: string;
  regionId?: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

export class AuthService {
  static async sendVerificationEmail(data: SendVerificationEmailRequest): Promise<ApiResponse<SendVerificationEmailResponse>> {
    const response = await apiClient.post('/auth/send-verification-email', data);
    return response.data;
  }

  static async completeSignup(data: CompleteSignupRequest): Promise<ApiResponse<CompleteSignupResponse>> {
    const response = await apiClient.post('/auth/complete-signup', data);
    return response.data;
  }

  static async signIn(data: SignInRequest): Promise<ApiResponse<AuthResponse>> {
    const response = await apiClient.post('/auth/sign-in', data);
    return response.data;
  }

  static async signUp(data: SignUpRequest): Promise<ApiResponse<AuthResponse>> {
    const response = await apiClient.post('/auth/sign-up', data);
    return response.data;
  }

  static async signOut(): Promise<ApiResponse<void>> {
    const response = await apiClient.post('/auth/sign-out');
    return response.data;
  }

  static async getProfile(): Promise<ApiResponse<AuthResponse['user']>> {
    const response = await apiClient.get('/auth/profile');
    return response.data;
  }
} 