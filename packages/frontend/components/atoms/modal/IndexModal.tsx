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
  const topPercentage = ((data.indexRank / NUM_OF_REGIONS) * 100).toFixed(
    1,
  );

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
      }}
      onClick={onClose}
    >
      <div
        style={{
          display: 'flex',
          width: '800px',
          height: '430px',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: 'white',
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
              전라북도 전주시 0.43234점
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '15px',
              fontWeight: '400',
              color: '#474E59',
              lineHeight: 1.5,
              // textAlign: 'center',
            }}
          >
            이 지표는 해당 지역의 특성을 나타내는 중요한 지표입니다. 높은 수치는
            해당 분야에서 지역이 우수한 성과를 보이고 있음을 의미하며, 지역
            발전과 정책 수립에 중요한 참고 자료로 활용됩니다. 이 지표는 해당
            지역의 특성을 나타내는 중요한 지표입니다. 높은 수치는 해당 분야에서
            지역이 우수한 성과를 보이고 있음을 의미하며, 지역 발전과 정책 수립에
            중요한 참고 자료로 활용됩니다. 이 지표는 해당 지역의 특성을 나타내는
            중요한 지표입니다. 높은 수치는 해당 분야에서 지역이 우수한 성과를
            보이고 있음을 의미하며, 지역 발전과 정책 수립에 중요한 참고 자료로
            활용됩니다. 이 지표는 해당 지역의 특성을 나타내는 중요한 지표입니다.
            높은 수치는 해당 분야에서 지역이 우수한 성과를 보이고 있음을
            의미하며, 지역 발전과 정책 수립에 중요한 참고 자료로 활용됩니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexModal;
