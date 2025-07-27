'use client';

import { useMegaRegionRanks } from '@/api/hooks/useRankingData';
import { MegaRegionType } from '@/api/types/stats.types';
import SearchInput from '@/components/atoms/SearchInput';
import { DataStateWrapper, SectionHeader } from '@/components/common';
import RankingTable from '@/components/ui/RankingTable';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';

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

// 타입별 타이틀 매핑
const TYPE_TITLES: Record<MegaRegionType, string> = {
  대경권: '대경권: 경상북도 · 대구광역시',
  동남권: '동남권: 경상남도 · 부산광역시 · 울산광역시',
  수도권: '수도권: 경기도 · 서울특별시 · 인천광역시',
  서남권: '서남권: 광주광역시 · 전라남도',
  중부권: '중부권: 대전광역시 · 세종특별자치시 · 충청남도 · 충청북도',
  강원특별자치도: '강원특별자치도',
  전북특별자치도: '전북특별자치도',
  제주특별자치도: '제주특별자치도',
};

export default function MegaRegionPageClient() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  // 기본값을 '대경권'으로 설정
  const [selectedType, setSelectedType] = useState<MegaRegionType>('대경권');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // 전체 데이터를 한 번에 받아옴 (type 파라미터 제거)
  const { data, isLoading, error } = useMegaRegionRanks({
    limit: 1000,
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
    }, 300),
    [debounce],
  );

  // 검색어 변경 핸들러
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    debouncedSearch(value);
  };

  // 클라이언트 사이드에서 selectedType에 따라 필터링 + 검색어 필터링
  const filteredData = useMemo(() => {
    if (!data?.data) return [];

    // 선택된 타입에 따라 필터링
    let typeFiltered = data.data.filter((item) => item.type === selectedType);

    // 검색어가 있으면 추가 필터링
    if (debouncedSearchTerm.trim()) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      typeFiltered = typeFiltered.filter((item) => {
        const fullName =
          `${item.region.province.name} ${item.region.name}`.toLowerCase();
        return fullName.includes(searchLower);
      });
    }

    return typeFiltered;
  }, [data?.data, selectedType, debouncedSearchTerm]);

  // 이전/다음 타입 계산 - 안전한 배열 접근
  const getPreviousType = (): MegaRegionType => {
    const currentIndex = ORDERED_MEGA_REGION_TYPES.indexOf(selectedType);
    const previousIndex =
      currentIndex === 0
        ? ORDERED_MEGA_REGION_TYPES.length - 1
        : currentIndex - 1;
    return ORDERED_MEGA_REGION_TYPES[previousIndex]!;
  };

  const getNextType = (): MegaRegionType => {
    const currentIndex = ORDERED_MEGA_REGION_TYPES.indexOf(selectedType);
    const nextIndex =
      currentIndex === ORDERED_MEGA_REGION_TYPES.length - 1
        ? 0
        : currentIndex + 1;
    return ORDERED_MEGA_REGION_TYPES[nextIndex]!;
  };

  // 타입 변경 및 스크롤 상단 이동
  const handleTypeChange = (newType: MegaRegionType) => {
    setSelectedType(newType);
    setSearchTerm(''); // 타입 변경 시 검색어 초기화
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

  const getCurrentTitle = (): string => {
    return TYPE_TITLES[selectedType];
  };

  return (
    <DataStateWrapper isLoading={isLoading} error={error} isBlackTheme={false}>
      <div style={{ width: '1400px', margin: '0 auto' }}>
        {/* 상단 타이틀과 검색창 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '40px 0 0 0',
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
            5극 3특 종합순위
          </h2>

          {/* 우측: 검색창 */}
          <SearchInput
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="지역 검색"
          />
        </div>

        {/* 타입 선택 버튼들 */}
        <div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '16px',
              marginBottom: '16px',
              width: '100%',
            }}
          >
            {ORDERED_MEGA_REGION_TYPES.slice(0, 8).map((type, index) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                style={{
                  padding: '14px 20px',
                  backgroundColor:
                    selectedType === type ? '#ffffff' : '#F1F1F1',
                  color: '#000000',
                  border: selectedType === type ? '1px solid #000000' : 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: selectedType === type ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  gridColumn: index >= 6 ? `${index - 5} / ${index - 4}` : 'auto',
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* 테이블 상단 타이틀 (검색창 없음, 상단 여백 없음) */}
        <SectionHeader
          title={getCurrentTitle()}
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
                  : `${selectedType}에 해당하는 데이터가 없습니다.`}
              </p>
              <p style={{ fontSize: '14px' }}>
                {debouncedSearchTerm.trim()
                  ? '다른 검색어를 시도해보세요.'
                  : '다른 지역을 선택해보세요.'}
              </p>
            </div>
          )}
        </div>

        {/* 하단 네비게이션 버튼 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 40px',
            marginBottom: '80px',
          }}
        >
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
            ← {getPreviousType()}
          </button>

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
            {getNextType()} →
          </button>
        </div>
      </div>
    </DataStateWrapper>
  );
}
