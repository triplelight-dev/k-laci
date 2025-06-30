import axios, { AxiosInstance } from 'axios';

// 환경별 base URL 설정
const getBaseURL = () => {
  if (process.env.NODE_ENV === 'development') {
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
      const token = localStorage.getItem('auth-token');
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
      // 브라우저 환경에서만 localStorage 접근
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth-token');
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  },
);
