'use client';

import { ArrowRightUp } from '@/components/atoms/assets';
import Button from '@/components/atoms/buttons/Button';
import { ROUTES } from '@/constants/data';
import { useRouter } from 'next/navigation';
import React from 'react';

const ViewResultSuggestionSection: React.FC = () => {
  const router = useRouter();

  const descriptionTexts = [
    '이제 대한민국 229개 지방자치단체의 고유한 자산역량 탐색을 시작해보세요.',
    '지역명 검색 또는 유형별 조회를 통해 우리 지역의 숨겨진 강점과 새로운 기회를 직접 발견하고,',
    '이를 바탕으로 맞춤형 성장 전략을 위한 통찰을 얻을 수 있습니다.',
  ];

  const handleMainResultsClick = () => {
    router.push(ROUTES.SUMMARY);
  };

  return (
    <div
      style={{
        width: '100%',
        backgroundImage: 'url(/backgrounds/about_gradient_el.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        maxWidth: '1400px',
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
              fontSize: '48px',
              fontWeight: '600',
              color: 'white',
              lineHeight: '68px',
              textAlign: 'left',
            }}
          >
            <div>우리 지역의 <span style={{
              background: ' linear-gradient(110.4deg, #F56542 0.5%, #F4B04D 35%, #ACAAE8 65%, #74BF9E 99%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline',
            }}>강점</span>과 <span style={{
              background: ' linear-gradient(100.4deg, #F56542 2.5%, #F4B04D 35%, #ACAAE8 65%, #74BF9E 99%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline',
            }}>기회</span>를</div>
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
                  fontSize: '18px',
                  fontWeight: '400',
                  color: 'white',
                  lineHeight: '28px',
                  opacity: 0.9,
                }}
              >
                {text}
              </div>
            ))}
          </div>

          {/* 하단 버튼 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            {/* 오른쪽 버튼: 투명 배경 흰색 보더 */}
            <div style={{ marginRight: '220px' }}>
              <Button label='주요 결과 바로가기' icon={<ArrowRightUp color='#ffffff' />} variant='secondary' onClick={handleMainResultsClick} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewResultSuggestionSection;
