'use client';

import { useIsMobile } from '@/hooks';
import React from 'react';
import MobileNotice from './MobileNotice';

interface MobileDetectorProps {
  children: React.ReactNode;
}

const MobileDetector: React.FC<MobileDetectorProps> = ({ children }) => {
  const isMobile = useIsMobile();
  // const isMobile = false;

  // 모바일인 경우 안내 페이지 표시
  if (isMobile) {
    return <MobileNotice />;
  }

  // PC인 경우 기존 컨텐츠 표시
  return <>{children}</>;
};

export default MobileDetector;
