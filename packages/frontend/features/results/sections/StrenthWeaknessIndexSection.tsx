'use client';

import IndexModal from '@/components/atoms/modal/IndexModal';
import { useDistrict } from '@/store';
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

// 지수 데이터 타입
export interface IndexData {
  fullRegionName: string;
  category: string;
  indexId: number;
  indexName: string;
  indexRank: number;
  indexDescription: string;
}

// 기본 데이터 (서버와 클라이언트에서 동일하게 사용)
const defaultStrengthData: IndexData[] = [];

const defaultWeaknessData: IndexData[] = [];

// 지수 컴포넌트
const IndexItem: React.FC<{
  data: IndexData;
  onClick: (data: IndexData) => void;
}> = ({ data, onClick }) => {
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
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        paddingTop: '12px',
        paddingBottom: '12px',
      }}
      onClick={() => onClick(data)}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `white`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#F1F1F1';
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
}> = ({ title, data, onItemClick }) => {
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
          <IndexItem key={index} data={item} onClick={onItemClick} />
        ))}
      </div>
    </div>
  );
};

const StrengthWeaknessIndexSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<IndexData | null>(null);
  const [strengthData, setStrengthData] =
    useState<IndexData[]>(defaultStrengthData);
  const [weaknessData, setWeaknessData] =
    useState<IndexData[]>(defaultWeaknessData);

  // Zustand store에서 선택된 지역 정보 가져오기
  const { selectedRegion } = useDistrict();

  const handleItemClick = (data: IndexData) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  // selectedRegion의 key_index_ranks를 바탕으로 동적으로 데이터 생성
  useEffect(() => {
    if (
      !selectedRegion?.key_index_ranks?.top ||
      !selectedRegion?.key_index_ranks?.bottom
    ) {
      setStrengthData(defaultStrengthData);
      setWeaknessData(defaultWeaknessData);
      return;
    }

    const fullRegionName = `${selectedRegion.province.name} ${selectedRegion.name} `;

    // top 배열을 strengthData로 변환
    setStrengthData(
      selectedRegion.key_index_ranks.top.map((item) => ({
        fullRegionName,
        category: item.key_index.category || '',
        indexId: item.key_index.id || 0,
        indexName: item.key_index.name || '',
        indexRank: item.rank || 0,
        indexDescription: item.key_index.description || '',
      })),
    );

    // bottom 배열을 weaknessData로 변환
    setWeaknessData(
      selectedRegion.key_index_ranks.bottom.map((item) => ({
        fullRegionName,
        category: item.key_index.category || '',
        indexId: item.key_index.id || 0,
        indexName: item.key_index.name || '',
        indexRank: item.rank || 0,
        indexDescription: item.key_index.description || '',
      })),
    );
  }, [selectedRegion]);

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
        />

        {/* 약점지표 */}
        <IndexSection
          title="약점지표"
          data={weaknessData}
          isStrength={true}
          onItemClick={handleItemClick}
        />
      </div>

      {/* 모달 */}
      {selectedData && (
        <IndexModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          data={selectedData}
        />
      )}
    </>
  );
};

export default StrengthWeaknessIndexSection;
