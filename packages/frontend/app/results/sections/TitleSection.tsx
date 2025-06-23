'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import JewelRadarChart from '@/atoms/charts/RadarChart';

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

  const chartData = [85, 30, 80, 30, 25, 70, 40, 36];

  // 기본값 설정
  const rank = districtData?.rank || 3;
  const rankText = `종합순위 ${rank}위`;
  const districtName = districtData?.name || '전라북도 전주시';

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
        marginBottom: '250px',
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
          marginBottom: '20px',
        }}
      >
        {districtName}
      </div>
    </div>
  );
};

export default TitleSection;
