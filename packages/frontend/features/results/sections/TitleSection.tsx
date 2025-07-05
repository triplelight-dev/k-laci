'use client';

import { DataService } from '@/api/services/data.service';
import RankArrowButton from '@/components/atoms/buttons/RankArrowButton';
import JewelRadarChart from '@/components/atoms/charts/RadarChart';
import KlaciCodeCircles from '@/components/atoms/circle/KlaciCodeCircles';
import { useDistrict, useSetSelectedRegion } from '@/store';
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
  const { selectedRegion } = useDistrict();
  const setSelectedRegion = useSetSelectedRegion();
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
        setSelectedRegion({
          ...regionDetails,
          id: Number(regionDetails.id),
          province_id: Number(regionDetails.provinceId),
          province: {
            id: Number(regionDetails.province.id),
            name: regionDetails.province.name,
            name_eng: regionDetails.province.name_eng,
            full_name: regionDetails.province.full_name,
          },
        });
      }
    } catch (error) {
      console.error('Failed to navigate to adjacent region:', error);
    } finally {
      setIsNavigating(false);
    }
  };

  // 차트 데이터를 동적으로 생성하는 함수
  const generateChartData = (region: any): number[] => {
    if (!region) {
      // 기본값 반환
      return [50, 50, 50, 50, 50, 50, 50, 50];
    }

    const {
      growth_score = 50,
      economy_score = 50,
      living_score = 50,
      safety_score = 50,
    } = region;

    // RadarChart의 categories 순서에 맞춰 반환:
    // ['생활역동형', '안전복원형', '인구정착형', '경제정속형', '생활정주형', '안전정진형', '인구성장형', '경제혁신형']
    return [
      living_score, // index 0: 생활역동형
      safety_score, // index 1: 안전복원형
      100 - growth_score, // index 2: 인구정착형
      100 - economy_score, // index 3: 경제정속형
      100 - living_score, // index 4: 생활정주형
      100 - safety_score, // index 5: 안전정진형
      growth_score, // index 6: 인구성장형
      economy_score, // index 7: 경제혁신형
    ];
  };

  // 현재 region 또는 이전 region 사용 (새 데이터 로딩 중 기존 데이터 유지)
  const currentRegion = selectedRegion || previousRegionRef.current;

  // selectedRegion가 변경될 때마다 차트 데이터 재계산
  const targetChartData = useMemo(() => {
    return generateChartData(currentRegion);
  }, [currentRegion]);

  // 애니메이션 효과를 위한 useEffect
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
    if (currentRegion?.province.name && currentRegion?.name) {
      return `${currentRegion.province.name} ${currentRegion.name}`;
    }
    // currentRegion이 없거나 유효하지 않은 경우 기본값 반환
    return '전라북도 전주시';
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
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '16px',
          width: '100%',
          justifyContent: 'center',
          padding: '20px',
          marginBottom: '50px',
        }}
      >
        <JewelRadarChart
          size={470}
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
          marginBottom: '40px',
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
            fontSize: '1.2rem',
            color: '#000000',
            fontWeight: '600',
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
          fontSize: '50px',
          color: '#000',
          fontWeight: '700',
          marginBottom: '80px',
        }}
      >
        {districtName}
      </div>

      {/* KLACI Code 원형 컴포넌트 */}
      <KlaciCodeCircles klaciCode={klaciCode} />

      {/* 타입 텍스트 */}
      {klaciType && (
        <div
          style={{
            fontSize: '36px',
            color: '#000',
            fontWeight: '700',
            marginBottom: '20px',
          }}
        >
          {klaciType}
        </div>
      )}

      {/* 유형 텍스트 */}
      <div
        style={{
          fontSize: '24px',
          color: '#000',
          fontWeight: '700',
          marginBottom: '60px',
        }}
      >
        {klaciNickname}
      </div>

      {/* 유형 설명 */}
      <div
        style={{
          fontSize: '1.1rem',
          color: '#000',
          textAlign: 'center',
          lineHeight: '1.6',
          maxWidth: '600px',
        }}
      >
        {klaciSummaryArray.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
    </div>
  );
};

export default TitleSection;
