'use client';

import { TotalRegionRank } from '@/api/types/stats.types';
import { parseKlaciCodeWithNickname } from '@/utils/klaciCodeUtils';
import React from 'react';

// KLACI 코드 시각화 컴포넌트
const KlaciCodeVisualizer: React.FC<{ klaciCode: string }> = ({
  klaciCode,
}) => {
  const parsedCodes = parseKlaciCodeWithNickname(klaciCode);

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      {parsedCodes.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
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
              fontSize: '10px',
              fontWeight: 'bold',
            }}
          >
            {item.code}
          </div>
          {/* 텍스트 */}
          <span 
            style={{ 
              fontSize: '13px', 
              color: item.color === '#D9D9E8' ? '#000' : item.color 
            }}
          >
            {item.nickname}
          </span>
        </div>
      ))}
    </div>
  );
};

// 타이틀과 검색창을 별도 컴포넌트로 분리
const SectionHeader: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 40px',
        marginBottom: '30px',
      }}
    >
      {/* 좌상단: 제목 */}
      <div>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            margin: 0,
          }}
        >
          종합순위 TOP 100
        </h2>
      </div>

      {/* 우측: 검색창 */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '12px',
            color: '#999',
            fontSize: '16px',
          }}
        >
          🔍
        </div>
        <input
          type="text"
          placeholder="지역 검색"
          style={{
            width: '200px',
            height: '36px',
            padding: '8px 12px 8px 36px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            fontSize: '14px',
            outline: 'none',
          }}
        />
      </div>
    </div>
  );
};

// 메인 테이블 컴포넌트
const RankingTable: React.FC<{ data: TotalRegionRank[] }> = ({ data }) => {
  return (
    <div style={{ padding: '0 40px' }}>
      {/* 테이블 헤더 */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          padding: '16px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          marginBottom: '8px',
          fontWeight: 'bold',
          fontSize: '14px',
          color: '#333',
        }}
      >
        <div style={{ flex: '0 0 50px' }}>순위</div>
        <div style={{ flex: '0 0 80px' }}>지자체명</div>
        <div style={{ flex: '0 0 60px' }}>원석</div>
        <div style={{ flex: '0 0 80px' }}>유형명</div>
        <div style={{ flex: '1 1 400px' }}>유형코드</div>
        <div style={{ flex: '1 1 350px' }}>강점지표 TOP 3</div>
        <div style={{ flex: '0 0 60px' }}>체급</div>
        <div style={{ flex: '0 0 60px' }}>종합점수</div>
      </div>

      {/* 테이블 데이터 */}
      {data.map((item, index) => (
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
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f8f9fa';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
          }}
        >
          {/* 순위 */}
          <div
            style={{
              flex: '0 0 50px',
              fontWeight: 600,
              fontSize: '14px',
            }}
          >
            {item.total_rank}위
          </div>

          {/* 지자체명 */}
          <div
            style={{
              flex: '0 0 80px',
              fontWeight: 600,
              fontSize: '16px',
            }}
          >
            {item.region.province.name} {item.region.name}
          </div>

          {/* 원석 */}
          <div
            style={{
              flex: '0 0 60px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src="/districts/sample_dist_icon.png"
              alt="원석"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
              }}
            />
          </div>

          {/* 유형명 */}
          <div
            style={{
              flex: '0 0 80px',
              fontWeight: 600,
              fontSize: '14px',
            }}
          >
            {item.region.klaci?.type || '-'}
          </div>

          {/* 유형코드 */}
          <div
            style={{
              flex: '1 1 400px',
              fontSize: '16px',
            }}
          >
            <KlaciCodeVisualizer klaciCode={item.region.klaci_code} />
          </div>

          {/* 강점지표 TOP 3 */}
          <div
            style={{
              flex: '1 1 350px',
              display: 'flex',
              gap: '4px',
              fontSize: '16px',
            }}
          >
            {item.strength_indexes_details.slice(0, 3).map((strength, idx) => (
              <span
                key={idx}
                style={{
                  padding: '2px 6px',
                  backgroundColor: 'transparent',
                  border: '1px solid #333',
                  borderRadius: '4px',
                  fontSize: '13px',
                  color: '#333',
                }}
              >
                {strength.name}
              </span>
            ))}
          </div>

          {/* 체급 */}
          <div
            style={{
              flex: '0 0 60px',
              fontSize: '14px',
            }}
          >
            {item.region.weight_class}급
          </div>

          {/* 종합점수 */}
          <div
            style={{
              flex: '0 0 60px',
              color: '#000',
              fontSize: '14px',
            }}
          >
            {item.total_score.toFixed(3)}
          </div>
        </div>
      ))}
    </div>
  );
};

// 메인 컴포넌트
const TotalRankingSection: React.FC<{ data: TotalRegionRank[] }> = ({
  data,
}) => {
  return (
    <div
      style={{
        width: '100%',
        padding: '40px 0',
      }}
    >
      <SectionHeader />
      <RankingTable data={data} />
    </div>
  );
};

export default TotalRankingSection;
