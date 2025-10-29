'use client';

import {
  useKeyIndexData,
  useRegionKeyIndexScore,
  useRegionStrengthIndexes,
} from '@/api/hooks';
import IndexModal from '@/components/atoms/modal/IndexModal';
import { useIsMobile } from '@/hooks';
import { useDistrict, useIsLoggedIn } from '@/store';
import { Flex, Text } from '@chakra-ui/react';
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
  yearlyAvgScore?: number | undefined; // undefined 명시적으로 허용
  year?: number | undefined; // undefined 명시적으로 허용
  source?: string | undefined; // undefined 명시적으로 허용
  unit?: string;
  calculation_method?: string;
}

// 지수 컴포넌트
const IndexItem: React.FC<{
  indexRank: number;
  data: IndexData;
  onClick: (data: IndexData) => void;
  isDisabled?: boolean;
}> = ({ indexRank, data, onClick, isDisabled = false }) => {
  const categoryColor = colorMap[data.category] || '#874FFF';

  return (
    <Flex>
      <div style={{
        margin: '15px 19px',
        width: '40px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div
          style={{
            color: indexRank === 1 || indexRank === 55 ? '#000' : '#9A9EA3',
            fontSize: '14px',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            transform: 'translateY(-4px)', // 텍스트를 위로 4px 이동
          }}
        >
          {indexRank}위
          {indexRank === 1 && (
            <Text color="#000" fontSize="14px" fontWeight="500">
              (강점)
            </Text>
          )}
          {indexRank === 55 && (
            <Text color="#000" fontSize="14px" fontWeight="500">
              (약점)
            </Text>
          )}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '284px',
          gap: '12px',
          padding: '8px 12px',
          backgroundColor: '#F5F5F5',
          border: '1px solid #E7E8EA',
          borderRadius: '12px',
          marginBottom: '14px',
          cursor: isDisabled ? 'default' : 'pointer',
          transition: 'all 0.2s ease',
          paddingTop: '12px',
          paddingBottom: '12px',
          minHeight: '48px', // 고정 높이 추가
        }}
        onClick={() => !isDisabled && onClick(data)}
        onMouseEnter={(e) => {
          if (!isDisabled) {
            e.currentTarget.style.background = `white`;
            e.currentTarget.style.border = `1px solid #000`;
          }
        }}
        onMouseLeave={(e) => {
          if (!isDisabled) {
            e.currentTarget.style.background = '#F5F5F5';
            e.currentTarget.style.border = `1px solid #E7E8EA`;
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
            fontSize: '18px',
            fontWeight: '400',
          }}
        >
          {data.indexName}
        </span>
      </div>
    </Flex>
  );
};

// 지표 섹션 컴포넌트
const IndexSection: React.FC<{
  indexType: 'strength' | 'weakness';
  data: IndexData[];
  isStrength?: boolean;
  onItemClick: (data: IndexData) => void;
  isDisabled?: boolean;
}> = ({ indexType, data, onItemClick, isDisabled = false }) => {
  const indexRankOffset = indexType === 'strength' ? 1 : 55;

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        color: '#000000',
      }}
    >
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
            indexRank={
              indexType === 'strength'
                ? index + indexRankOffset
                : indexRankOffset - index
            }
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
    ...(item.key_index.yearly_avg_score !== undefined && {
      yearlyAvgScore: item.key_index.yearly_avg_score,
    }),
    ...(item.key_index.year !== undefined && { year: item.key_index.year }),
    ...(item.key_index.source !== undefined && {
      source: item.key_index.source,
    }),
    ...(item.key_index.unit !== undefined && { unit: item.key_index.unit }),
    ...(item.key_index.calculation_method !== undefined && {
      calculation_method: item.key_index.calculation_method,
    }),
  }));
};

const StrengthWeaknessIndexSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<IndexData | null>(null);
  const [strengthData, setStrengthData] = useState<IndexData[]>([]);
  const [weaknessData, setWeaknessData] = useState<IndexData[]>([]);

  const isMobile = useIsMobile();

  // Zustand store에서 선택된 지역 정보와 로그인 상태 가져오기
  const { selectedRegion } = useDistrict();
  const isLoggedIn = useIsLoggedIn();
  const { getKeyIndexData } = useKeyIndexData();
  const { getRegionKeyIndexScore } = useRegionKeyIndexScore();

  // 💡 상태 정의: 현재 활성화된 탭을 'tab1'로 초기 설정합니다.
  const [activeTab, setActiveTab] = useState('tab1');

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

    if (!selectedRegion) {
      return;
    }

    // 1. getRegionKeyIndexScore로 rank 정보를 포함한 데이터 받아오기
    let updatedData = { ...data };

    try {
      const regionKeyIndexScore = await getRegionKeyIndexScore(
        selectedRegion.id,
        data.indexId,
      );

      // rank 정보 업데이트 (더 정확한 region_key_index_ranks 테이블의 값 사용)
      if (regionKeyIndexScore.rank !== undefined) {
        updatedData.indexRank = regionKeyIndexScore.rank;
      }

      // score 정보 업데이트
      if (regionKeyIndexScore.region_key_index_score?.score !== undefined) {
        updatedData.indexScore =
          regionKeyIndexScore.region_key_index_score.score;
      }

      // key_index 정보 업데이트
      if (regionKeyIndexScore.key_index) {
        if (regionKeyIndexScore.key_index.description) {
          updatedData.indexDescription =
            regionKeyIndexScore.key_index.description;
        }
        if (regionKeyIndexScore.key_index.source) {
          updatedData.source = regionKeyIndexScore.key_index.source;
        }
        if (regionKeyIndexScore.key_index.yearly_avg_score !== undefined) {
          updatedData.yearlyAvgScore =
            regionKeyIndexScore.key_index.yearly_avg_score;
        }
        if (regionKeyIndexScore.key_index.year) {
          updatedData.year = regionKeyIndexScore.key_index.year;
        }
        if (regionKeyIndexScore.key_index.unit) {
          updatedData.unit = regionKeyIndexScore.key_index.unit;
        }
        if (regionKeyIndexScore.key_index.calculation_method) {
          updatedData.calculation_method =
            regionKeyIndexScore.key_index.calculation_method;
        }
      }
    } catch (error) {
      console.error('Error fetching region key index score:', error);

      // 에러 발생 시 fallback으로 기존 getKeyIndexData 사용
      try {
        const keyIndexDetail = await getKeyIndexData(data.indexId);

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
      } catch (fallbackError) {
        console.error('Fallback getKeyIndexData also failed:', fallbackError);
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

  // 💡 활성 탭에 따라 스타일을 결정하는 유틸리티 함수
  const getTabClasses = (activeTab: string, tabName: string) => {
    const baseClasses = "px-6 py-2.5 font-semibold text-base transition-colors duration-200 focus:outline-none";

    if (tabName === activeTab) {
      // 💡 활성 탭 스타일
      return `${baseClasses} text-blue-600 border-b-2 border-blue-600`;
    } else {
      // 💡 비활성 탭 스타일 (hover 효과 및 높이 유지를 위한 투명 밑줄)
      return `${baseClasses} text-gray-500 border-b-2 border-transparent hover:text-gray-700`;
    }
  };

  return (
    <>
      {!isMobile &&
        <>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            {/* 강점지표 */}
            <IndexSection
              indexType="strength"
              data={isLoggedIn ? strengthData : strengthData.slice(0, 5)}
              isStrength={true}
              onItemClick={handleItemClick}
              isDisabled={!isLoggedIn}
            />

            {/* 약점지표 */}
            <IndexSection
              indexType="weakness"
              data={isLoggedIn ? weaknessData : weaknessData.slice(0, 5)}
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
      }

      {isMobile &&
        <>
          <div className="w-full max-w-4xl mx-auto p-4">
            {/* 1. 탭 버튼 영역 */}
            <div className="flex flex-row border-b border-gray-300 gap-5">

              {/* 탭 1 버튼 */}
              <button
                className={getTabClasses(activeTab, 'tab1')}
                onClick={() => setActiveTab('tab1')}
                style={{
                  width: '100%',
                  padding: '12px 24px', // px-6 py-3
                  fontWeight: '600',   // font-semibold
                  borderRadius: '8px', // rounded-lg
                  boxShadow: '0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.07)', // shadow-md
                  backgroundColor: 'grey', // bg-blue-500/600
                  color: 'white',        // text-white
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'background-color 0.15s ease-in-out',
                }}
              >
                강점
              </button>

              {/* 탭 2 버튼 */}
              <button
                className={getTabClasses(activeTab, 'tab2')}
                onClick={() => setActiveTab('tab2')}
                style={{
                  width: '100%',
                  padding: '12px 24px', // px-6 py-3
                  fontWeight: '600',   // font-semibold
                  borderRadius: '8px', // rounded-lg
                  boxShadow: '0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.07)', // shadow-md
                  backgroundColor: 'grey', // bg-blue-500/600
                  color: 'white',        // text-white
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'background-color 0.15s ease-in-out',
                }}
              >
                약점
              </button>
            </div>
            <br></br>

            {/* 2. 탭 내용 영역 */}
            <div className="pt-8 p-4 bg-white rounded-b-lg">
              {activeTab === 'tab1' && (
                <>
                  {/* 강점지표 */}
                  < IndexSection
                    indexType="strength"
                    data={isLoggedIn ? strengthData : strengthData.slice(0, 5)}
                    isStrength={true}
                    onItemClick={handleItemClick}
                    isDisabled={!isLoggedIn}

                  />
                </>
              )}

              {activeTab === 'tab2' && (
                <>
                  {/* 약점지표 */}
                  <IndexSection
                    indexType="weakness"
                    data={isLoggedIn ? weaknessData : weaknessData.slice(0, 5)}
                    isStrength={false}
                    onItemClick={handleItemClick}
                    isDisabled={!isLoggedIn}
                  />
                </>
              )}
            </div>
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
      }
    </>
  );
};

export default StrengthWeaknessIndexSection;
