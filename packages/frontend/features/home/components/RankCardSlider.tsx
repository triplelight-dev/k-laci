'use client';

import { useTopRegionsForCard } from '@/api/hooks';
import RegionCard from '@/components/ui/RegionCard';
import { RegionCardData } from '@/types/region';
import { generateChartData } from '@/utils/chartUtils';
import { useRouter } from 'next/navigation';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import EmptyRankCard from './EmptyRankCard';

interface CardStyle {
  opacity: number;
  transform: string;
  border: string;
  zIndex: number;
}

export default function RankCardSlider() {
  const router = useRouter();
  const {
    data: topRegionsResponse,
    isLoading,
    error,
  } = useTopRegionsForCard({ limit: 10 });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const regionCards: RegionCardData[] = useMemo(() => {
    if (
      topRegionsResponse &&
      topRegionsResponse.data &&
      Array.isArray(topRegionsResponse.data)
    ) {
      const data: RegionCardData[] = topRegionsResponse.data.map((item) => ({
        id: item.regionId,
        name: item.regionName,
        province: item.provinceName,
        similarity: 100,
        rank: item.rank,
        score: item.totalScore,
        display_type: '상위 랭킹',
        klaciCode: item.klaciCode,
        klaciType: item.klaciType,
        klaciNickname: item.klaciNickname,
        klaciNicknameMultiline: item.klaciNicknameMultiline || [],
        radarData: generateChartData({
          growth_score: item.categoryScore.growth_score,
          economy_score: item.categoryScore.economy_score,
          living_score: item.categoryScore.living_score,
          safety_score: item.categoryScore.safety_score,
        }),
      }));
      return data;
    }
    return [];
  }, [topRegionsResponse]);

  // EmptyRankCard를 마지막에 추가
  const allItems = [...regionCards, { id: 'empty', isEmpty: true }];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next >= allItems.length ? allItems.length - 1 : next;
    });
  }, [allItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      return next < 0 ? 0 : next;
    });
  }, []);

  // 마우스 드래그 이벤트 핸들러
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - dragStart.x;
      const threshold = 50; // 드래그 임계값

      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
        setIsDragging(false);
      }
    },
    [isDragging, dragStart, nextSlide, prevSlide],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // 터치 이벤트 핸들러
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    setDragStart({ x: touch.clientX, y: touch.clientY });
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      const deltaX = touch.clientX - dragStart.x;
      const threshold = 50;

      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    },
    [dragStart, nextSlide, prevSlide],
  );

  // 키보드 이벤트 핸들러
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    },
    [nextSlide, prevSlide],
  );

  // 이벤트 리스너 등록 (휠 이벤트 제거)
  useEffect(() => {
    // 키보드 이벤트만 등록
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // RegionCard 클릭 핸들러 추가
  const handleRegionCardClick = (regionData: RegionCardData) => {
    router.push(`/results/region/${regionData.id}`);
  };

  // 카드의 위치와 스타일 계산
  const getCardStyle = (index: number): CardStyle => {
    const distance = index - currentIndex;

    // 카드 간격 (카드 너비 + gap)
    const cardSpacing = 400; // 260px 카드 + 140px gap

    // index 0이 좌측에 오도록 offset 조정
    const leftOffset = -currentIndex * cardSpacing;
    const translateX = distance * cardSpacing + leftOffset;

    if (distance === 0) {
      // 가운데 카드 (선택된 카드)
      return {
        opacity: 1, // 모든 카드 밝게
        transform: `translateX(${translateX}px) scale(1)`,
        border: '1px solid #000000',
        zIndex: 10,
      };
    } else if (Math.abs(distance) === 1) {
      // 바로 옆 카드들
      return {
        opacity: 1, // 모든 카드 밝게
        transform: `translateX(${translateX}px) scale(1)`,
        border: '1px solid #E7E8EA',
        zIndex: 9,
      };
    } else if (Math.abs(distance) === 2) {
      // 두 번째 옆 카드들
      return {
        opacity: 1, // 모든 카드 밝게
        transform: `translateX(${translateX}px) scale(1)`,
        border: '1px solid #E7E8EA',
        zIndex: 8,
      };
    } else if (Math.abs(distance) === 3) {
      // 세 번째 옆 카드들
      return {
        opacity: 1, // 모든 카드 밝게
        transform: `translateX(${translateX}px) scale(1)`,
        border: '1px solid #E7E8EA',
        zIndex: 7,
      };
    } else {
      // 멀리 있는 카드들
      return {
        opacity: 1, // 모든 카드 밝게
        transform: `translateX(${translateX}px) scale(1)`,
        border: '1px solid #E7E8EA',
        zIndex: 1,
      };
    }
  };

  if (isLoading) {
    return (
      <div
        style={{
          width: '100%',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Loading...
      </div>
    );
  }

  if (error) {
    console.error('Failed to fetch top regions:', error);
    return (
      <div
        style={{
          width: '100%',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Error loading regions
      </div>
    );
  }

  if (regionCards.length === 0) {
    return (
      <div
        style={{
          width: '100%',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        No regions found
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '600px',
        overflow: 'hidden',
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          left: '50px', // 좌측 여백
          top: '0',
          transform: 'translateX(0)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
          zIndex: 5,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {/* 좌측 그라데이션 - 항상 어둡게 */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '400px',
            height: '100%',
            background:
              'linear-gradient(90deg, rgba(20, 22, 29, 0.80) 0%, rgba(20, 22, 29, 0.00) 100%)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />

        {/* 우측 그라데이션 - 좌측과 동일하게 */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '400px',
            height: '100%',
            background:
              'linear-gradient(270deg, rgba(20, 22, 29, 0.80) 0%, rgba(20, 22, 29, 0.00) 100%)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />

        {/* 카드 컨테이너 */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          {allItems.map((item, index) => {
            const cardStyle = getCardStyle(index);

            return (
              <div
                key={`${item.id}-${index}`}
                style={{
                  position: 'absolute',
                  opacity: cardStyle.opacity,
                  transform: cardStyle.transform,
                  zIndex: cardStyle.zIndex,
                  transition: 'all 0.5s ease',
                  pointerEvents: cardStyle.zIndex >= 8 ? 'auto' : 'none', // 보이는 카드만 클릭 가능
                }}
              >
                {item.isEmpty ? (
                  <div style={{ pointerEvents: 'auto' }}>
                    <EmptyRankCard />
                  </div>
                ) : (
                  <RegionCard
                    data={item as RegionCardData}
                    onClick={handleRegionCardClick}  // 추가
                    style={{
                      border: cardStyle.border,
                      pointerEvents: 'auto',
                    }}
                    isHideBadge={true}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
