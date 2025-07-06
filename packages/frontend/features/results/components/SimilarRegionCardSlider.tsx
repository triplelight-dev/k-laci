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

  // 무한 루프를 위한 배열 확장
  const extendedData = [...data, ...data, ...data]; // 3배로 확장
  const dataLength = data.length;

  // 카드의 위치와 스타일 계산
  const getCardStyle = (index: number) => {
    const distance = index - currentIndex;
    const totalCards = dataLength;

    // 순환 거리 계산 (가장 가까운 경로)
    let adjustedDistance = distance;
    if (Math.abs(distance) > totalCards / 2) {
      adjustedDistance =
        distance > 0 ? distance - totalCards : distance + totalCards;
    }

    // 카드 간격 (카드 너비 + gap)
    const cardSpacing = 420; // 350px 카드 + 70px gap
    const translateX = adjustedDistance * cardSpacing;

    if (adjustedDistance === 0) {
      // 가운데 카드 (선택된 카드)
      return {
        opacity: 1,
        transform: `translateX(${translateX}px) scale(1)`,
        border: '1px solid #000000',
        zIndex: 10,
      };
    } else if (Math.abs(adjustedDistance) === 1) {
      // 바로 옆 카드들
      const opacity = 0.7;
      return {
        opacity,
        transform: `translateX(${translateX}px) scale(1)`,
        border: 'none',
        zIndex: 9,
      };
    } else if (Math.abs(adjustedDistance) === 2) {
      // 두 번째 옆 카드들
      const opacity = 0.4;
      return {
        opacity,
        transform: `translateX(${translateX}px) scale(1)`,
        border: 'none',
        zIndex: 8,
      };
    } else {
      // 멀리 있는 카드들
      const opacity = 0.1;
      return {
        opacity,
        transform: `translateX(${translateX}px) scale(1)`,
        border: 'none',
        zIndex: 1,
      };
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '500px',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* 좌측 화살표 버튼 */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'white',
          border: '1px solid #E5E7EB',
          borderRadius: '50%',
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
          const style = getCardStyle(adjustedIndex);

          return (
            <div
              key={`${item.id}-${index}`}
              style={{
                position: 'absolute',
                opacity: style.opacity,
                transform: style.transform,
                zIndex: style.zIndex,
                transition: 'all 0.5s ease',
              }}
            >
              <SimilarRegionCard
                data={item}
                onClick={onCardClick}
                style={{
                  border: style.border,
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
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'white',
          border: '1px solid #E5E7EB',
          borderRadius: '50%',
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
    </div>
  );
};

export default SimilarRegionCardSlider;
