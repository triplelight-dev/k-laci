'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const PossibilitySection: React.FC = () => {
  const router = useRouter();

  const descriptionTexts = [
    'KLACI는 단순히 서열을 매겨 순위를 발표하는 평가가 아닙니다. 인구, 경제, 생활, 안전 영역에 걸친 55개의 지표를 다각적으로 분석하고, 8가지 성장 원형과 16개 발전 유형으로 분류해 지역의 청사진을 제시하는 과학적인 진단 도구입니다. 특히 강점과 약점을 포괄하는 통합적인 지역자산 관점을 통해, 지역의 상황을 이해하고 이에 맞는 기회를 발견하도록 돕습니다.',
  ];

  const boldTexts = [
    'KLACI는 증거 기반 정책 수립을 넘어,',
    '모든 지역주체의 지역주도성을 극대화하는 것을 목표로 합니다.',
  ];

  const handleButtonClick = () => {
    router.push('/about');
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '600px',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        padding: '60px 20px',
      }}
    >
      {/* 상단 2x2 그리드 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginBottom: '40px',
          maxWidth: '1200px',
          margin: '0 auto 40px auto',
          minHeight: '300px',
          alignItems: 'flex-start',
        }}
      >
        {/* 좌상단: 뱃지와 타이틀 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <div
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '400',
              marginBottom: '20px',
              border: '1px solid white',
            }}
          >
            지역주도성 강화를 위한 과학적 프레임워크
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: '1.2',
            }}
          >
            <div>
              지역의{' '}
              <span
                style={{
                  background:
                    'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 200%',
                }}
              >
                자산력
              </span>
              에서 찾은
            </div>
            <div>
              보물같은{' '}
              <span
                style={{
                  background:
                    'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 200%',
                }}
              >
                잠재력
              </span>
            </div>
          </div>
        </div>

        {/* 우상단: 텍스트 설명과 버튼 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          {/* 상단 일반 텍스트 */}
          <div
            style={{
              fontSize: '14px',
              color: 'white',
              lineHeight: '1.5',
              marginBottom: '20px',
            }}
          >
            {descriptionTexts.map((text, index) => (
              <div key={index} style={{ marginBottom: '12px' }}>
                {text}
              </div>
            ))}
          </div>

          {/* 하단 볼드 텍스트 */}
          <div
            style={{
              fontSize: '15px',
              color: 'white',
              marginBottom: '30px',
              fontWeight: 'bold',
            }}
          >
            {boldTexts.map((text, index) => (
              <div key={index} style={{ marginBottom: '8px' }}>
                {text}
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
              padding: '14px 32px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            KLACI 소개 더 보기
            <img
              src="/arrow_button_icon.png"
              alt="화살표 아이콘"
              style={{
                width: '10px',
                height: '10px',
                display: 'block',
                alignSelf: 'flex-start',
                marginTop: '2px',
              }}
            />
          </button>
        </div>
      </div>

      {/* 하단 이미지 */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          height: '300px',
          backgroundImage: 'url(/home/possibility.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#14161D',
          borderRadius: '32px',
        }}
      ></div>
    </div>
  );
};

export default PossibilitySection;
