import axios, { AxiosInstance } from 'axios';

// 환경별 base URL 설정
const getBaseURL = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8000'; // 백엔드 포트에 맞게 변경
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
    console.log('🚀 API Request:', {
      method: config.method,
      url: config.url,
      baseURL: config.baseURL,
      fullURL: `${config.baseURL}${config.url}`,
      headers: config.headers,
    });
    
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
    console.error('❌ API Request Error:', error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터 (에러 처리)
apiClient.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', {
      status: response.status,
      url: response.config.url,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.error('❌ API Response Error:', {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      url: error.config?.url,
      data: error.response?.data,
      code: error.code,
    });
    
    // 401 에러 시 토큰 제거 및 로그인 페이지로 리다이렉트
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      // 로그인 페이지로 리다이렉트는 컴포넌트에서 처리
    }
    return Promise.reject(error);
  },
);
