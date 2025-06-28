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
    CATEGORIES: '/data/categories',
  },
} as const; 