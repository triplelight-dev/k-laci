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