'use client';

import { useCategoryRanks } from '@/api/hooks/useRankingData';
import SearchInput from '@/components/atoms/SearchInput';
import { DataStateWrapper, SectionHeader } from '@/components/common';
import RankingTable from '@/components/ui/RankingTable';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';

// 카테고리 타입들 (임시로 정의, 실제 데이터에 맞게 수정 필요)
const CATEGORY_TYPES = [
  { id: 1, name: '인구', description: '인구 관련 지표' },
  { id: 2, name: '경제', description: '경제 관련 지표' },
  { id: 3, name: '생활', description: '생활 관련 지표' },
  { id: 4, name: '안전', description: '안전 관련 지표' },
  { id: 5, name: '환경', description: '환경 관련 지표' },
  { id: 6, name: '문화', description: '문화 관련 지표' },
  { id: 7, name: '교통', description: '교통 관련 지표' },
  { id: 8, name: '교육', description: '교육 관련 지표' },
];

export default function CategoryRankPageClient() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1); // 기본값: 인구
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // 전체 데이터를 한 번에 받아옴
  const { data, isLoading, error } = useCategoryRanks({
    limit: 1000,
    year: currentYear,
    // categoryId 파라미터 제거하여 전체 데이터 받기
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

  // 클라이언트 사이드에서 selectedCategoryId에 따라 필터링
  const filteredData = useMemo(() => {
    if (!data?.data || !Array.isArray(data.data)) return [];
    
    // 1. 선택된 카테고리로 필터링
    let categoryFiltered = data.data.filter(item => {
      // 실제 데이터 구조에 맞게 수정 필요
      // 예: item.category_id === selectedCategoryId
      return true; // 임시로 모든 데이터 표시
    });
    
    // 2. 검색어가 있으면 지자체명으로 필터링
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
            카테고리별 종합순위
          </h2>

          {/* 우측: 검색창 */}
          <SearchInput
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="지역 검색"
          />
        </div>

        {/* 카테고리 선택 버튼들 */}
        <div style={{ padding: '0 40px' }}>
          {/* 첫 번째 줄: 4개 버튼 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              marginBottom: '16px',
              width: '100%',
            }}
          >
            {CATEGORY_TYPES.slice(0, 4).map((category) => (
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

          {/* 두 번째 줄: 4개 버튼 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              marginBottom: '40px',
              width: '100%',
            }}
          >
            {CATEGORY_TYPES.slice(4, 8).map((category) => (
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
          title={`${currentCategory?.name} 카테고리 순위`}
          subtitle={currentCategory?.description}
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
                  : `${currentCategory?.name} 카테고리에 해당하는 데이터가 없습니다.`}
              </p>
              <p style={{ fontSize: '14px' }}>
                {debouncedSearchTerm.trim()
                  ? '다른 검색어를 시도해보세요.'
                  : '다른 카테고리를 선택해보세요.'}
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