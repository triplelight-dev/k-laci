'use client';

import { useCategoryRanks } from '@/api/hooks/useRankingData';
import SearchInput from '@/components/atoms/SearchInput';
import { DataStateWrapper, SectionHeader } from '@/components/common';
import RankingTable from '@/components/ui/RankingTable';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';

// 4개 핵심 범주 타입들
const CATEGORY_TYPES = [
  { 
    id: 1, 
    name: '인구성장력', 
    type: '인구성장력',
    description: '인구 구조의 활력, 변화의 역동성, 미래 성장 잠재력을 종합적으로 반영해 지역의 지속가능성을 가늠하는 범주' 
  },
  { 
    id: 2, 
    name: '경제활동력', 
    type: '경제활동형',
    description: '지역경제의 현재 상황과 미래 성장 잠재력을 종합적으로 평가하는 범주' 
  },
  { 
    id: 3, 
    name: '생활기반력', 
    type: '생활기반형',
    description: '지역 주민의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주' 
  },
  { 
    id: 4, 
    name: '안전회복력', 
    type: '안전회복형',
    description: '지역사회가 제공하는 안전 수준 및 위기 상황 등으로부터 회복하고 적응할 수 있는 역량을 나타내는 범주' 
  },
];

export default function CategoryRankPageClient() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1); // 기본값: 인구성장력
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // 전체 데이터를 한 번에 받아옴 (파라미터 없이)
  const { data, isLoading, error } = useCategoryRanks({
    limit: 1000, // 충분히 큰 값으로 설정하여 전체 데이터 받기
    year: currentYear,
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
    }, 300),
    [debounce],
  );

  // 검색어 변경 핸들러
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    debouncedSearch(value);
  };

  // 클라이언트 사이드에서 type 및 검색어에 따라 필터링
  const filteredData = useMemo(() => {
    if (!data?.data || !Array.isArray(data.data)) return [];
    
    // 현재 선택된 카테고리의 type 찾기
    const currentCategory = CATEGORY_TYPES.find(c => c.id === selectedCategoryId);
    const targetType = currentCategory?.type;
    
    if (!targetType) return [];
    
    // 1. 선택된 type으로 필터링
    let categoryFiltered = data.data.filter(item => {
      return item.type === targetType;
    });
    
    // 2. 각 카테고리별로 상위 50개만 선택 (순위 기준 오름차순)
    categoryFiltered = categoryFiltered
      .sort((a, b) => (a.total_rank || 0) - (b.total_rank || 0))
      .slice(0, 50);
    
    // 3. 검색어가 있으면 지자체명으로 필터링
    if (debouncedSearchTerm.trim()) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      
      categoryFiltered = categoryFiltered.filter((item) => {
        if (!item || !item.region || !item.region.name) {
          return false;
        }
        return item.region.name.toLowerCase().includes(searchLower);
      });
    }
    
    return categoryFiltered;
  }, [data?.data, selectedCategoryId, debouncedSearchTerm]);

  // 현재 선택된 카테고리 정보 가져오기
  const currentCategory = CATEGORY_TYPES.find((c) => c.id === selectedCategoryId);

  // 이전/다음 카테고리 계산
  const getPreviousCategoryId = (): number => {
    const currentIndex = CATEGORY_TYPES.findIndex(
      (c) => c.id === selectedCategoryId,
    );
    const previousIndex =
      currentIndex === 0 ? CATEGORY_TYPES.length - 1 : currentIndex - 1;
    return CATEGORY_TYPES[previousIndex]!.id;
  };

  const getNextCategoryId = (): number => {
    const currentIndex = CATEGORY_TYPES.findIndex(
      (c) => c.id === selectedCategoryId,
    );
    const nextIndex =
      currentIndex === CATEGORY_TYPES.length - 1 ? 0 : currentIndex + 1;
    return CATEGORY_TYPES[nextIndex]!.id;
  };

  // 카테고리 변경 및 스크롤 상단 이동
  const handleCategoryChange = (newCategoryId: number) => {
    setSelectedCategoryId(newCategoryId);
    setSearchTerm(''); // 카테고리 변경 시 검색어 초기화
    setDebouncedSearchTerm(''); // 디바운스 검색어도 초기화
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 지역 클릭 핸들러
  const handleRegionClick = useCallback(
    (regionId: number) => {
      router.push(`/results/region/${regionId}`);
    },
    [router],
  );

  return (
    <DataStateWrapper isLoading={isLoading} error={error} isBlackTheme={false}>
      <div style={{ width: '1400px', margin: '0 auto' }}>
        {/* 상단 타이틀과 검색창 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '40px 40px 0 40px',
            marginBottom: '32px',
          }}
        >
          {/* 좌측: 타이틀 */}
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#1a1a1a',
              margin: 0,
            }}
          >
            핵심범주별 TOP 50
          </h2>

          {/* 우측: 검색창 */}
          <SearchInput
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="지역 검색"
          />
        </div>

        {/* 카테고리 선택 버튼들 (4개 타입을 한 줄에 배치) */}
        <div style={{ padding: '0 40px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              marginBottom: '40px',
              width: '100%',
            }}
          >
            {CATEGORY_TYPES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                style={{
                  padding: '14px 20px',
                  backgroundColor:
                    selectedCategoryId === category.id ? '#ffffff' : '#F1F1F1',
                  color: '#000000',
                  border:
                    selectedCategoryId === category.id
                      ? '1px solid #000000'
                      : 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight:
                    selectedCategoryId === category.id ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* 테이블 상단 타이틀 */}
        <SectionHeader
          title={currentCategory?.name || ''}
          subtitle={currentCategory?.description || ''}
          searchTerm=""
          onSearchChange={() => {}}
          showSearch={false}
          hasTopMargin={false}
        />

        {/* 랭킹 테이블 */}
        <div style={{ marginBottom: '40px' }}>
          {filteredData.length > 0 ? (
            <RankingTable
              data={filteredData}
              onRegionClick={handleRegionClick}
            />
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '60px 0',
                color: '#6b7280',
              }}
            >
              <p style={{ fontSize: '18px', marginBottom: '8px' }}>
                {debouncedSearchTerm.trim()
                  ? '검색 결과가 없습니다.'
                  : `${currentCategory?.name} 데이터가 없습니다.`}
              </p>
              <p style={{ fontSize: '14px' }}>
                {debouncedSearchTerm.trim()
                  ? '다른 검색어를 시도해보세요.'
                  : '다른 범주를 선택해보세요.'}
              </p>
            </div>
          )}
        </div>

        {/* 하단 네비게이션 버튼 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 40px',
            marginBottom: '40px',
            gap: '16px',
          }}
        >
          <button
            onClick={() => handleCategoryChange(getPreviousCategoryId())}
            style={{
              padding: '12px 24px',
              backgroundColor: '#F1F1F1',
              color: '#000000',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: 'normal',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            이전
          </button>
          
          <span style={{ fontSize: '16px', color: '#6b7280' }}>
            {CATEGORY_TYPES.findIndex(c => c.id === selectedCategoryId) + 1} / {CATEGORY_TYPES.length}
          </span>
          
          <button
            onClick={() => handleCategoryChange(getNextCategoryId())}
            style={{
              padding: '12px 24px',
              backgroundColor: '#F1F1F1',
              color: '#000000',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: 'normal',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            다음
          </button>
        </div>
      </div>
    </DataStateWrapper>
  );
} 