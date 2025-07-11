'use client';

import React, { useState } from 'react';
import SimilarRegionCard from './SimilarRegionCard';

interface SimilarRegionData {
  id: string | number;
  name: string;
  province: string;
  similarity: number; // 유사도 점수 (0-100)
  rank: number;
  score: number;
  [key: string]: any; // 추가 속성들을 위한 인덱스 시그니처
}

interface SimilarRegionCardSliderProps {
  data: SimilarRegionData[];
  onCardClick?: (item: SimilarRegionData) => void;
}

interface CardStyle {
  opacity: number;
  transform: string;
  border: string;
  zIndex: number;
}

const SimilarRegionCardSlider: React.FC<SimilarRegionCardSliderProps> = ({
  data,
  onCardClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  // 무한 루프를 위한 배열 확장 (더 많은 복사본으로 부드러운 전환)
  const extendedData = [...data, ...data, ...data, ...data, ...data]; // 5배로 확장
  const dataLength = data.length;

  // 카드의 위치와 스타일 계산
  const getCardStyle = (index: number): CardStyle => {
    const distance = index - currentIndex;
    const totalCards = dataLength;

    // 순환 거리 계산 (가장 가까운 경로)
    let adjustedDistance = distance;
    if (Math.abs(distance) > totalCards / 2) {
      adjustedDistance =
        distance > 0 ? distance - totalCards : distance + totalCards;
    }

    // 카드 간격 (카드 너비 + gap) - 간격을 늘림
    const cardSpacing = 400; // 260px 카드 + 140px gap
    const translateX = adjustedDistance * cardSpacing;

    // Fadeout 효과: 거리에 따른 투명도 계산
    const baseOpacity = 1;
    const opacity = Math.max(0, baseOpacity - Math.abs(adjustedDistance) * 0.3);

    if (adjustedDistance === 0) {
      // 가운데 카드 (선택된 카드) - 다른 카드와 동일한 크기와 위치
      return {
        opacity: 1,
        transform: `translateX(${translateX}px) scale(1)`,
        border: '1px solid #000000',
        zIndex: 10,
      };
    } else if (Math.abs(adjustedDistance) === 1) {
      // 바로 옆 카드들
      return {
        opacity: Math.max(0.3, opacity),
        transform: `translateX(${translateX}px) scale(1)`,
        border: '1px solid #E7E8EA',
        zIndex: 9,
      };
    } else if (Math.abs(adjustedDistance) === 2) {
      // 두 번째 옆 카드들
      return {
        opacity: Math.max(0.1, opacity),
        transform: `translateX(${translateX}px) scale(1)`,
        border: '1px solid #E7E8EA',
        zIndex: 8,
      };
    } else if (Math.abs(adjustedDistance) === 3) {
      // 세 번째 옆 카드들
      return {
        opacity: Math.max(0.05, opacity),
        transform: `translateX(${translateX}px) scale(1)`,
        border: '1px solid #E7E8EA',
        zIndex: 7,
      };
    } else {
      // 멀리 있는 카드들
      return {
        opacity: 0,
        transform: `translateX(${translateX}px) scale(1)`,
        border: '1px solid #E7E8EA',
        zIndex: 1,
      };
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '600px', // 560px에서 600px로 증가 (카드 높이 540px + 여유 60px)
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        marginBottom: '258px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '545px',
        height: '100%',
        background: 'linear-gradient(-90deg, rgba(245, 245, 245, 0.00) 0%, rgba(245, 245, 245, 0.80) 100%)',
        zIndex: 10,
      }} />

      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '545px',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(245, 245, 245, 0.00) 0%, rgba(245, 245, 245, 0.80) 100%)',
        zIndex: 10,
      }} />



      {/* 좌측 화살표 버튼 */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '160px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'white',
          border: '1px solid #E5E7EB',
          borderRadius: '12px',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#000000';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#E5E7EB';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <img
          src="/rank_arrow_left.png"
          alt="이전"
          style={{
            width: '16px',
            height: '16px',
          }}
        />
      </button>

      {/* 카드 컨테이너 */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {extendedData.map((item, index) => {
          const adjustedIndex = index % dataLength;
          const cardStyle = getCardStyle(adjustedIndex);

          return (
            <div
              key={`${item.id}-${index}`}
              style={{
                position: 'absolute',
                opacity: cardStyle.opacity,
                transform: cardStyle.transform,
                zIndex: cardStyle.zIndex,
                transition: 'all 0.5s ease',
                pointerEvents: 'none',
              }}
            >
              <SimilarRegionCard
                data={item}
                onClick={onCardClick || (() => { })}
                style={{
                  border: cardStyle.border,
                  pointerEvents: 'auto',

                }}
              />
            </div>
          );
        })}
      </div>

      {/* 우측 화살표 버튼 */}
      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '160px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'white',
          border: '1px solid #E5E7EB',
          borderRadius: '12px',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#000000';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#E5E7EB';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <img
          src="/rank_arrow_right.png"
          alt="다음"
          style={{
            width: '16px',
            height: '16px',
          }}
        />
      </button>
    </div >
  );
};

export default SimilarRegionCardSlider;
