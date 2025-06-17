'use client';

import React from 'react';
import { categoryColors } from '@/constants/colors';

const PreRegistrationSection: React.FC = () => {
  const title = '전국 229개 지자체를 분석한 KLACI 통합 리포트';
  const description = '정식 공개 전, 사전 예약자에게 먼저 제공합니다.';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#000000',
        color: '#ffffff',
        minHeight: '300px',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '16px',
          lineHeight: '1.4',
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: '16px',
          textAlign: 'center',
          marginBottom: '32px',
          lineHeight: '1.5',
        }}
      >
        {description}
      </div>

      <button
        style={{
          backgroundColor: '#ffffff',
          color: '#000000',
          border: 'none',
          padding: '16px 32px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          cursor: 'pointer',
          minWidth: '280px',
          transition: 'all 0.3s ease',
          background: `linear-gradient(90deg, ${categoryColors.인구성장력} 0%, ${categoryColors.경제활동력} 33%, ${categoryColors.생활기반력} 66%, ${categoryColors.안전회복력} 100%)`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f0f0f0';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
        }}
      >
        지금 사전 예약하기
      </button>
    </div>
  );
};

export default PreRegistrationSection;
