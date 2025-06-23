'use client';

import React from 'react';
import { categoryColors } from '@/constants/colors';

const PreRegistrationSection: React.FC = () => {
  const title = '균형발전 전략의 시작, KLACI 인사이트 리포트';
  const descriptionLine1 = '지역자산역량지수 프레임워크 해설과 활용법,';
  const descriptionLine2 =
    '그리고 각 지자체의 데이터 인사이트를 한 권의 책으로 받아보세요';

  const reservationButtonText = '사전 예약 바로가기';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#808DA1',
        borderRadius: '12px',
        color: '#ffffff',
        minHeight: '300px',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          fontSize: '1.5rem',
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
          fontSize: '1.2rem',
          textAlign: 'center',
          lineHeight: 1.5,
        }}
      >
        {descriptionLine1}
      </div>
      <div
        style={{
          fontSize: '1.2rem',
          textAlign: 'center',
          lineHeight: 1.5,
        }}
      >
        {descriptionLine2}
      </div>

      <button
        style={{
          border: 'none',
          padding: '16px 32px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          cursor: 'pointer',
          minWidth: '220px',
          background: 'white',
          color: '#1C3FD3',
          marginTop: '50px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f0f0f0';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
        }}
      >
        {reservationButtonText}
      </button>
    </div>
  );
};

export default PreRegistrationSection;
