'use client';

import { ROUTES } from '@/constants/data';
import { DARK_MODE_COLORS } from '@/utils/colors';
import { useRouter } from 'next/navigation';
import React from 'react';

const ComingSoonSection: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(ROUTES.RESULT);
  };

  const descriptionTexts = [
    '전국 229개 지역을 종합순위부터 혁신·해안·산업 도시 등 주제별 비교까지',
    '다양한 레이블로 확인해 볼 수 있는 주요 결과 페이지는 이번주 목요일부터 공개됩니다.',
  ];

  return (
    <section
      className="animate-fade-in flex h-screen w-full flex-col items-center bg-gradient-to-br from-blue-50 to-indigo-100"
      style={{
        background: DARK_MODE_COLORS.background,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {/* 메인 타이틀 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          <h1
            className="font-poppins font-bold tracking-[-1.05px]"
            style={{
              fontSize: '43px',
              lineHeight: '110%',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            지역자산역량지수 주요 결과
          </h1>
          <h2
            className="font-poppins font-bold tracking-[-1.05px]"
            style={{
              fontSize: '2.5rem',
              lineHeight: '110%',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            7월 10일 공개 예정
          </h2>
        </div>

        {/* 설명 텍스트 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '800px',
            marginBottom: '10px',
            lineHeight: 1.5,
          }}
        >
          {descriptionTexts.map((text, index) => (
            <p
              key={index}
              className="font-poppins"
              style={{
                fontSize: '1.125rem',
                lineHeight: '160%',
                color: '#FFFFFF',
                margin: 0,
                fontWeight: '400',
              }}
            >
              {text}
            </p>
          ))}
        </div>

        {/* 버튼 */}
        <button
          onClick={handleButtonClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px 32px',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
          }}
        >
          지자체 조회 바로가기
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
    </section>
  );
};

export default ComingSoonSection;
