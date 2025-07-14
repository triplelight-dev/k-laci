'use client';

import { useTopRegionsForCard } from '@/api/hooks';
import { TopRegionCard } from '@/api/types/stats.types';
import RegionCard from '@/components/ui/RegionCard';
import { RegionCardData } from '@/types/region';
import { Flex } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import EmptyRankCard from './EmptyRankCard';

// TopRegionCard를 RegionCardData로 변환하는 함수
const transformTopRegionToRegionCard = (topRegion: TopRegionCard): RegionCardData => ({
  id: topRegion.regionId,
  name: topRegion.regionName,
  province: topRegion.provinceName,
  similarity: 100,
  rank: topRegion.rank,
  score: topRegion.totalScore,
  display_type: '상위 랭킹',
});

export default function RankCardSlider() {
  const { data: topRegionsResponse, isLoading, error } = useTopRegionsForCard({ limit: 10 });
  
  // 네이티브 스크롤 방식 (results의 DistrictSlider와 동일)
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (sliderRef.current) {
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2; // 스크롤 감도 조정
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // 안전한 데이터 추출
  let regionCards: RegionCardData[] = [];

  if (topRegionsResponse) {
    let rawData: any[] = [];

    if (Array.isArray(topRegionsResponse)) {
      rawData = topRegionsResponse;
    } else if (Array.isArray(topRegionsResponse.data)) {
      rawData = topRegionsResponse.data;
    } else if (topRegionsResponse.data && Array.isArray(topRegionsResponse.data.data)) {
      rawData = topRegionsResponse.data.data;
    }

    if (Array.isArray(rawData)) {
      regionCards = rawData.map(transformTopRegionToRegionCard);
    }
  }

  // EmptyRankCard를 마지막에 추가
  const allItems = [...regionCards, { id: 'empty', isEmpty: true }];

  if (isLoading) {
    return (
      <Flex position='relative' height='fit-content'>
        <Flex gap="20px" paddingRight='350px' height='fit-content'>
          Loading...
        </Flex>
      </Flex>
    );
  }

  if (error) {
    console.error('Failed to fetch top regions:', error);
    return (
      <Flex position='relative' height='fit-content'>
        <Flex gap="20px" paddingRight='350px' height='fit-content'>
          <div>Error loading regions</div>
        </Flex>
      </Flex>
    );
  }

  if (regionCards.length === 0) {
    return (
      <Flex position='relative' height='fit-content'>
        <Flex gap="20px" paddingRight='350px' height='fit-content'>
          <div>No regions found</div>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex position='relative' height='fit-content'>
      {/* 네이티브 스크롤 컨테이너 */}
      <div
        ref={sliderRef}
        style={{
          display: 'flex',
          gap: '20px',
          paddingRight: '350px',
          overflow: 'auto',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE
          WebkitOverflowScrolling: 'touch', // iOS smooth scroll
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
        }}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none', // Chrome, Safari
          }
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {allItems.map((item, index) => (
          <div 
            key={`${item.id}-${index}`}
            style={{ 
              flexShrink: 0,
              minWidth: '260px',
            }}
          >
            {item.isEmpty ? (
              <EmptyRankCard />
            ) : (
              <RegionCard data={item as RegionCardData} />
            )}
          </div>
        ))}
      </div>

      {/* 그라데이션 오버레이 */}
      <Flex 
        position='absolute'
        top='0'
        right='0'
        width='350px'
        height='100%'
        background='linear-gradient(270deg, rgba(30, 30, 30, 0.00) 0%, rgba(30, 30, 30) 100%)'
        pointerEvents='none'
      />
    </Flex>
  );
}

