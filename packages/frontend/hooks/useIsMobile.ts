'use client';

import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // 화면 너비가 768px 이하이거나, User-Agent가 모바일인 경우
      const isMobileByWidth = window.innerWidth <= 768;
      const isMobileByUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      
      setIsMobile(isMobileByWidth || isMobileByUserAgent);
    };

    // 초기 체크
    checkIsMobile();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return isMobile;
}; 