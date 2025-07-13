'use client';

import { TotalRegionRank } from '@/api/types/stats.types';
import RadarJewelChartMini from '@/components/atoms/charts/RadarJewelChartMini';
import { generateChartData } from '@/utils/chartUtils';
import { parseKlaciCodeWithNickname } from '@/utils/klaciCodeUtils';
import React from 'react';

// 컬럼 너비 설정을 위한 상수
const COLUMN_WIDTHS = {
  rank: '0 0 50px',           // 순위: 42px → 50px
  regionName: '0 0 120px',    // 지자체명: 120px
  jewel: '0 0 60px',          // 원석: 60px
  type: '0 0 80px',           // 유형명: 80px
  klaciCode: '1 1 420px',     // 유형코드: 420px
  strengthIndexes: '1 1 340px', // 강점지표: 360px → 340px
  totalScore: '0 0 60px',     // 종합점수: 60px
} as const;

// KLACI 코드 시각화 컴포넌트
const KlaciCodeVisualizer: React.FC<{ klaciCode: string }> = ({
  klaciCode,
}) => {
  const parsedCodes = parseKlaciCodeWithNickname(klaciCode);

  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {parsedCodes.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
          }}
        >
          {/* 원 */}
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: item.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            {item.code}
          </div>
          {/* 텍스트 */}
          <span
            style={{
              fontSize: '15px',
              color: item.color === '#D9D9E8' ? '#000' : item.color,
            }}
          >
            {item.nickname}
          </span>
        </div>
      ))}
    </div>
  );
};

interface RankingTableProps {
  data: TotalRegionRank[];
  onRegionClick: (regionId: number) => void;
}

const RankingTable: React.FC<RankingTableProps> = ({ data, onRegionClick }) => {
  // 데이터가 배열이 아니거나 없는 경우 안전 처리
  const safeData = Array.isArray(data) ? data : [];

  if (safeData.length === 0) {
    return (
      <div style={{ padding: '0 40px', textAlign: 'center', marginTop: '40px' }}>
        <p style={{ color: '#666', fontSize: '16px' }}>표시할 데이터가 없습니다.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '0 40px' }}>
      {/* 테이블 헤더 */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          padding: '16px',
          backgroundColor: '#F1F1F1',
          borderRadius: '18px',
          marginBottom: '8px',
          fontWeight: 'bold',
          fontSize: '16px',
          color: '#333',
        }}
      >
        <div style={{ flex: COLUMN_WIDTHS.rank }}>순위</div>
        <div style={{ flex: COLUMN_WIDTHS.regionName }}>지자체명</div>
        <div style={{ flex: COLUMN_WIDTHS.jewel }}>원석</div>
        <div style={{ flex: COLUMN_WIDTHS.type }}>유형명</div>
        <div style={{ flex: COLUMN_WIDTHS.klaciCode }}>유형코드</div>
        <div style={{ flex: COLUMN_WIDTHS.strengthIndexes }}>
          강점지표 TOP 3
        </div>
        <div style={{ flex: COLUMN_WIDTHS.totalScore }}>종합점수</div>
      </div>

      {/* 테이블 데이터 */}
      {safeData.map((item, index) => {
        // 차트 데이터 생성
        const chartData = generateChartData(item.region);

        return (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: '16px',
              padding: '16px',
              backgroundColor: 'white',
              borderRadius: '8px',
              marginBottom: '8px',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              border: '1px solid transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = '1px solid #000';
              e.currentTarget.style.backgroundColor = '#f8f9fa';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = '1px solid transparent';
              e.currentTarget.style.backgroundColor = 'white';
            }}
            onClick={() => onRegionClick(item.region_id)}
          >
            {/* 순위 */}
            <div
              style={{
                flex: COLUMN_WIDTHS.rank,
                fontWeight: 600,
                fontSize: '16px',
              }}
            >
              {item.total_rank}위
            </div>

            {/* 지자체명 */}
            <div
              style={{
                flex: COLUMN_WIDTHS.regionName,
                fontWeight: 600,
                fontSize: '18px',
              }}
            >
              {item.region.province.name} {item.region.name}
            </div>

            {/* 원석 - RadarJewelChartMini 사용 */}
            <div
              style={{
                flex: COLUMN_WIDTHS.jewel,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <RadarJewelChartMini
                data={chartData}
                size={48}
                imageUrl="/backgrounds/radar_chart_bg.png"
                hideBackground={true} // 배경 숨기기 옵션 추가
              />
            </div>

            {/* 유형명 */}
            <div
              style={{
                flex: COLUMN_WIDTHS.type,
                fontWeight: 600,
                fontSize: '16px',
              }}
            >
              {item.region.klaci?.type || '-'}
            </div>

            {/* 유형코드 */}
            <div
              style={{
                flex: COLUMN_WIDTHS.klaciCode,
                fontSize: '16px',
              }}
            >
              <KlaciCodeVisualizer klaciCode={item.region.klaci.code} />
            </div>

            {/* 강점지표 TOP 3 */}
            <div
              style={{
                flex: COLUMN_WIDTHS.strengthIndexes,
                display: 'flex',
                gap: '4px',
                fontSize: '18px',
              }}
            >
              {item.strength_indexes_details
                .slice(0, 3)
                .map((strength, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '2px 6px',
                      backgroundColor: '#F5F5F5',
                      borderRadius: '4px',
                      fontSize: '15px',
                      color: '#000',
                    }}
                  >
                    {strength.name}
                  </span>
                ))}
            </div>

            {/* 종합점수 */}
            <div
              style={{
                flex: COLUMN_WIDTHS.totalScore,
                color: '#000',
                fontSize: '16px',
              }}
            >
              {item.total_score.toFixed(3)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RankingTable; 