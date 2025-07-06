'use client';

import React, { useState } from 'react';

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

  // 카드의 위치와 스타일 계산
  const getCardStyle = (index: number) => {
    const distance = index - currentIndex;
    const totalCards = data.length;

    // 순환 거리 계산 (가장 가까운 경로)
    let adjustedDistance = distance;
    if (Math.abs(distance) > totalCards / 2) {
      adjustedDistance =
        distance > 0 ? distance - totalCards : distance + totalCards;
    }

    // 카드 간격 (카드 너비 + gap) - gap을 늘림
    const cardSpacing = 450; // 350px 카드 + 100px gap
    const translateX = adjustedDistance * cardSpacing;

    if (adjustedDistance === 0) {
      // 가운데 카드 (선택된 카드)
      return {
        opacity: 1,
        transform: 'scale(1)',
        border: '2px solid #000000',
        zIndex: 10,
        translateX: 0,
      };
    } else if (Math.abs(adjustedDistance) === 1) {
      // 바로 옆 카드들
      const opacity = 0.7;
      const scale = 0.9;
      return {
        opacity,
        transform: `scale(${scale})`,
        border: 'none',
        zIndex: 9,
        translateX,
      };
    } else if (Math.abs(adjustedDistance) === 2) {
      // 두 번째 옆 카드들
      const opacity = 0.4;
      const scale = 0.8;
      return {
        opacity,
        transform: `scale(${scale})`,
        border: 'none',
        zIndex: 8,
        translateX,
      };
    } else {
      // 멀리 있는 카드들
      const opacity = 0.1;
      const scale = 0.7;
      return {
        opacity,
        transform: `scale(${scale})`,
        border: 'none',
        zIndex: 1,
        translateX,
      };
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '500px', // 세로 높이 증가
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
        {data.map((item, index) => {
          const style = getCardStyle(index);

          return (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                minWidth: '320px',
                width: '320px',
                height: '420px', // 세로 높이 증가
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '24px',
                cursor: 'pointer',
                transition: 'all 0.5s ease',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                opacity: style.opacity,
                transform: `translateX(${style.translateX}px) scale(${style.transform.includes('scale') ? style.transform.match(/scale\(([^)]+)\)/)?.[1] || '1' : '1'})`,
                border: style.border,
                zIndex: style.zIndex,
              }}
              onClick={() => onCardClick?.(item)}
            >
              {/* 지역명 */}
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1F2937',
                  marginBottom: '8px',
                }}
              >
                {item.province} {item.name}
              </div>

              {/* 유사도 점수 */}
              <div
                style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  marginBottom: '16px',
                }}
              >
                유사도: {item.similarity}%
              </div>

              {/* 순위 */}
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#000000',
                  marginBottom: '8px',
                }}
              >
                {item.rank}위
              </div>

              {/* 총점 */}
              <div
                style={{
                  fontSize: '16px',
                  color: '#374151',
                  marginBottom: '24px',
                }}
              >
                총점: {item.score.toFixed(1)}
              </div>

              {/* 추가 정보를 위한 공간 */}
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    textAlign: 'center',
                    padding: '12px',
                    backgroundColor: '#F9FAFB',
                    borderRadius: '8px',
                  }}
                >
                  클릭하여 자세히 보기
                </div>
              </div>
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
