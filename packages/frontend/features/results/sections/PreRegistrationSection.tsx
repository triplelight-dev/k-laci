'use client';

import React from 'react';

const PreRegistrationSection: React.FC = () => {
  const title = '균형발전 전략의 시작, KLACI 인사이트 리포트';
  const descriptions = [
    '지역자산역량지수 프레임워크 해설과 활용법,',
    '그리고 각 지자체의 데이터 인사이트를 한 권의 책으로 받아보세요',
  ];

  const reservationButtonText = '사전 예약 바로가기';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        padding: '60px 20px',
        backgroundColor: 'white',
        borderRadius: '12px',
        color: 'black',
        minHeight: '300px',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '24px',
          lineHeight: '1.4',
        }}
      >
        {title}
      </div>

      {descriptions.map((description, index) => (
        <div
          key={index}
          style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          {description}
        </div>
      ))}

      <button
        style={{
          border: 'none',
          padding: '16px 32px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          cursor: 'pointer',
          minWidth: '220px',
          background: 'black',
          color: 'white',
          marginTop: '50px',
        }}
        // onMouseEnter={(e) => {
        //   e.currentTarget.style.backgroundColor = '#f0f0f0';
        // }}
        // onMouseLeave={(e) => {
        //   e.currentTarget.style.backgroundColor = '#ffffff';
        // }}
      >
        {reservationButtonText}
      </button>
    </div>
  );
};

export default PreRegistrationSection;
