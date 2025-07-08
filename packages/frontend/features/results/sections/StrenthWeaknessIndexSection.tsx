'use client';

import { useKeyIndexData, useRegionStrengthIndexes } from '@/api/hooks';
import IndexModal from '@/components/atoms/modal/IndexModal';
import { useDistrict, useIsLoggedIn } from '@/store';
import React, { useEffect, useState } from 'react';

// 색상 맵 정의
export const colorMap: Record<string, string> = {
  인구성장력: '#FF3737',
  경제활동력: '#FFA600',
  생활기반력: '#874FFF',
  안전회복력: '#24CB71',
};

// HEX 색상을 RGBA로 변환하는 함수
const hexToRgba = (hex: string, alpha: number = 0.2): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// API 응답 타입 정의
interface KeyIndexData {
  id: number;
  code: string;
  name: string;
  category: string;
  description: string;
  unit?: string;
  source?: string;
  calculation_method?: string;
  created_at?: string;
  updated_at?: string;
  yearly_avg_score?: number;
  year?: number;
}

interface RegionStrengthIndexWithDetails {
  id: number;
  region_id: number;
  type: 'strength' | 'weakness';
  rank: number;
  code: string;
  key_index: KeyIndexData;
}

// 지수 데이터 타입
export interface IndexData {
  fullRegionName: string;
  category: string;
  indexId: number;
  indexName: string;
  indexRank: number;
  indexScore: number;
  indexDescription: string;
  yearlyAvgScore?: number;
  year?: number;
  source?: string;
  unit?: string;
  calculation_method?: string;
}

// 지수 컴포넌트
const IndexItem: React.FC<{
  data: IndexData;
  onClick: (data: IndexData) => void;
  isDisabled?: boolean;
}> = ({ data, onClick, isDisabled = false }) => {
  const categoryColor = colorMap[data.category] || '#874FFF';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '8px 12px',
        backgroundColor: '#F1F1F1',
        borderRadius: '12px',
        marginBottom: '8px',
        cursor: isDisabled ? 'default' : 'pointer',
        transition: 'all 0.2s ease',
        paddingTop: '12px',
        paddingBottom: '12px',
      }}
      onClick={() => !isDisabled && onClick(data)}
      onMouseEnter={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.background = `white`;
        }
      }}
      onMouseLeave={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.background = '#F1F1F1';
        }
      }}
    >
      {/* 뱃지 */}
      <div
        style={{
          padding: '4px 8px',
          backgroundColor: hexToRgba(categoryColor, 0.2),
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '500',
          color: categoryColor,
          whiteSpace: 'nowrap',
        }}
      >
        {data.category}
      </div>

      {/* 값 */}
      <span
        style={{
          color: '#000000',
          fontSize: '16px',
          fontWeight: '400',
        }}
      >
        {data.indexName}
      </span>
    </div>
  );
};

// 지표 섹션 컴포넌트
const IndexSection: React.FC<{
  title: string;
  data: IndexData[];
  isStrength?: boolean;
  onItemClick: (data: IndexData) => void;
  isDisabled?: boolean;
}> = ({ title, data, onItemClick, isDisabled = false }) => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        color: '#000000',
      }}
    >
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        {/* 타이틀 */}
        <div
          style={{
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '4px',
          }}
        >
          {title}
        </div>

        {/* 순위 표시 */}
        <div
          style={{
            fontSize: '14px',
            fontWeight: '400',
            marginBottom: '16px',
          }}
        >
          1~10위 순
        </div>
      </div>

      {/* 지수 목록 */}
      <div
        style={{
          display: 'flex',
          flex: 2,
          flexDirection: 'column',
          gap: '3px',
        }}
      >
        {data.map((item, index) => (
          <IndexItem
            key={index}
            data={item}
            onClick={onItemClick}
            isDisabled={isDisabled}
          />
        ))}
      </div>
    </div>
  );
};

// API 응답을 IndexData로 변환하는 함수
const convertApiResponseToIndexData = (
  apiData: RegionStrengthIndexWithDetails[] | undefined,
  regionName: string,
): IndexData[] => {
  // apiData가 undefined이거나 배열이 아닌 경우 빈 배열 반환
  if (!apiData || !Array.isArray(apiData)) {
    return [];
  }

  return apiData.map((item) => ({
    fullRegionName: regionName,
    category: item.key_index.category || '',
    indexId: item.key_index.id || 0,
    indexName: item.key_index.name || '',
    indexRank: item.rank || 0,
    indexScore: 0, // 새로운 API에서는 score 정보가 없으므로 0으로 설정
    indexDescription: item.key_index.description || '',
    ...(item.key_index.yearly_avg_score !== undefined && { yearlyAvgScore: item.key_index.yearly_avg_score }),
    ...(item.key_index.year !== undefined && { year: item.key_index.year }),
    ...(item.key_index.source !== undefined && { source: item.key_index.source }),
    ...(item.key_index.unit !== undefined && { unit: item.key_index.unit }),
    ...(item.key_index.calculation_method !== undefined && { calculation_method: item.key_index.calculation_method }),
  }));
};

const StrengthWeaknessIndexSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<IndexData | null>(null);
  const [strengthData, setStrengthData] = useState<IndexData[]>([]);
  const [weaknessData, setWeaknessData] = useState<IndexData[]>([]);

  // Zustand store에서 선택된 지역 정보와 로그인 상태 가져오기
  const { selectedRegion } = useDistrict();
  const isLoggedIn = useIsLoggedIn();
  const { getKeyIndexData } = useKeyIndexData();

  // 새로운 API hook 사용
  const {
    data: strengthIndexesData,
    isLoading,
    error,
  } = useRegionStrengthIndexes(selectedRegion?.id || null);

  const handleItemClick = async (data: IndexData) => {
    // 로그인하지 않은 경우 모달을 열지 않음
    if (!isLoggedIn) {
      return;
    }

    // API에서 상세 정보 받아오기
    let keyIndexDetail: {
      description?: string;
      name?: string;
      source?: string;
      yearly_avg_score?: number;
      year?: number;
    } = {};

    try {
      keyIndexDetail = await getKeyIndexData(data.indexId);
    } catch (e) {
      // 에러 시 기본값 유지
    }

    // API 응답에서 받은 데이터로 업데이트
    let updatedData = { ...data };

    if (keyIndexDetail) {
      if (keyIndexDetail.description) {
        updatedData.indexDescription = keyIndexDetail.description;
      }
      if (keyIndexDetail.source) {
        updatedData.source = keyIndexDetail.source;
      }
      if (keyIndexDetail.yearly_avg_score !== undefined) {
        updatedData.yearlyAvgScore = keyIndexDetail.yearly_avg_score;
      }
      if (keyIndexDetail.year) {
        updatedData.year = keyIndexDetail.year;
      }
    }

    setSelectedData(updatedData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  // API 데이터를 바탕으로 IndexData 생성
  useEffect(() => {
    if (!strengthIndexesData || !selectedRegion) {
      setStrengthData([]);
      setWeaknessData([]);
      return;
    }

    const regionName = `${selectedRegion.province.name} ${selectedRegion.name}`;

    // 강점 데이터 변환 (직접 접근)
    const strengthIndexData = convertApiResponseToIndexData(
      strengthIndexesData.strengths,
      regionName,
    );
    setStrengthData(strengthIndexData);

    // 약점 데이터 변환 (직접 접근)
    const weaknessIndexData = convertApiResponseToIndexData(
      strengthIndexesData.weaknesses,
      regionName,
    );
    setWeaknessData(weaknessIndexData);
  }, [strengthIndexesData, selectedRegion]);

  // 로딩 상태 처리
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        강약점 지표를 불러오는 중...
      </div>
    );
  }

  // 에러 상태 처리
  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
        강약점 지표를 불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '50px',
          width: '100%',
        }}
      >
        {/* 강점지표 */}
        <IndexSection
          title="강점지표"
          data={strengthData}
          isStrength={true}
          onItemClick={handleItemClick}
          isDisabled={!isLoggedIn}
        />

        {/* 약점지표 */}
        <IndexSection
          title="약점지표"
          data={weaknessData}
          isStrength={false}
          onItemClick={handleItemClick}
          isDisabled={!isLoggedIn}
        />
      </div>

      {/* 모달 - 로그인한 경우에만 렌더링 */}
      {isLoggedIn && selectedData && (
        <IndexModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          data={selectedData}
          regionId={selectedRegion?.id || 0}
        />
      )}
    </>
  );
};

export default StrengthWeaknessIndexSection;
