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
  const [selectedType, setSelectedType] = useState<MegaRegionType>('대경권');

  // 전체 데이터를 한 번에 받아옴 (type 파라미터 제거)
  const { data, isLoading, error } = useMegaRegionRanks({
    limit: 100,
    year: currentYear,
    // type 파라미터 제거하여 전체 데이터 받기
  });

  // 클라이언트 사이드에서 selectedType에 따라 필터링
  const filteredData = useMemo(() => {
    if (!data?.data) return [];
    
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
        {/* 타이틀과 타입 선택 */}
        <div style={{ padding: '40px 40px 0 40px' }}>
          {/* 좌상단 타이틀 */}
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            margin: 0,
            marginBottom: '32px',
          }}>
            5극 3특 종합순위
          </h2>
          
          {/* 타입 선택 버튼들 - 그리드 레이아웃 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px',
            marginBottom: '16px',
            width: '100%',
          }}>
            {/* 첫 줄: 6개 버튼 */}
            {ORDERED_MEGA_REGION_TYPES.slice(0, 6).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                style={{
                  padding: '14px 20px',
                  backgroundColor: selectedType === type ? '#ffffff' : '#F1F1F1',
                  color: '#000000',
                  border: selectedType === type ? '1px solid #000000' : 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: selectedType === type ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {type}
              </button>
            ))}
          </div>
          
          {/* 둘째 줄: 2개 버튼 (좌측 정렬) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px',
            marginBottom: '40px',
            width: '100%',
          }}>
            {ORDERED_MEGA_REGION_TYPES.slice(6, 8).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                style={{
                  padding: '14px 20px',
                  backgroundColor: selectedType === type ? '#ffffff' : '#F1F1F1',
                  color: '#000000',
                  border: selectedType === type ? '1px solid #000000' : 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: selectedType === type ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        {/* 테이블 상단 타이틀 */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0 40px',
          marginBottom: '30px',
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            margin: 0,
          }}>
            {selectedType}
          </h2>
        </div>
        
        {/* 랭킹 테이블 */}
        <MegaRegionRankingSection 
          data={filteredData} 
          selectedType={selectedType}
        />
      </div>
    </DataStateWrapper>
  );
} 