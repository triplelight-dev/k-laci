'use client';

import RadarJewelChartMini from '@/components/atoms/charts/RadarJewelChartMini';
import KlaciCodeCirclesMini from '@/components/atoms/circle/KlaciCodeCirclesMini';
import React from 'react';

interface SimilarRegionData {
  id: string | number;
  name: string;
  province: string;
  similarity: number; // 유사도 점수 (0-100)
  rank: number;
  score: number;
  radarData?: number[]; // 레이더 차트 데이터 추가
  klaciCode?: string; // KLACI 코드 추가
  klaciType?: string; // 지역 타입 추가
  klaciNickname?: string; // 닉네임 추가
  [key: string]: any; // 추가 속성들을 위한 인덱스 시그니처
}

interface SimilarRegionCardProps {
  data: SimilarRegionData;
  onClick?: (item: SimilarRegionData) => void;
  style?: React.CSSProperties;
}

// 랜덤 목업 데이터 생성 함수
const generateMockRadarData = (seed: number): number[] => {
  // seed를 기반으로 일관된 랜덤 데이터 생성
  const random = (min: number, max: number) => {
    const x = Math.sin(seed++) * 10000;
    return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min;
  };

  // 8개 카테고리에 대한 랜덤 데이터 생성
  return [
    random(30, 85), // 생활역동형
    random(40, 90), // 안전회복형
    random(25, 80), // 인구정착형
    random(35, 85), // 경제정속형
    random(30, 80), // 생활정체형
    random(40, 90), // 안전정진형
    random(20, 75), // 인구성장형
    random(30, 85), // 경제혁신형
  ];
};

// 랜덤 KLACI 데이터 생성 함수
const generateMockKlaciData = (seed: number) => {
  const random = (min: number, max: number) => {
    const x = Math.sin(seed++) * 10000;
    return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min;
  };

  const klaciCodes = [
    'GCMR',
    'ECMR',
    'LAMR',
    'SAMR',
    'GCSR',
    'ECSR',
    'LASR',
    'SASR',
  ];
  const klaciTypes = ['개발도약형', '성장안정형', '혁신도약형', '안정혁신형'];
  const klaciNicknames = [
    '믿고 보는 호수비의 도시',
    '미래를 여는 혁신도시',
    '안전하고 편안한 도시',
    '성장과 안정의 도시',
    '혁신과 도약의 도시',
    '미래를 준비하는 도시',
  ];

  return {
    klaciCode: klaciCodes[random(0, klaciCodes.length - 1)],
    klaciType: klaciTypes[random(0, klaciTypes.length - 1)],
    klaciNickname: klaciNicknames[random(0, klaciNicknames.length - 1)],
  };
};

const SimilarRegionCard: React.FC<SimilarRegionCardProps> = ({
  data,
  onClick,
  style,
}) => {
  // 카드별로 고유한 랜덤 데이터 생성 (id를 seed로 사용)
  const seed = Number(data.id) || data.rank;
  const mockRadarData = data.radarData || generateMockRadarData(seed);
  const mockKlaciData = generateMockKlaciData(seed);

  // 실제 데이터가 있으면 사용, 없으면 목업 데이터 사용
  const klaciCode = data.klaciCode || mockKlaciData.klaciCode;
  const klaciType = data.klaciType || mockKlaciData.klaciType;
  const klaciNickname = data.klaciNickname || mockKlaciData.klaciNickname;

  return (
    <div
      style={{
        minWidth: '350px',
        width: '350px',
        height: '520px',
        backgroundColor: 'white',
        borderRadius: '20px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        ...style,
      }}
      onClick={() => onClick?.(data)}
    >
      {/* 상단 - 흰색 배경 */}
      <div
        style={{
          height: '60px',
          backgroundColor: 'white',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        {/* 종합순위 */}
        <div
          style={{
            fontSize: '14px',
            color: '#666',
            marginBottom: '8px',
          }}
        >
          종합순위 {data.rank}위
        </div>
        {/* 지역명 */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#000',
          }}
        >
          {data.province} {data.name}
        </div>
      </div>

      {/* 하단 - 회색 배경 */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#f5f5f5',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
        }}
      >
        {/* 상단 - 레이더 차트 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
            padding: '5px',
          }}
        >
          <RadarJewelChartMini
            data={mockRadarData}
            size={240}
            imageUrl="/backgrounds/radar_chart_bg.png"
          />
        </div>

        {/* 하단 - KLACI 정보 (좌측 정렬) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '12px',
            paddingLeft: '10px',
          }}
        >
          {/* KLACI Circle */}
          <KlaciCodeCirclesMini klaciCode={klaciCode} />

          {/* 지역 타입 */}
          <div
            style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#000',
              textAlign: 'left',
              lineHeight: '1.2',
            }}
          >
            {klaciType}
          </div>

          {/* 닉네임 */}
          <div
            style={{
              fontSize: '12px',
              color: '#666',
              textAlign: 'left',
              lineHeight: '1.2',
            }}
          >
            {klaciNickname}
          </div>

          {/* '순위가 비슷한' 뱃지 */}
          <div
            style={{
              fontSize: '10px',
              color: '#000',
              border: '1px solid #000',
              backgroundColor: 'transparent',
              padding: '4px 8px',
              borderRadius: '12px',
              fontWeight: '500',
            }}
          >
            순위가 비슷한
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarRegionCard;
