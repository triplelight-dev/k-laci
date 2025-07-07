export const ENV_CONFIG = {
  // 개발 환경 설정
  development: {
    isMobile: process.env.NEXT_PUBLIC_DEV_MOBILE === 'true' ? true : false,
    autoLogin: process.env.NEXT_PUBLIC_DEV_AUTO_LOGIN !== 'false',
    devUser: {
      user_id: 'dev-user-id',
      email: process.env.NEXT_PUBLIC_DEV_EMAIL || 'dev@example.com',
      profile: {
        name: process.env.NEXT_PUBLIC_DEV_USER_NAME || '개발자',
        email: process.env.NEXT_PUBLIC_DEV_EMAIL || 'dev@example.com',
        organization: process.env.NEXT_PUBLIC_DEV_ORGANIZATION || '개발팀',
        interest_region_id: parseInt(process.env.NEXT_PUBLIC_DEV_REGION_ID || '1'),
        user_type: process.env.NEXT_PUBLIC_DEV_USER_TYPE || 'GENERAL',
      },
    },
    devToken: 'dev-access-token',
  },
  
  // 프로덕션 환경 설정
  production: {
    isMobile: null, // 실제 디바이스 감지
    autoLogin: false,
  },
  
  // 테스트 환경 설정
  test: {
    isMobile: false,
    autoLogin: false,
  },
} as const;

export const getCurrentEnvConfig = () => {
  const env = process.env.NODE_ENV || 'development';
  return ENV_CONFIG[env as keyof typeof ENV_CONFIG];
};

// 사이트 URL 설정
export const getSiteUrl = () => {
  // 환경변수로 설정된 URL이 있으면 사용
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  
  // 환경변수가 없으면 환경에 따라 기본값 사용
  const env = process.env.NODE_ENV || 'development';
  
  switch (env) {
    case 'production':
      return 'https://klaci.kr';
    case 'development':
      return 'https://dev.klaci.kr';
    default:
      return 'https://klaci.kr';
  }
};

// Production 도메인인지 확인하는 함수
export const isProductionDomain = () => {
  const siteUrl = getSiteUrl();
  return process.env.NODE_ENV === 'production' && 
         siteUrl.includes('klaci.kr') && 
         !siteUrl.includes('dev.klaci.kr');
};

// SEO 설정이 필요한지 확인하는 함수
export const shouldApplySEO = () => {
  return isProductionDomain();
}; 