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
    KEY_INDEX: (id: number) => `/data/key-indexes/${id}`,
  },
  STATS: {
    TOTAL_RANKS: '/stats/rank/total',
    MAJOR_PROVINCES: '/stats/rank/major-provinces',
    SELECTED_PROVINCES: '/stats/rank/selected-provinces',
    FREE_ECONOMY_ZONE: '/stats/rank/free-economy-zone',
    GROWTH_BOOST_ZONE: '/stats/rank/growth-boost-zone',
    NATIONAL_INDUSTRIAL_ZONE: '/stats/rank/national-industrial-zone',
    COSTAL_CITY: '/stats/rank/costal-city',
    MEGA_REGION: '/stats/rank/mega-region',
    KLACI_CODE: '/stats/rank/klaci-code',
    PROVINCE_RANK: '/stats/province',
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