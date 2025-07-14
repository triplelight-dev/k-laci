'use client';

import { useTopRegionsForCard } from '@/api/hooks';
import { TopRegionCard } from '@/api/types/stats.types';
import { Flex } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { SimilarRegionData } from '../../results/sections/SimilarRegionSection.type';
import EmptyRankCard from './EmptyRankCard';
import { RankCard } from './RankCard';

// TopRegionCard를 SimilarRegionData로 변환하는 함수
const transformTopRegionToSimilarRegion = (topRegion: TopRegionCard): SimilarRegionData => ({
  id: topRegion.regionId,
  name: topRegion.regionName,
  province: topRegion.provinceName,
  similarity: 100,
  rank: topRegion.rank,
  score: topRegion.totalScore,
});

export default function RankCardSlider() {
  const { data: topRegionsResponse, isLoading, error } = useTopRegionsForCard({ limit: 10 });
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  // 안전한 데이터 추출
  let similarRegions: SimilarRegionData[] = [];

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
      similarRegions = rawData.map(transformTopRegionToSimilarRegion);
    }
  }

  // EmptyRankCard를 마지막에 추가
  const allItems = [...similarRegions, { id: 'empty', isEmpty: true }];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setCurrentX(e.pageX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // 여기서 원래 위치로 돌아가는 문제가 있었음
    setTranslateX(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    setCurrentX(e.pageX);
    const diff = e.pageX - startX;
    setTranslateX(diff);
  };

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

  if (similarRegions.length === 0) {
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
      {/* 드래그 가능한 스크롤 컨테이너 */}
      <Flex 
        ref={sliderRef}
        gap="20px" 
        paddingRight='350px' 
        height='fit-content'
        cursor={isDragging ? 'grabbing' : 'grab'}
        userSelect='none'
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        transform={`translateX(${translateX}px)`}
        transition={isDragging ? 'none' : 'transform 0.3s ease'}
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
              <RankCard data={item as SimilarRegionData} />
            )}
          </div>
        ))}
      </Flex>

      {/* 기존 그라데이션 오버레이 */}
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

