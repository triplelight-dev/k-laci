'use client';

import { useTopRegionsForCard } from '@/api/hooks';
import { TopRegionCard } from '@/api/types/stats.types';
import { Flex } from '@chakra-ui/react';
import { SimilarRegionData } from '../../results/sections/SimilarRegionSection.type';
import EmptyRankCard from './EmptyRankCard';
import { RankCard } from './RankCard';

// TopRegionCard를 SimilarRegionData로 변환하는 함수
const transformTopRegionToSimilarRegion = (topRegion: TopRegionCard): SimilarRegionData => ({
  id: topRegion.regionId,
  name: topRegion.regionName,
  province: topRegion.provinceName,
  similarity: 100, // 상위 지역은 모두 100%로 설정
  rank: topRegion.rank,
  score: topRegion.totalScore,
  klaciCode: topRegion.klaciCode,
  klaciType: topRegion.klaciType,
  klaciNickname: topRegion.klaciNickname,
  radarData: [
    topRegion.categoryScore.growth_score,
    topRegion.categoryScore.safety_score,
    topRegion.categoryScore.living_score,
    topRegion.categoryScore.economy_score,
    // 8개 데이터가 필요하므로 4개 값을 복제해서 8개로 만듦
    topRegion.categoryScore.growth_score,
    topRegion.categoryScore.safety_score,
    topRegion.categoryScore.living_score,
    topRegion.categoryScore.economy_score,
  ],
});

export default function RankCardSlider() {
  const { data: topRegionsResponse, isLoading, error } = useTopRegionsForCard({ limit: 10 });

  // 안전한 데이터 추출
  let similarRegions: SimilarRegionData[] = [];

  if (topRegionsResponse) {
    // 여러 가능한 데이터 구조 처리
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

  if (isLoading) {
    return (
      <Flex position='relative' height='fit-content'>
        <Flex gap="20px" paddingRight='350px' height='fit-content'>
          <div>Loading...</div>
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
      <Flex gap="20px" paddingRight='350px' height='fit-content'>
        {similarRegions.slice(0, 4).map((item) => (
          <RankCard key={item.id} data={item} />
        ))}
        <EmptyRankCard />
      </Flex>
      <Flex position='absolute' left='0' top='0' width='545px' height='562px' zIndex='20'
        background='linear-gradient(270deg, rgba(30, 30, 30, 0.00) 0%, rgba(30, 30, 30) 100%)'
      />
    </Flex>
  );
}

