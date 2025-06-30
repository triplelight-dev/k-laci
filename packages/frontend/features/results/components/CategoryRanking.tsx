'use client';

import IndexModal from '@/components/atoms/modal/IndexModal';
import { NUM_OF_REGIONS } from '@/constants/data';
import { IndexData } from '@/features/results/sections/StrenthWeaknessIndexSection';
import { useDistrict } from '@/store';
import { CategoryData, CategoryRank } from '@/types/category';
import React, { useEffect, useState } from 'react';
import CategoryRankGrid from './CategoryScoreGrid';

interface CategoryRankingProps {
  index: number;
  categoryData: CategoryData;
}

const CategoryRanking: React.FC<CategoryRankingProps> = ({
  index,
  categoryData,
}) => {
  const { title, color, currentRank, description, rank } = categoryData;
  const [selectedIndexData, setSelectedIndexData] = useState<IndexData | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Zustand store에서 선택된 지역 정보 가져오기
  const { selectedRegion } = useDistrict();

  // Hydration 에러 방지를 위한 클라이언트 사이드 렌더링
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleRankClick = (rank: CategoryRank) => {
    if (!selectedRegion) return;

    // CategoryRank에 이미 description이 포함되어 있으므로 직접 사용
    const indexDescription = rank.description || '설명이 없습니다.';

    // IndexData 형태로 변환
    const indexData: IndexData = {
      fullRegionName: `${selectedRegion.province.name} ${selectedRegion.name}`,
      category: title,
      indexId: rank.key_index_id,
      indexName: rank.name,
      indexRank: rank.rank,
      indexDescription,
    };

    setSelectedIndexData(indexData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndexData(null);
  };

  const isFirstIndex = index === 0;

  // 상위 퍼센트 계산
  const topPercentage = ((currentRank / NUM_OF_REGIONS) * 100).toFixed(1);

  // 클라이언트 사이드에서만 렌더링
  if (!isClient) {
    return (
      <div
        className="flex w-full flex-col rounded-lg bg-white shadow-sm"
        style={{ marginBottom: '5rem', gap: '50px' }}
      >
        <div className="flex p-6">
          <div
            className="flex flex-col"
            style={{ width: '25%', paddingRight: '2rem' }}
          >
            <div
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: 'black',
                marginBottom: '8px',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '40px',
                fontWeight: 600,
                color: color,
                marginBottom: '0.5rem',
              }}
            >
              {currentRank}위
            </div>
            <div
              style={{
                fontSize: '0.9rem',
                color: 'black',
              }}
            >
              상위 {topPercentage}%
            </div>
          </div>
          <div style={{ width: '75%' }}>
            <div
              style={{
                color: 'black',
                lineHeight: '1.5',
                fontSize: '0.95rem',
              }}
            >
              {description}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex w-full flex-col rounded-lg bg-white shadow-sm"
      style={{ marginBottom: '5rem', gap: '50px' }}
    >
      {/* 상단 보더탑 */}
      {!isFirstIndex && (
        <div
          style={{
            height: '1px',
            backgroundColor: '#D0D9E6',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
        />
      )}

      {/* 메인 콘텐츠 */}
      <div className="flex p-6" style={{ gap: '2rem' }}>
        {/* 좌측 박스 (1:3 비율에서 1) */}
        <div
          className="flex flex-col"
          style={{
            flex: 1,
            paddingRight: '2rem',
          }}
        >
          {/* 타이틀 */}
          <div
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: 'black',
              marginBottom: '8px',
            }}
          >
            {title}
          </div>

          {/* 키컬러로 N위 */}
          <div
            style={{
              fontSize: '35px',
              fontWeight: 600,
              color: color,
              marginBottom: '0.5rem',
            }}
          >
            {currentRank}위
          </div>

          {/* 상위 N% */}
          <div
            style={{
              fontSize: '0.9rem',
              color: 'black',
            }}
          >
            상위 {topPercentage}%
          </div>
        </div>

        {/* 우측 박스 (1:4 비율에서 4) */}
        <div style={{ flex: 4 }}>
          <div
            style={{
              color: 'black',
              lineHeight: '1.5',
              fontSize: '0.95rem',
            }}
          >
            {description}
          </div>
        </div>
      </div>

      {/* 세부 점수 그리드 */}
      <div className="px-6 pb-6">
        <CategoryRankGrid
          rank={rank}
          color={color}
          onScoreClick={handleRankClick}
        />
      </div>

      {/* IndexModal 사용 */}
      {selectedIndexData && (
        <IndexModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          data={selectedIndexData}
        />
      )}
    </div>
  );
};

export default CategoryRanking;
