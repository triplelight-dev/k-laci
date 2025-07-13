// 공통 API 응답 타입
export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message: string | null;
  errorCode: string | null;
}

// 페이지네이션 타입
export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// 에러 타입
export interface ApiError {
  message: string;
  status: number;
  code?: string;
}

// 요청 상태 타입
export interface RequestState {
  loading: boolean;
  error: ApiError | null;
}

export interface KeyIndexData {
  id: number;
  code: string;
  name: string;
  category: string;
  description: string;
  unit?: string;
  source?: string;
  calculation_method?: string;
  created_at?: string;
  updated_at?: string;
  yearly_avg_score?: number;
  year?: number; // 추가
}

export interface KeyIndexWithDetails {
  id: number;
  code: string;
  name: string;
  category: string;
  description: string;
  source?: string;
  unit?: string;
  name_eng?: string;
  calculation_method?: string; // 추가
  yearly_avg_score?: number; // 추가
  year?: number; // 추가
}

export interface RegionKeyIndexScoreResponse {
  region_key_index_score: RegionKeyIndexScore;
  avg_score: number;
  key_index: KeyIndexWithDetails;
  rank?: number; // 추가
}

// 사용자 프로필 타입
export interface UserProfile {
  name: string;
  email: string;
  organization?: string;
  interest_region_id?: number;
  user_type: string;
}

// 인증 관련 타입들
export interface AuthApiTypes {
  SendVerificationEmailRequest: {
    email: string;
  };
  
  SendVerificationEmailResponse: {
    message: string;
  };
  
  VerifyCodeRequest: {
    email: string;
    code: string;
  };
  
  VerifyCodeResponse: {
    verified: boolean;
    message: string;
  };
  
  SignUpRequest: {
    email: string;
    password: string;
    name: string;
    phone: string;
    interest_region: string;
  };
  
  SignUpResponse: {
    message: string;
  };
  
  SignInRequest: {
    email: string;
    password: string;
  };
  
  SignInResponse: {
    access_token: string;
    user_id: string;
    email: string;
    profile: UserProfile;
  };
} 