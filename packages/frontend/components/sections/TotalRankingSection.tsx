'use client';

import React from 'react';

// 타이틀과 검색창을 별도 컴포넌트로 분리
const SectionHeader: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 40px',
        marginBottom: '30px',
      }}
    >
      {/* 좌상단: 제목 */}
      <div>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            margin: 0,
          }}
        >
          종합순위 TOP 100
        </h2>
      </div>

      {/* 우측: 검색창 */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '12px',
            zIndex: 1,
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="지역 검색"
          style={{
            width: '280px',
            height: '36px',
            padding: '8px 12px 8px 36px',
            border: '1px solid #E5E7EB',
            borderRadius: '6px',
            fontSize: '14px',
            outline: 'none',
            backgroundColor: '#F9FAFB',
            transition: 'all 0.2s ease',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#3B82F6';
            e.target.style.backgroundColor = 'white';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#E5E7EB';
            e.target.style.backgroundColor = '#F9FAFB';
          }}
        />
      </div>
    </div>
  );
};

const TotalRankingSection: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        padding: '40px 0',
        backgroundColor: '#F4F4F4', // 배경색과 동일하게 설정
        borderRadius: '12px',
        border: '2px solid #3B82F6', // 개발 편의를 위한 파란색 보더
      }}
    >
      <SectionHeader />

      {/* 하단 컨텐츠 영역 (나중에 표가 들어갈 예정) */}
      <div
        style={{
          padding: '0 40px',
          minHeight: '200px',
        }}
      >
        {/* 여기에 표가 들어갈 예정 */}
      </div>
    </div>
  );
};

export default TotalRankingSection; 