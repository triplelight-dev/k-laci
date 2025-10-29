'use client';

import Header from '@/components/Header/Header';
import { useIsMobile } from '@/hooks';
import { usePathname } from 'next/navigation';
import React from 'react';


const ResultLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();

  /**
   * 주어진 문자열이 '/results/region/숫자' 형태의 URL 경로인지 확인합니다.
   * @param {string} urlPath 검사할 URL 경로 문자열
   * @returns {boolean} URL 형태가 일치하면 true, 아니면 false
   */
  // URL 경로 검사 함수 (이전 답변에서 만든 정규식)
  const isRegionResultUrl = (urlPath: string): boolean => {
    const regex = /^\/results\/region\/\d+$/;
    return regex.test(urlPath);
  };

  const currentPath = usePathname();
  const isMatch = isRegionResultUrl(currentPath);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // minWidth: '1500px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: (isMobile && !isMatch) ? 'black' : '#F5F5F5',
      }}
    >
      <Header isBlackTheme={(isMobile && !isMatch) ? true : false} />
      {isMatch}
      {children}
    </div>
  );
};

export default ResultLayout;
