'use client';

import { TotalRegionRank } from '@/api/types/stats.types';
import SearchInput from '@/components/atoms/SearchInput';
import RankingTable from '@/components/ui/RankingTable';
import { useRouter } from 'next/navigation';
import React, { useCallback, useMemo, useState } from 'react';

// 타이틀과 검색창을 별도 컴포넌트로 분리
const SectionHeader: React.FC<{
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filteredCount: number;
  totalCount: number;
}> = ({ searchTerm, onSearchChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '0 40px',
        marginBottom: '30px',
      }}
    >
      {/* 좌상단: 제목과 안내 문구 */}
      <div>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#1a1a1a',
            margin: 0,
            marginBottom: '8px',
          }}
        >
          종합순위 TOP 100
        </h2>
      </div>

      {/* 우측: 검색창 */}
      <SearchInput
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="지역 검색"
      />
    </div>
  );
};

// 메인 컴포넌트
const TotalRankingSection: React.FC<{ data: TotalRegionRank[] }> = ({
  data,
}) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // 지역 클릭 핸들러
  const handleRegionClick = useCallback(
    (regionId: number) => {
      router.push(`/results/region/${regionId}`);
    },
    [router],
  );

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

  // 검색어에 따른 필터링된 데이터
  const filteredData = useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return data;
    }

    const searchLower = debouncedSearchTerm.toLowerCase();
    return data.filter((item) => {
      const fullName =
        `${item.region.province.name} ${item.region.name}`.toLowerCase();
      return fullName.includes(searchLower);
    });
  }, [data, debouncedSearchTerm]);

  return (
    <div
      style={{
        width: '100%',
        padding: '40px 0',
      }}
    >
      <SectionHeader
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        filteredCount={filteredData.length}
        totalCount={data.length}
      />
      <RankingTable data={filteredData} onRegionClick={handleRegionClick} />
    </div>
  );
};

export default TotalRankingSection;
