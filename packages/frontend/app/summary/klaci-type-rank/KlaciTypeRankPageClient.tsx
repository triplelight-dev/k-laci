'use client';

import { useKlaciCodeRanks } from '@/api/hooks/useRankingData';
import { KlaciCodeType } from '@/api/types/stats.types';
import { DataStateWrapper } from '@/components/common';
import KlaciTypeRankingSection from '@/features/summary/sections/KlaciTypeRankingSection';
import { useMemo, useState } from 'react';

// KLACI 코드 타입들 (정의된 12개)
const ORDERED_KLACI_CODE_TYPES: KlaciCodeType[] = [
  'GTVR',
  'GTMR',
  'GTMA',
  'GCVR',
  'GCVA',
  'GCMR',
  'GCMA',
  'STVR',
  'SCVR',
  'SCVA',
  'SCMR',
  'SCMA',
];

// KLACI 코드와 타입명 매핑
const KLACI_TYPE_NAMES: Record<KlaciCodeType, string> = {
  'GTVR': '만능성장형',
  'GTMR': '안정혁신형',
  'GTMA': '경제집중형',
  'GCVR': '균형생활형',
  'GCVA': '활력생활형',
  'GCMR': '안전복지형',
  'GCMA': '점진도약형',
  'STVR': '전통안정형',
  'SCVR': '안정생활형',
  'SCVA': '생활도약형',
  'SCMR': '기초안정형',
  'SCMA': '개발도약형',
};

export default function KlaciTypeRankPageClient() {
  const currentYear = new Date().getFullYear();
  // 기본값을 'GTVR'으로 설정
  const [selectedType, setSelectedType] = useState<KlaciCodeType>('GTVR');

  // 전체 데이터를 한 번에 받아옴 (type 파라미터 제거, limit 증가)
  const { data, isLoading, error } = useKlaciCodeRanks({
    limit: 1000, // 100에서 1000으로 증가하여 모든 타입의 데이터를 충분히 가져옴
    year: currentYear,
    // type 파라미터 제거하여 전체 데이터 받기
  });

  // 클라이언트 사이드에서 selectedType에 따라 필터링
  const filteredData = useMemo(() => {
    if (!data?.data) return [];
    
    // 선택된 타입에 따라 필터링
    return data.data.filter(item => item.type === selectedType);
  }, [data?.data, selectedType]);

  // 이전/다음 타입 계산 - 안전한 배열 접근
  const getPreviousType = (): KlaciCodeType => {
    const currentIndex = ORDERED_KLACI_CODE_TYPES.indexOf(selectedType);
    const previousIndex = currentIndex === 0 ? ORDERED_KLACI_CODE_TYPES.length - 1 : currentIndex - 1;
    return ORDERED_KLACI_CODE_TYPES[previousIndex]!;
  };

  const getNextType = (): KlaciCodeType => {
    const currentIndex = ORDERED_KLACI_CODE_TYPES.indexOf(selectedType);
    const nextIndex = currentIndex === ORDERED_KLACI_CODE_TYPES.length - 1 ? 0 : currentIndex + 1;
    return ORDERED_KLACI_CODE_TYPES[nextIndex]!;
  };

  // 타입 변경 및 스크롤 상단 이동
  const handleTypeChange = (newType: KlaciCodeType) => {
    setSelectedType(newType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  console.log('### KlaciTypeRank DEBUG ###', { 
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
            KLACI 유형별 종합순위
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
            {ORDERED_KLACI_CODE_TYPES.slice(0, 6).map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
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
                {KLACI_TYPE_NAMES[type]} ({type})
              </button>
            ))}
          </div>
          
          {/* 둘째 줄: 6개 버튼 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px',
            marginBottom: '40px',
            width: '100%',
          }}>
            {ORDERED_KLACI_CODE_TYPES.slice(6, 12).map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
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
                {KLACI_TYPE_NAMES[type]} ({type})
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
            {KLACI_TYPE_NAMES[selectedType]} ({selectedType})
          </h2>
        </div>
        
        {/* 랭킹 테이블 */}
        <KlaciTypeRankingSection 
          data={filteredData} 
          selectedType={selectedType}
        />
        
        {/* 하단 네비게이션 버튼 */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 40px',
          marginBottom: '80px',
        }}>
          {/* 좌측 버튼 (이전) */}
          <button
            onClick={() => handleTypeChange(getPreviousType())}
            style={{
              padding: '12px 24px',
              backgroundColor: '#F1F1F1',
              color: '#000000',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'normal',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              minWidth: '200px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.border = '1px solid #000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F1F1';
              e.currentTarget.style.border = 'none';
            }}
          >
            ← {KLACI_TYPE_NAMES[getPreviousType()]} ({getPreviousType()})
          </button>
          
          {/* 우측 버튼 (다음) */}
          <button
            onClick={() => handleTypeChange(getNextType())}
            style={{
              padding: '12px 24px',
              backgroundColor: '#F1F1F1',
              color: '#000000',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'normal',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              minWidth: '200px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.border = '1px solid #000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F1F1';
              e.currentTarget.style.border = 'none';
            }}
          >
            {KLACI_TYPE_NAMES[getNextType()]} ({getNextType()}) →
          </button>
        </div>
      </div>
    </DataStateWrapper>
  );
} 