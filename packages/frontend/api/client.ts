import axios, { AxiosInstance } from 'axios';

// 환경별 base URL 설정
const getBaseURL = () => {
  if (process.env.NODE_ENV === 'development') {
    // return 'https://api.klaci.kr';
    return 'http://localhost:8000'; // NestJS 백엔드 포트
  }
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
};

// axios 인스턴스 생성
export const apiClient: AxiosInstance = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 (토큰 자동 추가)
apiClient.interceptors.request.use(
  (config) => {
    // 브라우저 환경에서만 localStorage 접근
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터 (에러 처리)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 로그인/회원가입 관련 엔드포인트는 홈으로 리디렉션하지 않음
      const isAuthEndpoint = error.config?.url?.includes('/auth/sign-in') || 
                            error.config?.url?.includes('/auth/sign-up') ||
                            error.config?.url?.includes('/auth/complete-signup') ||
                            error.config?.url?.includes('/auth/send-verification-code') ||
                            error.config?.url?.includes('/auth/send-verification-email') ||
                            error.config?.url?.includes('/auth/verify-code');
      
      if (!isAuthEndpoint) {
        // 브라우저 환경에서만 localStorage 접근
        if (typeof window !== 'undefined') {
          localStorage.removeItem('access_token');
          localStorage.removeItem('user_id');
          localStorage.removeItem('user_profile');
          window.location.href = '/';
        }
      }
    }
    return Promise.reject(error);
  },
);
