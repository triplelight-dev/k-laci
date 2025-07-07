'use client';

import { ROUTES } from '@/constants/data';
import { DARK_MODE_COLORS } from '@/utils/colors';
import { useRouter } from 'next/navigation';
import React from 'react';

const ViewResultSuggestionSection: React.FC = () => {
  const router = useRouter();

  const descriptionTexts = [
    '이제 대한민국 229개 지방자치단체의 고유한 자산역량 탐색을 시작해보세요.',
    '지역명 검색 또는 유형별 조회를 통해 우리 지역의 숨겨진 강점과 새로운 기회를 직접 발견하고,',
    '이를 바탕으로 맞춤형 성장 전략을 위한 통찰을 얻을 수 있습니다.',
  ];

  const handleDistrictSearchClick = () => {
    router.push(ROUTES.RESULT);
  };

  const handleMainResultsClick = () => {
    router.push(ROUTES.RESULT);
  };

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: DARK_MODE_COLORS.background,
        maxWidth: '1100px',
        borderRadius: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: '80px',
        marginBottom: '80px',
      }}
    >
      <div
        style={{
          display: 'flex',
          padding: '40px 0px',
          gap: '60px',
          width: '90%',
        }}
      >
        {/* 좌측: 큰 타이틀 */}
        <div
          style={{
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: 'white',
              lineHeight: '1.3',
              textAlign: 'left',
            }}
          >
            <div>우리 지역의 강점과 기회를</div>
            <div>직접 확인해보세요</div>
          </div>
        </div>

        {/* 우측: 텍스트와 버튼들 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '40px',
            flex: 1.4,
          }}
        >
          {/* 상단 세 줄 텍스트 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {descriptionTexts.map((text, index) => (
              <div
                key={index}
                style={{
                  fontSize: '14px',
                  color: 'white',
                  lineHeight: '1.5',
                  opacity: 0.9,
                }}
              >
                {text}
              </div>
            ))}
          </div>

          {/* 하단 두 개 버튼 */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
            }}
          >
            {/* 왼쪽 버튼: 흰색 배경 */}
            <button
              onClick={handleDistrictSearchClick}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: 'none',
                borderRadius: '8px',
                padding: '14px 24px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                justifyContent: 'center',
                minWidth: '180px',
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
                }}
              />
            </button>

            {/* 오른쪽 버튼: 투명 배경 흰색 보더 */}
            <button
              onClick={handleMainResultsClick}
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid white',
                borderRadius: '8px',
                padding: '14px 24px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                justifyContent: 'center',
                minWidth: '180px',
              }}
            >
              주요 결과 바로가기
              <img
                src="/arrow_button_icon_white.png"
                alt="화살표 아이콘"
                style={{
                  width: '10px',
                  height: '10px',
                  display: 'block',
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewResultSuggestionSection;
