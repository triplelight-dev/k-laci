import axios, { AxiosInstance } from 'axios';

// 환경별 base URL 설정
const getBaseURL = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8000'; // 로컬 NestJS 백엔드 포트로 변경
    // return 'https://api.klaci.kr'; // 운영 서버 테스트용
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
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터 (에러 처리)
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 401 에러 시 토큰 제거 및 로그인 페이지로 리다이렉트
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      // 로그인 페이지로 리다이렉트는 컴포넌트에서 처리
    }
    return Promise.reject(error);
  },
);
