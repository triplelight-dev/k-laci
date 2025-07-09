'use client';

import { TotalRegionRank } from '@/api/types/stats.types';
import React from 'react';

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
            zIndex: 1,
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="지역 검색"
          style={{
            width: '280px',
            height: '36px',
            padding: '8px 12px 8px 36px',
            border: '1px solid #E5E7EB',
            borderRadius: '6px',
            fontSize: '14px',
            outline: 'none',
            backgroundColor: '#F9FAFB',
            transition: 'all 0.2s ease',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#3B82F6';
            e.target.style.backgroundColor = 'white';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#E5E7EB';
            e.target.style.backgroundColor = '#F9FAFB';
          }}
        />
      </div>
    </div>
  );
};

// 강점지표 뱃지 컴포넌트
const StrengthIndexBadge: React.FC<{ name: string }> = ({ name }) => {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 8px',
        margin: '2px',
        backgroundColor: 'transparent',
        border: '1px solid #000',
        borderRadius: '4px',
        fontSize: '11px',
        color: '#000',
        whiteSpace: 'nowrap',
      }}
    >
      {name}
    </span>
  );
};

// 표 헤더 컴포넌트
const TableHeader: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '60px 150px 80px 120px 120px 250px 80px 100px',
        gap: '16px',
        padding: '16px 20px',
        backgroundColor: '#F8F9FA',
        borderBottom: '1px solid #E5E7EB',
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#374151',
      }}
    >
      <div>순위</div>
      <div>지자체명</div>
      <div>원석</div>
      <div>유형명</div>
      <div>유형코드</div>
      <div>강점지표 TOP 3</div>
      <div>체급</div>
      <div>종합점수</div>
    </div>
  );
};

// 표 행 컴포넌트
const TableRow: React.FC<{ rank: TotalRegionRank }> = ({ rank }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '60px 150px 80px 120px 120px 250px 80px 100px',
        gap: '16px',
        padding: '16px 20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        marginBottom: '8px',
        alignItems: 'center',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        border: '1px solid transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = '1px solid #000000';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = '1px solid transparent';
      }}
    >
      {/* 순위 */}
      <div style={{ 
        fontWeight: '600', 
        color: '#1F2937'
      }}>
        {rank.total_rank}위
      </div>

      {/* 지자체명 */}
      <div style={{ 
        color: '#1F2937', 
        fontWeight: '600',
        fontSize: '16px'
      }}>
        {rank.region.province.name} {rank.region.name}
      </div>

      {/* 원석 */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%'
      }}>
        <img
          src="/districts/sample_dist_icon.png"
          alt="원석 아이콘"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '4px',
          }}
        />
      </div>

      {/* 유형명 */}
      <div style={{ 
        color: '#1F2937', 
        fontWeight: '600'
      }}>
        {rank.region.klaci.type}
      </div>

      {/* 유형코드 */}
      <div style={{ 
        color: '#6B7280', 
        fontFamily: 'monospace'
      }}>
        {rank.region.klaci.code}
      </div>

      {/* 강점지표 TOP 3 */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '4px'
      }}>
        {rank.strength_indexes_details.slice(0, 3).map((index, idx) => (
          <StrengthIndexBadge key={idx} name={index.name} />
        ))}
      </div>

      {/* 체급 */}
      <div style={{ 
        color: '#1F2937'
      }}>
        {rank.region.weight_class || 'N/A'}급
      </div>

      {/* 종합점수 */}
      <div style={{ 
        color: '#000000'
      }}>
        {rank.total_score.toFixed(3)}
      </div>
    </div>
  );
};

// 메인 테이블 컴포넌트
const RankingTable: React.FC<{ data: TotalRegionRank[] }> = ({ data }) => {
  return (
    <div
      style={{
        padding: '0 40px',
        marginBottom: '20px',
      }}
    >
      <TableHeader />
      <div style={{ marginTop: '8px' }}>
        {data.map((rank) => (
          <TableRow key={rank.id} rank={rank} />
        ))}
      </div>
    </div>
  );
};

const TotalRankingSection: React.FC<{ data?: TotalRegionRank[] }> = ({ data }) => {
  return (
    <div
      style={{
        width: '100%',
        padding: '40px 0',
        backgroundColor: '#F4F4F4',
        borderRadius: '12px',
      }}
    >
      <SectionHeader />

      {/* 메인 테이블 */}
      {data && data.length > 0 ? (
        <RankingTable data={data} />
      ) : (
        <div
          style={{
            padding: '0 40px',
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6B7280',
          }}
        >
          데이터를 불러오는 중...
        </div>
      )}
    </div>
  );
};

export default TotalRankingSection; 