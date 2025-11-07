'use client';

import { DataService } from '@/api/services/data.service';
import RankArrowButton from '@/components/atoms/buttons/RankArrowButton';
import { default as JewelRadarChart } from '@/components/atoms/charts/RadarChart';
import KlaciCodeCircles from '@/components/atoms/circle/KlaciCodeCircles';
import { PROVINCE_FULL_NAMES } from '@/constants/region';
import { useIsMobile } from '@/hooks';
import {
  useDistrict,
  useSetSelectedDistrict,
  useSetSelectedProvince,
  useSetSelectedRegion,
} from '@/store';
import { generateChartData } from '@/utils/chartUtils';
import { Flex, Grid } from '@chakra-ui/react';
import { useEffect, useMemo, useRef, useState } from 'react';

// 지자체 데이터 타입 정의
interface DistrictData {
  id: string;
  name: string;
  rank: number;
}

interface TitleSectionProps {
  districtData?: DistrictData | null;
}

const TitleSection: React.FC<TitleSectionProps> = () => {
  const isMobile = useIsMobile();
  const { selectedRegion } = useDistrict();
  const setSelectedRegion = useSetSelectedRegion();
  const setSelectedProvince = useSetSelectedProvince();
  const setSelectedDistrict = useSetSelectedDistrict();
  const [isNavigating, setIsNavigating] = useState(false);
  const [animatedChartData, setAnimatedChartData] = useState<number[]>([
    50, 50, 50, 50, 50, 50, 50, 50,
  ]);

  // 이전 selectedRegion 값을 유지하기 위한 ref
  const previousRegionRef = useRef(selectedRegion);

  // selectedRegion이 변경될 때 이전 값 업데이트
  useEffect(() => {
    if (selectedRegion) {
      previousRegionRef.current = selectedRegion;
    }
  }, [selectedRegion]);

  // 현재 region의 이전/다음 region으로 이동하는 함수 (total_rank 기준)
  const navigateToAdjacentRegion = async (direction: 'prev' | 'next') => {
    if (!selectedRegion || isNavigating) return;

    setIsNavigating(true);
    try {
      const currentRank = selectedRegion.total_rank;
      const adjacentRegionData = await DataService.getAdjacentRegionByRank(
        currentRank,
        direction,
      );

      if (adjacentRegionData.data) {
        const regionDetails = adjacentRegionData.data;
        const storeRegion = {
          ...regionDetails,
          id: Number(regionDetails.id),
          province_id: Number(regionDetails.provinceId),
          province: {
            id: Number(regionDetails.province.id),
            name: regionDetails.province.name,
          },
        };
        setSelectedRegion(storeRegion, 'navigation_buttons');
        setSelectedProvince(storeRegion.province_id);
        setSelectedDistrict(storeRegion.id, 'navigation_buttons');
      }
    } catch (error) {
      console.error('Failed to navigate to adjacent region:', error);
    } finally {
      setIsNavigating(false);
    }
  };

  // 현재 region 또는 이전 region 사용 (새 데이터 로딩 중 기존 데이터 유지)
  const currentRegion = selectedRegion || previousRegionRef.current;

  // selectedRegion가 변경될 때마다 차트 데이터 재계산
  const targetChartData = useMemo(() => {
    return generateChartData(currentRegion);
  }, [currentRegion]);

  // 애니메이션 효과를 위한 useEffect (원래대로 복원)
  useEffect(() => {
    const duration = 500; // 0.8초로 늘림
    const steps = 40; // 60단계로 더 세밀하게
    const stepDuration = duration / steps;

    let currentStep = 0;

    const animate = () => {
      if (currentStep >= steps) {
        setAnimatedChartData(targetChartData);
        return;
      }

      const progress = currentStep / steps;
      // 더 부드러운 ease-out 효과 (cubic-bezier)
      const easeProgress = 1 - Math.pow(1 - progress, 4);

      const newData = animatedChartData.map((currentValue, index) => {
        const targetValue = targetChartData[index];
        if (targetValue === undefined) return currentValue;
        const diff = targetValue - currentValue;
        return currentValue + diff * easeProgress;
      });

      setAnimatedChartData(newData);
      currentStep++;

      setTimeout(animate, stepDuration);
    };

    animate();
  }, [targetChartData]);

  // 안전한 지역명 생성 함수
  const getDistrictName = (): string => {
    if (currentRegion?.province && currentRegion?.name) {
      const fullName =
        PROVINCE_FULL_NAMES[currentRegion.province.id] ||
        currentRegion.province.name;
      // 세종특별자치시인 경우 fullName만 반환
      if (currentRegion.province.name === '세종') {
        return fullName;
      }

      return `${fullName} ${currentRegion.name}`;
    }
    // currentRegion이 없거나 유효하지 않은 경우 기본값 반환
    return '';
  };

  // 기본값 설정
  const rank = useMemo(() => {
    return currentRegion?.total_rank || 3;
  }, [currentRegion]);
  const rankText = `종합순위 ${rank}위`;
  const districtName = getDistrictName();

  // KLACI 코드와 닉네임 가져오기
  const klaciCode = currentRegion?.klaci?.code || 'GCMR';
  const klaciNickname = currentRegion?.klaci?.nickname || '안전복지형';
  const klaciType = currentRegion?.klaci?.type || '';
  const klaciSummaryArray = currentRegion?.klaci?.summary || [];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        padding: '0px', // 20px에서 0px로 변경
        marginBottom: '120px',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          padding: '0px', // 20px에서 0px로 변경
          marginBottom: '50px',
        }}
      >
        <JewelRadarChart
          size={isMobile ? 200 : 650}
          isJewel={false}
          data={animatedChartData}
          regionData={
            currentRegion
              ? {
                  growth_score: currentRegion.growth_score,
                  economy_score: currentRegion.economy_score,
                  living_score: currentRegion.living_score,
                  safety_score: currentRegion.safety_score,
                  klaci_code: currentRegion.klaci_code,
                }
              : {}
          }
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          marginBottom: '22px',
        }}
      >
        {/* 이전 버튼 */}
        <RankArrowButton
          direction="left"
          onClick={() => navigateToAdjacentRegion('prev')}
        />

        {/* 순위 텍스트 */}
        <div
          style={{
            fontSize: '18px',
            color: '#000000',
            fontWeight: '500',
          }}
        >
          {rankText}
        </div>

        {/* 다음 버튼 */}
        <RankArrowButton
          direction="right"
          onClick={() => navigateToAdjacentRegion('next')}
        />
      </div>

      {/* 지자체 이름 */}
      <div
        style={{
          fontSize: '48px',
          color: '#000',
          fontWeight: '600',
          marginBottom: '60px',
        }}
      >
        {districtName}
      </div>

      <Flex justifyContent="space-between" width="100%">
        <Grid gap="10px">
          <Flex alignItems="center" gap="21px" justifyContent="start">
            {/* 타입 텍스트 */}
            {klaciType && (
              <div
                style={{
                  fontSize: '30px',
                  color: '#000',
                  fontWeight: '600',
                  lineHeight: '43px',
                }}
              >
                {klaciType}
              </div>
            )}
            <KlaciCodeCircles klaciCode={klaciCode} />
          </Flex>
          {/* 유형 텍스트 */}
          <div
            style={{
              fontSize: '22px',
              color: '#000',
              fontWeight: '400',
            }}
          >
            {klaciNickname}
          </div>
        </Grid>

        {/* 유형 설명 */}
        <div
          style={{
            fontSize: '18px',
            fontWeight: '400',
            color: '#000',
            lineHeight: '1.6',
            width: '520px',
            whiteSpace: 'pre-line',
            textAlign: 'justify',
          }}
        >
          {klaciSummaryArray.join(' ')}
          {/* {klaciSummaryArray.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))} */}
        </div>
      </Flex>
    </div>
  );
};

export default TitleSection;
