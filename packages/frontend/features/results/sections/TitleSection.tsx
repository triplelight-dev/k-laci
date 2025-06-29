'use client';

import JewelRadarChart from '@/components/atoms/charts/RadarChart';
import KlaciCodeCircles from '@/components/atoms/circle/KlaciCodeCircles';
import { useDistrict, useSetSelectedRegion } from '@/store';
import { useEffect, useMemo, useRef } from 'react';

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
  
  // 이전 selectedRegion 값을 유지하기 위한 ref
  const previousRegionRef = useRef(selectedRegion);

  // selectedRegion이 변경될 때 이전 값 업데이트
  useEffect(() => {
    if (selectedRegion) {
      previousRegionRef.current = selectedRegion;
    }
  }, [selectedRegion]);

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
  const chartData = useMemo(() => {
    return generateChartData(currentRegion);
  }, [currentRegion]);

  // URL 업데이트 로직 제거 - SPA 방식으로 변경

  // 안전한 지역명 생성 함수
  const getDistrictName = (): string => {
    if (currentRegion?.province?.name && currentRegion?.name) {
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
  const klaciCode = currentRegion?.klaci?.code || 'KLAC';
  const klaciNickname = currentRegion?.klaci?.nickname || '안전복지형';
  const klaciSummary = currentRegion?.klaci.summary || '';
  const klaciSummaryArray = klaciSummary.split('.');

  // 다음/이전 지자체로 이동하는 함수 (상태만 변경)
  const handleNavigate = (direction: 'prev' | 'next') => {
    const districts = [
      {
        id: 1,
        province_id: 1,
        name: '서울시 강남구',
        district_type: '구',
        weight_class: '대형',
        klaci_code: 'KLAC',
        growth_score: 80,
        economy_score: 90,
        living_score: 85,
        safety_score: 88,
        total_score: 85.75,
        total_rank: 1,
        province: { id: 1, name: '서울시' },
        klaci: { code: 'KLAC', nickname: '경제혁신형', type: '샘플타입' },
      },
      {
        id: 2,
        province_id: 1,
        name: '서울시 송파구',
        district_type: '구',
        weight_class: '대형',
        klaci_code: 'KLAC',
        growth_score: 78,
        economy_score: 85,
        living_score: 80,
        safety_score: 82,
        total_score: 81.25,
        total_rank: 2,
        province: { id: 1, name: '서울시' },
        klaci: { code: 'KLAC', nickname: '생활역동형', type: '샘플타입' },
      },
      {
        id: 3,
        province_id: 2,
        name: '전라북도 전주시',
        district_type: '시',
        weight_class: '중형',
        klaci_code: 'KLAC',
        growth_score: 60,
        economy_score: 55,
        living_score: 45,
        safety_score: 85,
        total_score: 61.25,
        total_rank: 3,
        province: { id: 2, name: '전라북도' },
        klaci: { code: 'KLAC', nickname: '안전복지형', type: '샘플타입' },
      },
      {
        id: 4,
        province_id: 3,
        name: '경기도 성남시',
        district_type: '시',
        weight_class: '대형',
        klaci_code: 'KLAC',
        growth_score: 75,
        economy_score: 70,
        living_score: 70,
        safety_score: 65,
        total_score: 70,
        total_rank: 4,
        province: { id: 3, name: '경기도' },
        klaci: { code: 'KLAC', nickname: '인구성장형', type: '샘플타입' },
      },
      {
        id: 5,
        province_id: 4,
        name: '인천시 연수구',
        district_type: '구',
        weight_class: '중형',
        klaci_code: 'KLAC',
        growth_score: 65,
        economy_score: 60,
        living_score: 75,
        safety_score: 70,
        total_score: 67.5,
        total_rank: 5,
        province: { id: 4, name: '인천시' },
        klaci: { code: 'KLAC', nickname: '경제정속형', type: '샘플타입' },
      },
    ];
    const currentIndex = districts.findIndex(
      (d) => d.id === currentRegion?.id,
    );
    let targetIndex: number;
    if (direction === 'prev') {
      targetIndex = currentIndex > 0 ? currentIndex - 1 : districts.length - 1;
    } else {
      targetIndex = currentIndex < districts.length - 1 ? currentIndex + 1 : 0;
    }
    const targetDistrict = districts[targetIndex];
    if (!targetDistrict) return;
    setSelectedRegion(targetDistrict);
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
        {/* <RankArrowButton
          direction="left"
          onClick={() => handleNavigate('prev')}
        /> */}

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
        {/* <RankArrowButton
          direction="right"
          onClick={() => handleNavigate('next')}
        /> */}
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
          fontSize: '1.1rem',
          color: '#666',
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
