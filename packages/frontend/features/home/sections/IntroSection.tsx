'use client';

import { DARK_MODE_COLORS } from '@/utils/colors';
import { useRouter } from 'next/navigation';
import React from 'react';

const IntroSection: React.FC = () => {
  const theme = DARK_MODE_COLORS;
  const router = useRouter();

  const titleLines = ['229곳의 지자체,', '229개의 역량진단서.'];

  const descriptionLines = [
    '각 사람에게 고유한 개성과 강점이 있듯 대한민국 229곳의 지방자치단체 역시 저마다의 잠재력을 품고 있습니다.',
    '성공적인 균형발전과 지속가능성은 지역의 특성에 기반한 정교한 진단과 고유한 처방에서부터 시작됩니다.',
  ];

  const klaciDescriptionLines = [
    'KLACI는 각 지자체가 가진 잠재자산과 자원역량을 증거 기반으로 분석하고',
    '실현가능한 정책 수립을 돕는 전략적 의사결정 도구입니다.',
  ];

  const handleButtonClick = () => {
    router.push('/results');
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '500px',
        backgroundImage: 'url(/backgrounds/home_intro_bg.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.background,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* 상단 중간 글씨 */}
      <div
        style={{
          color: 'white',
          fontSize: '16px',
          marginBottom: '15px',
          fontWeight: '400',
        }}
      >
        새로운 기회를 찾는 지역을 위한 새로운 해답
      </div>

      {/* 큰 타이틀 */}
      <div
        style={{
          color: 'white',
          fontSize: '46px',
          fontWeight: 'bold',
          marginBottom: '20px',
          lineHeight: '1.4',
        }}
      >
        {titleLines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>

      {/* 디스크립션 텍스트 */}
      <div
        style={{
          color: 'white',
          fontSize: '15px',
          marginBottom: '20px',
        }}
      >
        {descriptionLines.map((line, index) => (
          <div key={index} style={{ marginBottom: '8px' }}>
            {line}
          </div>
        ))}
      </div>

      {/* KLACI 설명 */}
      <div
        style={{
          color: 'white',
          fontSize: '15px',
          fontWeight: 600,
          marginBottom: '30px',
          // lineHeight: '1.2',
          maxWidth: '600px',
        }}
      >
        {klaciDescriptionLines.map((line, index) => (
          <div key={index} style={{ marginBottom: '8px' }}>
            {line}
          </div>
        ))}
      </div>

      {/* 버튼 */}
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        우리 지역 잠재력 확인하기
        <img
          src="/arrow_button_icon.png"
          alt="화살표 아이콘"
          style={{
            width: '10px',
            height: '10px',
            display: 'block',
          }}
        />
      </button>
    </div>
  );
};

export default IntroSection;
