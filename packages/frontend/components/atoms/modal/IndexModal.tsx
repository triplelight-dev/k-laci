'use client';

import { NUM_OF_REGIONS } from '@/constants/data';
import { IndexData } from '@/features/results/sections/StrenthWeaknessIndexSection';
import React from 'react';

interface IndexModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: IndexData;
}

const IndexModal: React.FC<IndexModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  console.log('data', data);
  const topPercentage = ((data.indexRank / NUM_OF_REGIONS) * 100).toFixed(1);

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

          {/* 순위 */}
          <div
            style={{
              fontSize: '25px',
              fontWeight: '600',
              color: '#FF3737',
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

          {/* 통계청 */}
          <div
            style={{
              fontSize: '14px',
              fontWeight: '400',
              color: '#000000',
              paddingTop: '16px',
              borderTop: '1px solid #D9D9E8',
            }}
          >
            통계청
          </div>

          {/* 참고용 로데이터 */}
          <div
            style={{
              fontSize: '14px',
              fontWeight: '400',
              color: '#000000',
              paddingTop: '16px',
              borderTop: '1px solid #D9D9E8',
            }}
          >
            참고용 로데이터 (2020)
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
              {data.fullRegionName} 000점 (update)
            </div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '400',
                color: '#474E59',
              }}
            >
              전국 평균 0.43234점
            </div>
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
            // alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '15px',
              fontWeight: '400',
              color: 'black',
              lineHeight: 1.6,
              // textAlign: 'center',
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
