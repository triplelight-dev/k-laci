'use client';

import { useProvinceRanks } from '@/api/hooks/useRankingData';
import SearchInput from '@/components/atoms/SearchInput';
import { DataStateWrapper, SectionHeader } from '@/components/common';
import provinceData from '@/data/province_data.json';
import ProvinceRankingSection from '@/features/summary/sections/ProvinceRankingSection';
import { useCallback, useMemo, useState } from 'react';

// Province 타입 정의
interface Province {
  id: number;
  name: string;
  name_eng: string;
  full_name: string;
}

// 17개 도/광역시 데이터
const PROVINCES: Province[] = provinceData as Province[];

export default function ProvinceRankPageClient() {
  const currentYear = new Date().getFullYear();
  // 기본값을 서울특별시(id: 9)로 설정
  const [selectedProvinceId, setSelectedProvinceId] = useState<number>(9);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // 전체 데이터를 한 번에 받아옴
  const { data, isLoading, error } = useProvinceRanks({
    limit: 1000, // 모든 데이터를 가져옴
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
    }, 300), // 300ms 딜레이
    [debounce],
  );

  // 검색어 변경 핸들러
  const handleSearchChange = (value: string) => {
    setSearchTerm(value); // 즉시 UI 업데이트
    debouncedSearch(value); // 디바운스된 필터링
  };

  // 클라이언트 사이드에서 selectedProvinceId에 따라 필터링
  const filteredData = useMemo(() => {
    if (!data?.data || !Array.isArray(data.data)) return [];
    
    console.log('=== FILTERING DEBUG ===', {
      totalItems: data.data.length,
      selectedProvinceId,
      firstItem: data.data[0],
      hasRegion: !!data.data[0]?.region,
      regionName: data.data[0]?.region?.name,
      provinceName: data.data[0]?.region?.province?.name,
      provinceId: data.data[0]?.region?.province?.id,
    });
    
    // 1. 선택된 province로 필터링
    let provinceFiltered = data.data.filter(item => {
      if (!item || !item.region || !item.region.province) {
        console.log('Skipping item with missing region/province:', item);
        return false;
      }
      
      // region.province.id로 필터링
      const matches = Number(item.region.province.id) === Number(selectedProvinceId);
      if (matches) {
        console.log('Found match:', { 
          regionName: item.region.name, 
          provinceName: item.region.province.name,
          provinceId: item.region.province.id,
          selectedProvinceId 
        });
      }
      
      return matches;
    });
    
    console.log('After province filtering:', provinceFiltered.length);
    
    // 2. 검색어가 있으면 지자체명으로 필터링
    if (debouncedSearchTerm.trim()) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      
      provinceFiltered = provinceFiltered.filter((item) => {
        if (!item?.region?.name) return false;
        
        // 지자체명으로 like 검색
        const regionName = item.region.name.toLowerCase();
        const provinceName = item.region.province?.name?.toLowerCase() || '';
        
        // 지자체명 또는 "도/시 + 지자체명" 형태로 검색
        const fullName = `${provinceName} ${regionName}`.toLowerCase();
        
        const matches = regionName.includes(searchLower) || 
                       provinceName.includes(searchLower) ||
                       fullName.includes(searchLower);
        
        if (matches) {
          console.log('Search match:', { 
            searchTerm: debouncedSearchTerm,
            regionName: item.region.name,
            provinceName: item.region.province?.name,
            fullName: `${item.region.province?.name} ${item.region.name}`
          });
        }
        
        return matches;
      });
    }
    
    console.log('Final filtered data:', provinceFiltered.length);
    return provinceFiltered;
  }, [data?.data, selectedProvinceId, debouncedSearchTerm]);

  // 현재 선택된 도 정보 가져오기
  const currentProvince = PROVINCES.find(p => p.id === selectedProvinceId);

  // 이전/다음 도 계산
  const getPreviousProvinceId = (): number => {
    const currentIndex = PROVINCES.findIndex(p => p.id === selectedProvinceId);
    const previousIndex = currentIndex === 0 ? PROVINCES.length - 1 : currentIndex - 1;
    return PROVINCES[previousIndex]!.id;
  };

  const getNextProvinceId = (): number => {
    const currentIndex = PROVINCES.findIndex(p => p.id === selectedProvinceId);
    const nextIndex = currentIndex === PROVINCES.length - 1 ? 0 : currentIndex + 1;
    return PROVINCES[nextIndex]!.id;
  };

  // 도 변경 및 스크롤 상단 이동
  const handleProvinceChange = (newProvinceId: number) => {
    setSelectedProvinceId(newProvinceId);
    setSearchTerm(''); // 도 변경 시 검색어 초기화
    setDebouncedSearchTerm(''); // 디바운스 검색어도 초기화
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 클라이언트 사이드에서 selectedProvinceId에 따라 필터링 + 검색어 필터링
  console.log('### ProvinceRank DEBUG ###', { 
    allData: data?.data, 
    filteredData, 
    isLoading, 
    error, 
    selectedProvinceId,
    searchTerm,
    debouncedSearchTerm,
    currentProvince,
    // 실제 데이터 구조 확인
    firstDataItem: data?.data?.[0],
    firstDataItemRegion: data?.data?.[0]?.region,
    firstDataItemProvinceId: data?.data?.[0]?.region?.province_id,
    firstDataItemProvinceJoin: data?.data?.[0]?.region?.province,
    // 비교 정보
    selectedProvinceIdType: typeof selectedProvinceId,
    firstProvinceIdDirectType: typeof data?.data?.[0]?.region?.province_id,
    firstProvinceIdJoinType: typeof data?.data?.[0]?.region?.province?.id,
  });

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
            광역시·도별 순위
          </h2>

          {/* 우측: 검색창 */}
          <SearchInput
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="지역 검색"
          />
        </div>

        {/* 도/광역시 선택 버튼들 */}
        <div style={{ padding: '0 40px' }}>
          {/* 첫 번째 줄: 12개 버튼 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '16px',
            marginBottom: '16px',
            width: '100%',
          }}>
            {PROVINCES.slice(0, 12).map((province) => (
              <button
                key={province.id}
                onClick={() => handleProvinceChange(province.id)}
                style={{
                  padding: '14px 20px',
                  backgroundColor: selectedProvinceId === province.id ? '#ffffff' : '#F1F1F1',
                  color: '#000000',
                  border: selectedProvinceId === province.id ? '1px solid #000000' : 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: selectedProvinceId === province.id ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {province.name}
              </button>
            ))}
          </div>
          
          {/* 두 번째 줄: 5개 버튼 (좌측부터 채움) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)', // 12개 컬럼으로 설정하되 5개만 사용
            gap: '16px',
            marginBottom: '40px',
            width: '100%',
          }}>
            {PROVINCES.slice(12, 17).map((province) => (
              <button
                key={province.id}
                onClick={() => handleProvinceChange(province.id)}
                style={{
                  padding: '14px 20px',
                  backgroundColor: selectedProvinceId === province.id ? '#ffffff' : '#F1F1F1',
                  color: '#000000',
                  border: selectedProvinceId === province.id ? '1px solid #000000' : 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: selectedProvinceId === province.id ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {province.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* 테이블 상단 타이틀 */}
        <SectionHeader
          title={currentProvince?.full_name || ''}
          subtitle=""
          searchTerm=""
          onSearchChange={() => {}}
          showSearch={false}
          hasTopMargin={false}
        />
        
        {/* 랭킹 테이블 */}
        <ProvinceRankingSection 
          data={filteredData} 
          selectedProvinceId={selectedProvinceId}
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
            onClick={() => handleProvinceChange(getPreviousProvinceId())}
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
            ← {PROVINCES.find(p => p.id === getPreviousProvinceId())?.name}
          </button>
          
          {/* 우측 버튼 (다음) */}
          <button
            onClick={() => handleProvinceChange(getNextProvinceId())}
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
            {PROVINCES.find(p => p.id === getNextProvinceId())?.name} →
          </button>
        </div>
      </div>
    </DataStateWrapper>
  );
} 