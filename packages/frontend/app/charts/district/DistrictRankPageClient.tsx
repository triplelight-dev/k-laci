'use client';

import { useDistrictTypeRanks } from '@/api/hooks/useRankingData';
import SearchInput from '@/components/atoms/SearchInput';
import { DataStateWrapper, SectionHeader } from '@/components/common';
import RankingTable from '@/components/ui/RankingTable';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';

// 3개 행정단위 타입들
const DISTRICT_TYPES = [
  { 
    id: 1, 
    name: '시', 
    type: '시',
    description: '전국 78개 시 단위 지자체 중 상위 50곳' 
  },
  { 
    id: 2, 
    name: '군', 
    type: '군',
    description: '전국 82개 군 단위 지자체 중 상위 50곳' 
  },
  { 
    id: 3, 
    name: '구', 
    type: '구',
    description: '전국 69개 구 단위 지자체 중 상위 50곳' 
  },
];

export default function DistrictRankPageClient() {
  const router = useRouter();
  const [selectedDistrictId, setSelectedDistrictId] = useState<number>(1); // 기본값: 시
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // 전체 데이터를 한 번에 받아옴
  const { data, isLoading, error } = useDistrictTypeRanks();

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
    
    // 현재 선택된 행정단위의 type 찾기
    const currentDistrict = DISTRICT_TYPES.find(d => d.id === selectedDistrictId);
    const targetType = currentDistrict?.type;
    
    if (!targetType) return [];
    
    // 1. 선택된 type으로 필터링
    let districtFiltered = data.data.filter(item => {
      return item.type === targetType;
    });
    
    // 2. 각 행정단위별로 상위 50개만 선택 (순위 기준 오름차순)
    districtFiltered = districtFiltered
      .sort((a, b) => (a.total_rank || 0) - (b.total_rank || 0))
      .slice(0, 50);
    
    // 3. 검색어가 있으면 지자체명으로 필터링
    if (debouncedSearchTerm.trim()) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      
      districtFiltered = districtFiltered.filter((item) => {
        if (!item || !item.region || !item.region.name) {
          return false;
        }
        return item.region.name.toLowerCase().includes(searchLower);
      });
    }
    
    return districtFiltered;
  }, [data?.data, selectedDistrictId, debouncedSearchTerm]);

  // 현재 선택된 행정단위 정보 가져오기
  const currentDistrict = DISTRICT_TYPES.find((d) => d.id === selectedDistrictId);

  // 이전/다음 행정단위 계산
  const getPreviousDistrictId = (): number => {
    const currentIndex = DISTRICT_TYPES.findIndex(
      (d) => d.id === selectedDistrictId,
    );
    const previousIndex =
      currentIndex === 0 ? DISTRICT_TYPES.length - 1 : currentIndex - 1;
    return DISTRICT_TYPES[previousIndex]!.id;
  };

  const getNextDistrictId = (): number => {
    const currentIndex = DISTRICT_TYPES.findIndex(
      (d) => d.id === selectedDistrictId,
    );
    const nextIndex =
      currentIndex === DISTRICT_TYPES.length - 1 ? 0 : currentIndex + 1;
    return DISTRICT_TYPES[nextIndex]!.id;
  };

  // 행정단위 변경 및 스크롤 상단 이동
  const handleDistrictChange = (newDistrictId: number) => {
    setSelectedDistrictId(newDistrictId);
    setSearchTerm(''); // 행정단위 변경 시 검색어 초기화
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
            padding: '40px 0 0 0',
            marginBottom: '32px',
          }}
        >
          {/* 좌측: 타이틀 */}
          <h2
            style={{
              fontSize: '28px',
              fontWeight: '600',
              color: '#1a1a1a',
              margin: 0,
            }}
          >
            시군구별 TOP 50
          </h2>

          {/* 우측: 검색창 */}
          <SearchInput
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="지역 검색"
          />
        </div>

        {/* 행정단위 선택 버튼들 (3개 타입을 한 줄에 배치) */}
        <div>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '40px',
              width: 'fit-content',
            }}
          >
            {DISTRICT_TYPES.map((district) => (
              <button
                key={district.id}
                onClick={() => handleDistrictChange(district.id)}
                style={{
                  padding: '14px 20px',
                  backgroundColor:
                    selectedDistrictId === district.id ? '#ffffff' : '#F1F1F1',
                  color: '#000000',
                  border:
                    selectedDistrictId === district.id
                      ? '1px solid #000000'
                      : 'none',
                  borderRadius: '14px',
                  fontSize: '16px',
                  fontWeight:
                    selectedDistrictId === district.id ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  maxWidth: '250px',
                  width: '250px',
                }}
              >
                {district.name}
              </button>
            ))}
          </div>
        </div>

        {/* 테이블 상단 타이틀 */}
        <SectionHeader
          title={currentDistrict?.name || ''}
          subtitle={currentDistrict?.description || ''}
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
                  : `${currentDistrict?.name} 데이터가 없습니다.`}
              </p>
              <p style={{ fontSize: '14px' }}>
                {debouncedSearchTerm.trim()
                  ? '다른 검색어를 시도해보세요.'
                  : '다른 행정단위를 선택해보세요.'}
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
            onClick={() => handleDistrictChange(getPreviousDistrictId())}
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
            ← {DISTRICT_TYPES.find(d => d.id === getPreviousDistrictId())?.name}
          </button>
          
          <button
            onClick={() => handleDistrictChange(getNextDistrictId())}
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
            {DISTRICT_TYPES.find(d => d.id === getNextDistrictId())?.name} →
          </button>
        </div>
      </div>
    </DataStateWrapper>
  );
} 