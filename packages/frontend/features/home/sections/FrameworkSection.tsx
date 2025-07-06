'use client';

import { DARK_MODE_COLORS } from '@/utils/colors';
import React from 'react';

const FrameworkSection: React.FC = () => {
  const frameworkDescriptions = [
    'KLACI는 대한민국 229개 지방자치단체를 55개 세부지표 데이터로 분석하고',
    '인구, 경제, 생활, 안전 등 4대 핵심범주의 점수에 따라 유형화(Classification)하여',
    '각 지자체가 가진 고유한 특성과 발전 전략을 다각적으로 진단하도록 설계되었습니다.',
  ];

  return (
    <div
      style={{
        width: '100%',
        minHeight: '400px',
        backgroundColor: DARK_MODE_COLORS.background,
        display: 'flex',
        flexDirection: 'column',
        padding: '80px 20px',
        alignItems: 'center',
      }}
    >
      {/* 타이틀 */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '12px',
            lineHeight: '1.2',
          }}
        >
          지역자산역량지수 프레임워크
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: 'white',
            opacity: 0.8,
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          KOREA LOCAL ASSET COMPETENCY INDEX FRAMEWORK
        </p>
      </div>

      {/* 설명 텍스트들 */}
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {frameworkDescriptions.map((description, index) => (
          <div
            key={index}
            style={{
              fontSize: '16px',
              color: 'white',
              lineHeight: '1.6',
              opacity: 0.9,
            }}
          >
            {description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameworkSection;
