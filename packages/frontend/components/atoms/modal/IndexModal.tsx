'use client';

import React from 'react';

import { NUM_OF_REGIONS } from '@/constants/data';
import { IndexData } from '@/features/results/sections/StrenthWeaknessIndexSection';

import { colorMap } from '@/features/results/sections/StrenthWeaknessIndexSection';

interface IndexModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: IndexData;
}

const IndexModal: React.FC<IndexModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const topPercentage = ((data.indexRank / NUM_OF_REGIONS) * 100).toFixed(1);
  const source = data.source || '통계청'; // API에서 받은 source 사용, 없으면 기본값
  const year = data.year || new Date().getFullYear(); // API에서 받은 year 사용, 없으면 현재 연도
  const yearlyAvgScore = data.yearlyAvgScore; // API에서 받은 연도별 평균점수

  // 카테고리에 따른 색상 설정
  const rankColor = colorMap[data.category] || '#FF3737'; // 기본값으로 빨간색

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        cursor: 'pointer',
      }}
      onClick={onClose}
    >
      <div
        style={{
          display: 'flex',
          width: '800px',
          height: '450px',
          borderRadius: '30px',
          overflow: 'hidden',
          backgroundColor: 'white',
          cursor: 'default',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 좌측 섹션 */}
        <div
          style={{
            flex: 1,
            backgroundColor: 'white',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* 지자체명 뱃지 */}
          <div
            style={{
              padding: '8px 16px',
              backgroundColor: 'white',
              border: '1px solid #000000',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#000000',
              alignSelf: 'flex-start',
            }}
          >
            {data.fullRegionName}
          </div>

          {/* 강점지표 값 */}
          <div
            style={{
              fontSize: '25px',
              fontWeight: '600',
              color: '#000000',
              marginTop: '8px',
            }}
          >
            {data.indexName}
          </div>

          {/* 순위 - 카테고리별 색상 적용 */}
          <div
            style={{
              fontSize: '25px',
              fontWeight: '600',
              color: rankColor,
            }}
          >
            {data.indexRank}위
          </div>

          {/* 상위 퍼센트 */}
          <div
            style={{
              fontSize: '16px',
              fontWeight: '400',
              color: '#ADB5C4',
            }}
          >
            상위 {topPercentage}%
          </div>

          {/* 출처 - key_indexes 테이블의 source 컬럼 사용 */}
          <div
            style={{
              fontSize: '14px',
              fontWeight: '400',
              color: '#000000',
              paddingTop: '16px',
              borderTop: '1px solid #D9D9E8',
            }}
          >
            {source}
          </div>

          {/* 연도 정보 */}
          <div
            style={{
              fontSize: '14px',
              fontWeight: '400',
              color: '#000000',
              paddingTop: '16px',
              borderTop: '1px solid #D9D9E8',
            }}
          >
            참고용 로데이터 ({year})
          </div>

          {/* 점수 정보 */}
          <div
            style={{
              marginTop: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                fontWeight: '400',
                color: '#474E59',
              }}
            >
              {data.fullRegionName} {data.indexRank}위
            </div>
            {data.indexScore !== undefined && data.indexScore > 0 && (
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: '#474E59',
                }}
              >
                점수: {data.indexScore.toFixed(2)}점
              </div>
            )}
            {yearlyAvgScore !== undefined && (
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: '#474E59',
                }}
              >
                전국 평균 {yearlyAvgScore.toFixed(2)}점
              </div>
            )}
          </div>
        </div>

        {/* 우측 섹션 */}
        <div
          style={{
            flex: 3,
            backgroundColor: '#F9F9FF',
            padding: '32px',
            paddingLeft: '50px',
            paddingRight: '50px',
            paddingTop: '90px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '15px',
              fontWeight: '400',
              color: 'black',
              lineHeight: 1.6,
            }}
          >
            {data.indexDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexModal;
