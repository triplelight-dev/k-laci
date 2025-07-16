'use client';

import { useKlaciCodeRanks } from '@/api/hooks/useRankingData';
import { KlaciCodeType } from '@/api/types/stats.types';
import SearchInput from '@/components/atoms/SearchInput';
import { DataStateWrapper, SectionHeader } from '@/components/common';
import KlaciTypeRankingSection from '@/features/summary/sections/KlaciTypeRankingSection';
import { useCallback, useMemo, useState } from 'react';

// KLACI 코드 타입들 (정의된 16개)
const ORDERED_KLACI_CODE_TYPES: KlaciCodeType[] = [
  'GTVR',
  'GTVA',
  'GTMR',
  'GTMA',
  'GCVR',
  'GCVA',
  'GCMR',
  'GCMA',
  'STVR',
  'STVA',
  'STMR',
  'STMA',
  'SCVR',
  'SCVA',
  'SCMR',
  'SCMA',
];

// KLACI 코드와 타입명 매핑
const KLACI_TYPE_NAMES: Record<KlaciCodeType, string> = {
  'GTVR': '만능성장형',
  'GTVA': '성장가속형',
  'GTMR': '안정혁신형',
  'GTMA': '경제집중형',
  'GCVR': '균형생활형',
  'GCVA': '활력생활형',
  'GCMR': '안전복지형',
  'GCMA': '점진도약형',
  'STVR': '전통안정형',
  'STVA': '혁신전환형',
  'STMR': '안정성장형',
  'STMA': '기술집중형',
  'SCVR': '안정생활형',
  'SCVA': '생활도약형',
  'SCMR': '기초안정형',
  'SCMA': '개발도약형',
};

// KLACI 코드와 닉네임 매핑
const KLACI_NICKNAMES: Record<KlaciCodeType, string> = {
  'GTVR': '미래를 선도하는 균형 성장의 혁신 도시',
  'GTVA': '젊은 활력과 혁신으로 도약하는 전진 도시',
  'GTMR': '첨단 산업과 성장 동력이 구축된 안정 도시',
  'GTMA': '경제적 역동과 실험이 일어나는 발전 도시',
  'GCVR': '새로운 활력을 모색하는 살기 좋은 정주 도시',
  'GCVA': '지속가능성과 성장 동력을 더해가는 정진 도시',
  'GCMR': '미래 전략으로 한계를 도약하는 거점 도시',
  'GCMA': '고유 가치를 기반으로 경쟁력을 키우는 재건 도시',
  'STVR': '성장 저력과 삶의 품격이 공존하는 성숙 도시',
  'STVA': '산업 발전 속 삶의 균형을 찾아가는 전환 도시',
  'STMR': '혁신과 안전을 품은 평온한 성장 도시',
  'STMA': '기술 혁신과 잠재 에너지를 지닌 변화 도시',
  'SCVR': '일상 속 안전과 삶의 풍요가 정착된 안정 도시',
  'SCVA': '지역 자산과 잠재력으로 기회를 엿보는 생활 도시',
  'SCMR': '산업 다각화로 불균형을 해소하는 개진 도시',
  'SCMA': '회복된 신뢰로 미래 기반을 재건하는 점진 도시',
};

export default function KlaciTypeRankPageClient() {
  const currentYear = new Date().getFullYear();
  // 기본값을 'GTVR'으로 설정
  const [selectedType, setSelectedType] = useState<KlaciCodeType>('GTVR');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // 전체 데이터를 한 번에 받아옴 (type 파라미터 제거, limit 증가)
  const { data, isLoading, error } = useKlaciCodeRanks({
    limit: 1000, // 16개 타입의 모든 데이터를 충분히 가져옴
    year: currentYear,
    // type 파라미터 제거하여 전체 데이터 받기
  });

  // Debounce 함수
  const debounce = useCallback((func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
  }, []);

  // Debounced search handler
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setDebouncedSearchTerm(value);
    }, 300), // 300ms 딜레이
    [debounce],
  );

  // 검색어 변경 핸들러
  const handleSearchChange = (value: string) => {
    setSearchTerm(value); // 즉시 UI 업데이트
    debouncedSearch(value); // 디바운스된 필터링
  };

  // 클라이언트 사이드에서 selectedType에 따라 필터링 + 검색어 필터링
  const filteredData = useMemo(() => {
    if (!data?.data) return [];
    
    // 선택된 타입에 따라 필터링
    let typeFiltered = data.data.filter(item => item.type === selectedType);
    
    // 검색어가 있으면 추가 필터링
    if (debouncedSearchTerm.trim()) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      typeFiltered = typeFiltered.filter((item) => {
        const fullName = `${item.region.province.name} ${item.region.name}`.toLowerCase();
        return fullName.includes(searchLower);
      });
    }
    
    return typeFiltered;
  }, [data?.data, selectedType, debouncedSearchTerm]);

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
    setSearchTerm(''); // 타입 변경 시 검색어 초기화
    setDebouncedSearchTerm(''); // 디바운스 검색어도 초기화
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <DataStateWrapper isLoading={isLoading} error={error} isBlackTheme={false}>
      <div style={{ width: '1400px', margin: '0 auto' }}>
        {/* 상단 타이틀과 검색창 */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '40px 40px 0 40px',
          marginBottom: '32px',
        }}>
          {/* 좌측: 타이틀 */}
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            margin: 0,
          }}>
            유형별 종합순위
          </h2>

          {/* 우측: 검색창 */}
          <SearchInput
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="지역 검색"
          />
        </div>

        {/* 타입 선택 버튼들 */}
        <div style={{ padding: '0 40px' }}>
          {/* 첫 번째 줄: 6개 버튼 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px',
            marginBottom: '16px',
            width: '100%',
          }}>
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
          
          {/* 두 번째 줄: 6개 버튼 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px',
            marginBottom: '16px',
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
          
          {/* 세 번째 줄: 4개 버튼 (좌측부터 채움) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)', // 6개 컬럼으로 설정하되 4개만 사용
            gap: '16px',
            marginBottom: '40px',
            width: '100%',
          }}>
            {ORDERED_KLACI_CODE_TYPES.slice(12, 16).map((type) => (
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
        
        {/* 테이블 상단 타이틀 (검색창 없음, 상단 여백 없음) */}
        <SectionHeader
          title={`${KLACI_TYPE_NAMES[selectedType]} (${selectedType})`}
          subtitle={KLACI_NICKNAMES[selectedType]}
          searchTerm=""
          onSearchChange={() => {}}
          showSearch={false}
          hasTopMargin={false}
        />
        
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