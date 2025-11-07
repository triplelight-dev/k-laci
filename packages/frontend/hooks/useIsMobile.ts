'use client';

import { getCurrentEnvConfig } from '@/config/environment';
import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const envConfig = getCurrentEnvConfig();

  useEffect(() => {
    // 개발 환경에서 설정된 값 사용
    // if (envConfig.isMobile !== null) {
    //   setIsMobile(envConfig.isMobile);
    //   return;
    // }

    // 프로덕션에서는 실제 디바이스 감지
    const checkIsMobile = () => {
      const isMobileByWidth = window.innerWidth <= 768;
      const isMobileByUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      
      setIsMobile(isMobileByWidth || isMobileByUserAgent);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [envConfig.isMobile]);

  return isMobile;
}; 