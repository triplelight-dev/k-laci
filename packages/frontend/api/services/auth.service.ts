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
  phone_number?: string;
  interest_region_id?: number | null;
  organization?: string;
  user_type: 'GOV' | 'EDU' | 'GENERAL';
  agree_to_age: boolean;
  agree_to_terms: boolean;
  agree_to_privacy: boolean;
  agree_to_marketing?: boolean;
  agree_to_report_reservation?: boolean;
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
  regionId?: number | null;
  userType: 'GOV' | 'EDU' | 'GENERAL';
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

export interface VerifyCodeRequest {
  email: string;
  code: string;
}

export interface VerifyCodeResponse {
  verified: boolean;
  message: string;
}

export interface SignUpResponse {
  user_id: string;
  email: string;
}

export interface SignInResponse {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
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

  static async signIn(data: SignInRequest): Promise<ApiResponse<SignInResponse>> {
    const response = await apiClient.post('/auth/signin', data);
    return response.data;
  }

  static async signUp(data: SignUpRequest): Promise<ApiResponse<SignUpResponse>> {
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

  static async sendVerificationCode(data: SendVerificationEmailRequest): Promise<ApiResponse<SendVerificationEmailResponse>> {
    const response = await apiClient.post('/auth/send-verification-code', data);
    return response.data;
  }

  static async verifyCode(data: VerifyCodeRequest): Promise<ApiResponse<VerifyCodeResponse>> {
    const response = await apiClient.post('/auth/verify-code', data);
    return response.data;
  }
} 