'use client';

import { DARK_MODE_COLORS } from '@/utils/colors';
import React from 'react';

const MobileNotice: React.FC = () => {
  return (
    <div
      className="animate-fade-in flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4"
      style={{
        background: DARK_MODE_COLORS.background,
      }}
    >
      {/* 모바일 페이지 이미지 */}
      <div className="mb-6 flex justify-center">
        <img
          src="/mobile/mobile_page.png"
          alt="모바일 페이지"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </div>
    </div>
  );
};

export default MobileNotice;
