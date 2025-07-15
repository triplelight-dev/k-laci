'use client';

import { useSelectedProvincesRanks } from '@/api/hooks/useRankingData';
import { DataStateWrapper, SectionHeader } from '@/components/common';
import RankingTable from '@/components/ui/RankingTable';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';

export default function SixProvincesTop50PageClient() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  const { data, isLoading, error } = useSelectedProvincesRanks({
    limit: 50,
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

  // 검색어에 따른 필터링된 데이터
  const filteredData = useMemo(() => {
    if (!data?.data) return [];
    
    if (!debouncedSearchTerm.trim()) {
      return data.data;
    }

    const searchLower = debouncedSearchTerm.toLowerCase();
    return data.data.filter((item) => {
      const fullName = `${item.region.province.name} ${item.region.name}`.toLowerCase();
      return fullName.includes(searchLower);
    });
  }, [data?.data, debouncedSearchTerm]);

  // 지역 클릭 핸들러
  const handleRegionClick = useCallback(
    (regionId: number) => {
      router.push(`/results/region/${regionId}`);
    },
    [router],
  );

  console.log('### SixProvinces DEBUG ###', { data, isLoading, error });

  return (
    <DataStateWrapper isLoading={isLoading} error={error} isBlackTheme={false}>
      <div style={{ width: '1400px', margin: '0 auto' }}>
        <SectionHeader
          title="6대 도 TOP 50"
          subtitle="경기 · 경남 · 경북 · 전남 · 충남 · 충북 내 119개 지자체 중 상위 50곳"
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          searchPlaceholder="지역 검색"
        />
        
        <div style={{ marginBottom: '40px' }}>
          {filteredData.length > 0 ? (
            <RankingTable 
              data={filteredData} 
              onRegionClick={handleRegionClick}
            />
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '60px 0',
              color: '#6b7280'
            }}>
              <p style={{ fontSize: '18px', marginBottom: '8px' }}>
                검색 결과가 없습니다.
              </p>
              <p style={{ fontSize: '14px' }}>
                다른 검색어를 시도해보세요.
              </p>
            </div>
          )}
        </div>
      </div>
    </DataStateWrapper>
  );
} 