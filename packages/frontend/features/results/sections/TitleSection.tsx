'use client';

import { useDistrict, useGetProvinceById } from '@/store';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo } from 'react';

import RankArrowButton from '@/components/atoms/buttons/RankArrowButton';
import JewelRadarChart from '@/components/atoms/charts/RadarChart';
import KlaciCodeCircles from '@/components/atoms/circle/KlaciCodeCircles';
import { generateDistrictPath } from '@/utils/districtPath';

interface DistrictData {
  id: string;
  name: string;
  rank: number;
}

interface TitleSectionProps {
  districtData?: DistrictData | null;
}

const TitleSection: React.FC<TitleSectionProps> = ({ districtData }) => {
  const router = useRouter();

  // Zustand store에서 선택된 지역 정보 가져오기
  const { selectedRegion } = useDistrict();
  const getProvinceById = useGetProvinceById();

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

  // selectedRegion가 변경될 때마다 차트 데이터 재계산
  const chartData = useMemo(() => {
    return generateChartData(selectedRegion);
  }, [selectedRegion]);

  // selectedRegion 변경 시 URL 업데이트
  useEffect(() => {
    if (selectedRegion) {
      const newPath = generateDistrictPath(selectedRegion, {
        getProvinceById,
      });
      console.log('Updating URL to:', newPath);

      // 현재 URL과 다를 때만 업데이트 (무한 루프 방지)
      const currentPath = window.location.pathname.split('/').pop();
      if (currentPath !== newPath) {
        router.replace(`/results/${newPath}`, { scroll: false });
      }
    }
  }, [selectedRegion, router, getProvinceById]);

  // 안전한 지역명 생성 함수
  const getDistrictName = (): string => {
    if (selectedRegion?.province?.name && selectedRegion?.name) {
      return `${selectedRegion.province.name} ${selectedRegion.name}`;
    }
    // selectedRegion이 없거나 유효하지 않은 경우 기본값 반환
    return 'NOT SELECTED';
  };

  // 기본값 설정
  // const rank = districtData?.rank || selectedRegion?.total_rank || 3;
  const rank = useMemo(() => {
    return selectedRegion?.total_rank || 3;
  }, [selectedRegion]);
  const rankText = `종합순위 ${rank}위`;
  const districtName = getDistrictName();

  // KLACI 코드와 닉네임 가져오기
  const klaciCode = selectedRegion?.klaci?.code || 'KLAC';
  const klaciNickname = selectedRegion?.klaci?.nickname || '안전복지형';

  // 다음/이전 지자체로 이동하는 함수
  const handleNavigate = (direction: 'prev' | 'next') => {
    const districts = [
      { id: 'seoul-gangnam', name: '서울시 강남구', rank: 1 },
      { id: 'seoul-songpa', name: '서울시 송파구', rank: 2 },
      { id: 'jeonbuk-jeonju', name: '전라북도 전주시', rank: 3 },
      { id: 'gyeonggi-seongnam', name: '경기도 성남시', rank: 4 },
      { id: 'incheon-yeonsu', name: '인천시 연수구', rank: 5 },
    ];

    const currentIndex = districts.findIndex((d) => d.id === districtData?.id);
    let targetIndex: number;

    if (direction === 'prev') {
      targetIndex = currentIndex > 0 ? currentIndex - 1 : districts.length - 1;
    } else {
      targetIndex = currentIndex < districts.length - 1 ? currentIndex + 1 : 0;
    }

    const targetDistrict = districts[targetIndex];

    if (!targetDistrict) return null;

    console.log(
      `Navigating to ${targetDistrict.name} (${targetDistrict.rank}위)`,
    );

    // replace를 사용하여 스크롤 위치 유지
    router.replace(`/results/${targetDistrict.id}`, { scroll: false });
  };

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
        <JewelRadarChart size={470} data={chartData} />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          marginBottom: '20px',
        }}
      >
        {/* 이전 지자체 화살표 */}
        <RankArrowButton
          direction="left"
          onClick={() => handleNavigate('prev')}
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

        {/* 다음 지자체 화살표 */}
        <RankArrowButton
          direction="right"
          onClick={() => handleNavigate('next')}
        />
      </div>

      {/* 지자체 이름 */}
      <div
        style={{
          fontSize: '3.2rem',
          color: '#000',
          fontWeight: '600',
          marginBottom: '50px',
        }}
      >
        {districtName}
      </div>

      {/* KLACI Code 원형 컴포넌트 - selectedRegion의 klaci 정보 우선 사용 */}
      <KlaciCodeCircles klaciCode={klaciCode} />

      {/* 유형 텍스트 - selectedRegion의 klaci 닉네임 사용 */}
      <div
        style={{
          fontSize: '2.2rem',
          color: '#474E59',
          fontWeight: 'bold',
          marginBottom: '12px',
        }}
      >
        {klaciNickname}
      </div>

      {/* 유형 설명 */}
      <div
        style={{
          fontSize: '1.3rem',
          fontWeight: 600,
          color: '#949FB0',
          marginBottom: '50px',
        }}
      >
        인생 2막 올스타전 도시
      </div>

      {/* 세 줄 텍스트 */}
      <div
        style={{
          fontSize: '1rem',
          color: '#333',
          lineHeight: 1.2,
          textAlign: 'center',
          maxWidth: '600px',
        }}
      >
        <div style={{ marginBottom: '8px' }}>
          인구 유입은 이루어지나 경제는 성장 정체 상태이고
        </div>
        <div style={{ marginBottom: '8px' }}>
          생활 기반은 부족하지만, 안전 수준은 높아 안정적인 공동체를 이루고 있는
          유형입니다.
        </div>
        <div>경제 활력 제고와 생활 환경 개선이 시급합니다</div>
      </div>
    </div>
  );
};

export default TitleSection;
