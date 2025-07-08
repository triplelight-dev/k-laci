'use client';

import { useSameCodeRegions } from '@/api/hooks';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SimilarRegionData } from '../../results/sections/SimilarRegionSection.type';
import EmptyRankCard from './EmptyRankCard';
import { RankCard } from './RankCard';

export default function RankCardSlider() {

  const { getSameCodeRegionsByRegionId } = useSameCodeRegions();
  const [similarRegions, setSimilarRegions] = useState<SimilarRegionData[]>([]);

  // API에서 동일한 KLACI 코드를 가진 지역들을 가져오기
  useEffect(() => {
    const fetchSimilarRegions = async () => {
      try {
        const regionId = 1;
        const regions = await getSameCodeRegionsByRegionId(regionId);
        const transformedData: SimilarRegionData[] = regions.map(
          (region: any, index: number) => ({
            id: region.id,
            name: region.name,
            province: region.province.name,
            similarity: 100 - index * 5, // 임시 유사도
            rank: region.total_rank,
            score: region.total_score,
            klaciCode: region.klaci.code,
            klaciType: region.klaci.type,
            klaciNickname: region.klaci.nickname,
          }),
        );
        setSimilarRegions(transformedData);
      } catch (err) {
        setSimilarRegions([]);
      }
    };
    fetchSimilarRegions();
  }, []);

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

