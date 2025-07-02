export const API_ENDPOINTS = {
  AUTH: {
    SIGN_IN: '/auth/sign-in',
    SIGN_UP: '/auth/sign-up',
    SIGN_OUT: '/auth/sign-out',
    PROFILE: '/auth/profile',
  },
  DISTRICT: {
    LIST: '/districts',
    DETAIL: (id: string) => `/districts/${id}`,
    SEARCH: '/districts/search',
  },
  DATA: {
    PROVINCES: '/data/provinces',
    REGIONS: '/data/regions',
    REGION: (id: string) => `/data/regions/${id}`,
    ADJACENT_REGION: (rank: number, direction: 'prev' | 'next') => `/data/regions/adjacent/${rank}/${direction}`,
    PROVINCES_WITH_REGIONS: '/data/provinces-with-regions',
    CATEGORIES: '/data/categories',
    KEY_INDEX: (id: number) => `/data/key-indexes/${id}`,
  },
} as const;

export const AUTH_ENDPOINTS = {
  // 새로운 인증번호 방식
  SEND_VERIFICATION_CODE: '/auth/send-verification-code',
  VERIFY_CODE: '/auth/verify-code',
  
  // 기존 API들
  SEND_VERIFICATION_EMAIL: '/auth/send-verification-email', // 사용하지 않음
  SIGNUP: '/auth/sign-up',
  SIGNIN: '/auth/sign-in',
} as const; 