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

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

export class AuthService {
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