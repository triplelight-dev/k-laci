'use client';

import { useDistrict } from '@/store';
import { useRouter } from 'next/navigation';
import React from 'react';

import JewelRadarChart from '@/components/atoms/charts/RadarChart';

interface DistrictData {
  id: string;
  name: string;
  rank: number;
}

interface TitleSectionProps {
  districtData?: DistrictData | null;
}

// KLACI Code 원형 컴포넌트
const KlaciCodeCircles: React.FC = () => {
  // KLACI 코드 목업 데이터
  const klaciCodes = [
    { code: 'K', color: '#FF3737' },
    { code: 'L', color: '#FFA600' },
    { code: 'A', color: '#874FFF' },
    { code: 'C', color: '#24CB71' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '24px',
      }}
    >
      {klaciCodes.map((item, index) => (
        <div
          key={index}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: item.color,
            color: 'white',
            border: `2px solid ${item.color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 600,
          }}
        >
          {item.code}
        </div>
      ))}
    </div>
  );
};

const TitleSection: React.FC<TitleSectionProps> = ({ districtData }) => {
  const router = useRouter();

  // Zustand store에서 선택된 지역 정보 가져오기
  const { selectedProvince, selectedDistrict } = useDistrict();

  const chartData = [85, 30, 80, 30, 25, 70, 40, 36];

  // 안전한 지역명 생성 함수
  const getDistrictName = (): string => {
    console.log(selectedProvince, selectedDistrict);
    // selectedProvince와 selectedDistrict가 모두 유효한 객체이고 name 속성이 있는 경우
    if (selectedProvince?.name && selectedDistrict?.name) {
      return `${selectedProvince.name} ${selectedDistrict.name}`;
    }

    // 둘 중 하나라도 없거나 name 속성이 없는 경우
    return '선택없음';
  };

  // 기본값 설정
  const rank = districtData?.rank || 3;
  const rankText = `종합순위 ${rank}위`;
  const districtName = getDistrictName();

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
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        {/* 이전 지자체 화살표 */}
        <button
          onClick={() => handleNavigate('prev')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(28, 63, 211, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(180deg)' }}
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="#1C3FD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 순위 텍스트 */}
        <div
          style={{
            fontSize: '1.2rem',
            color: '#1C3FD3',
            fontWeight: '600',
          }}
        >
          {rankText}
        </div>

        {/* 다음 지자체 화살표 */}
        <button
          onClick={() => handleNavigate('next')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(28, 63, 211, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="#1C3FD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
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

      {/* KLACI Code 원형 컴포넌트 */}
      <KlaciCodeCircles />

      {/* 유형 텍스트 */}
      <div
        style={{
          fontSize: '2.2rem',
          color: '#474E59',
          fontWeight: 'bold',
          marginBottom: '12px',
        }}
      >
        안전복지형
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
