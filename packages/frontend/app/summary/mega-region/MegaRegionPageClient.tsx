'use client';

import { useMegaRegionRanks } from '@/api/hooks/useRankingData';
import { MegaRegionType } from '@/api/types/stats.types';
import { DataStateWrapper } from '@/components/common';
import MegaRegionRankingSection from '@/features/summary/sections/MegaRegionRankingSection';
import { useMemo, useState } from 'react';

// 사용자가 요청한 순서로 배열 정의
const ORDERED_MEGA_REGION_TYPES: MegaRegionType[] = [
  '대경권',
  '동남권',
  '서남권',
  '수도권',
  '중부권',
  '강원특별자치도',
  '전북특별자치도',
  '제주특별자치도',
];

export default function MegaRegionPageClient() {
  const currentYear = new Date().getFullYear();
  // 기본값을 '대경권'으로 설정
  const [selectedType, setSelectedType] = useState<MegaRegionType | null>('대경권');

  // 전체 데이터를 한 번에 받아옴 (type 파라미터 제거)
  const { data, isLoading, error } = useMegaRegionRanks({
    limit: 100,
    year: currentYear,
    // type 파라미터 제거하여 전체 데이터 받기
  });

  // 클라이언트 사이드에서 selectedType에 따라 필터링
  const filteredData = useMemo(() => {
    if (!data?.data) return [];
    
    // null이면 전체 데이터 반환
    if (selectedType === null) return data.data;
    
    // 선택된 타입에 따라 필터링
    return data.data.filter(item => {
      // item의 region 정보에서 메가 지역 타입을 확인
      // 이 부분은 실제 데이터 구조에 따라 조정이 필요할 수 있습니다
      return item.type === selectedType;
    });
  }, [data?.data, selectedType]);

  console.log('### MegaRegion DEBUG ###', { 
    allData: data?.data, 
    filteredData, 
    isLoading, 
    error, 
    selectedType 
  });

  return (
    <DataStateWrapper isLoading={isLoading} error={error} isBlackTheme={false}>
      <div style={{ width: '1400px', margin: '0 auto' }}>
        {/* 타입 선택 그리드 */}
        <MegaRegionTypeSelector 
          selectedType={selectedType}
          onTypeSelect={setSelectedType}
        />
        
        {/* 랭킹 테이블 */}
        <MegaRegionRankingSection 
          data={filteredData} 
          selectedType={selectedType}
        />
      </div>
    </DataStateWrapper>
  );
}

// 타입 선택 그리드 컴포넌트
interface MegaRegionTypeSelectorProps {
  selectedType: MegaRegionType | null;
  onTypeSelect: (type: MegaRegionType | null) => void;
}

function MegaRegionTypeSelector({ selectedType, onTypeSelect }: MegaRegionTypeSelectorProps) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        지역권역 선택
      </h2>
      
      {/* 전체 버튼 */}
      <div style={{ marginBottom: '16px', textAlign: 'center' }}>
        <button
          onClick={() => onTypeSelect(null)}
          style={{
            padding: '12px 24px',
            backgroundColor: selectedType === null ? '#2563eb' : '#f3f4f6',
            color: selectedType === null ? 'white' : '#374151',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            if (selectedType !== null) {
              e.currentTarget.style.backgroundColor = '#e5e7eb';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedType !== null) {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }
          }}
        >
          전체 지역
        </button>
      </div>

      {/* 8개 지역 그리드 - 사용자 요청 순서로 표시 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        {ORDERED_MEGA_REGION_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => onTypeSelect(type)}
            style={{
              padding: '16px 12px',
              backgroundColor: selectedType === type ? '#2563eb' : '#f9fafb',
              color: selectedType === type ? 'white' : '#374151',
              border: selectedType === type ? '2px solid #2563eb' : '2px solid #e5e7eb',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              minHeight: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              if (selectedType !== type) {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
                e.currentTarget.style.borderColor = '#d1d5db';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedType !== type) {
                e.currentTarget.style.backgroundColor = '#f9fafb';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }
            }}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
} 