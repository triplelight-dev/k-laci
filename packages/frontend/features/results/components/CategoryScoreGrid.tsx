'use client';

import { useKeyIndexDataQuery } from '@/api/hooks/useKeyIndexData';
import { useRegionKeyIndexScoreQuery } from '@/api/hooks/useRegionKeyIndexScore';
import IndexModal from '@/components/atoms/modal/IndexModal';
import { NUM_OF_REGIONS } from '@/constants/data';
import { IndexData } from '@/features/results/sections/StrenthWeaknessIndexSection';
import { useDistrict } from '@/store';
import { CategoryRank } from '@/types/category';
import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';

// 스켈레톤 애니메이션 스타일
const skeletonStyles = `
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

interface CategoryRankGridProps {
  rank: CategoryRank[];
  color: string;
  regionId: number;
  categoryTitle: string;
  mobile: boolean;
}

interface UpdatedRank extends CategoryRank {
  score: number;
  topPercentage: string;
  scoreGap: number;
  avgScore: number;
  regionId: number;
}

const CategoryRankGrid: React.FC<CategoryRankGridProps> = ({
  rank,
  color,
  regionId,
  categoryTitle,
  mobile
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndexData, setSelectedIndexData] = useState<IndexData | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKeyIndexId, setSelectedKeyIndexId] = useState<number | null>(
    null,
  );

  const { selectedRegion } = useDistrict();

  // 모든 key_index_id에 대해 병렬로 데이터를 가져오는 쿼리들
  const keyIndexQueries = useMemo(() => {
    if (!rank || rank.length === 0) return [];

    return rank.map((item) => ({
      regionId: regionId,
      keyIndexId: item.key_index_id,
      enabled: !!regionId && !!item.key_index_id,
    }));
  }, [rank, regionId]);

  // 모든 쿼리 결과를 병렬로 가져오기
  const regionKeyIndexQueries = keyIndexQueries.map(
    ({ regionId, keyIndexId, enabled }) =>
      useRegionKeyIndexScoreQuery(regionId, keyIndexId, enabled),
  );

  // 모달용 키 인덱스 데이터 (선택된 항목에 대해서만)
  const keyIndexDataQuery = useKeyIndexDataQuery(
    selectedKeyIndexId,
    undefined,
    !!selectedKeyIndexId,
  );

  // 업데이트된 랭크 데이터 계산
  const updatedAllRank = useMemo(() => {
    if (!rank || rank.length === 0) return [];

    return rank.map((item, index) => {
      const query = regionKeyIndexQueries[index];
      const data = query?.data;

      return {
        ...item,
        score: data?.region_key_index_score?.score || 0,
        topPercentage: ((item.rank / NUM_OF_REGIONS) * 100).toFixed(1),
        scoreGap: data ? data.region_key_index_score.score - data.avg_score : 0,
        avgScore: data?.avg_score || 0,
        regionId: regionId,
      };
    });
  }, [rank, regionKeyIndexQueries, regionId]);

  // 로딩 상태 계산
  const isLoading = useMemo(() => {
    return regionKeyIndexQueries.some((query) => query.isLoading);
  }, [regionKeyIndexQueries]);

  const handleRankClick = async (clickedRank: CategoryRank) => {
    if (!selectedRegion || mobile) return;

    // 키 인덱스 ID 설정하여 모달용 데이터 로드 시작
    setSelectedKeyIndexId(clickedRank.key_index_id);

    const indexDescription = clickedRank.description || '설명이 없습니다.';
    let indexData: IndexData = {
      fullRegionName: `${selectedRegion.province.name} ${selectedRegion.name}`,
      category: categoryTitle,
      indexId: clickedRank.key_index_id,
      indexName: clickedRank.name,
      indexRank: clickedRank.rank,
      indexDescription,
      indexScore: 0,
    };

    // 기존 쿼리된 데이터가 있다면 사용
    const existingQuery = regionKeyIndexQueries.find(
      (query, index) => rank[index]?.key_index_id === clickedRank.key_index_id,
    );

    if (existingQuery?.data) {
      indexData.indexScore = existingQuery.data.region_key_index_score.score;
    }

    setSelectedIndexData(indexData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndexData(null);
    setSelectedKeyIndexId(null); // 모달 닫을 때 키 인덱스 ID 초기화
  };

  // 스켈레톤 컴포넌트 (기존과 동일)
  const SkeletonCard = () => (

    <div
      style={{
        width: '250px',
        height: '230px',
        position: 'relative',
        borderRadius: '24px',
        border: '1px solid #E5E7EB',
        backgroundColor: '#F9FAFB',
        padding: '15px',
        minHeight: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          width: '16px',
          height: '16px',
          backgroundColor: '#E5E7EB',
          borderRadius: '2px',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div
          style={{
            width: '60%',
            height: '18px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
          }}
        />
        <div
          style={{
            width: '40%',
            height: '28px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
          }}
        />
        <div
          style={{
            width: '70%',
            height: '14px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
          }}
        />
      </div>
      <div style={{ marginTop: '33px' }}>
        <div
          style={{
            width: '50%',
            height: '16px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
            marginBottom: '2px',
          }}
        />
        <div
          style={{
            width: '80%',
            height: '14px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
          }}
        />
      </div>
    </div>
  );

  // 스켈레톤 컴포넌트 (기존과 동일)
  const SkeletonCardMobile = () => (

    <div
      style={{
        width: '100%',
        height: '230px',
        position: 'relative',
        borderRadius: '24px',
        border: '1px solid #E5E7EB',
        backgroundColor: '#F9FAFB',
        padding: '15px',
        minHeight: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          width: '16px',
          height: '16px',
          backgroundColor: '#E5E7EB',
          borderRadius: '2px',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div
          style={{
            width: '60%',
            height: '18px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
          }}
        />
        <div
          style={{
            width: '40%',
            height: '28px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
          }}
        />
        <div
          style={{
            width: '70%',
            height: '14px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
          }}
        />
      </div>
      <div style={{ marginTop: '33px' }}>
        <div
          style={{
            width: '50%',
            height: '16px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
            marginBottom: '2px',
          }}
        />
        <div
          style={{
            width: '80%',
            height: '14px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
          }}
        />
      </div>
    </div>
  );

  // rank가 undefined이거나 빈 배열인 경우 처리
  if (!rank || rank.length === 0) {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '16px',
          maxWidth: '100%',
        }}
      >
        <div
          style={{
            position: 'relative',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
            backgroundColor: '#F9FAFB',
            padding: '15px',
            minHeight: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#6B7280',
            fontSize: '14px',
          }}
        >
          데이터가 없습니다
        </div>
      </div>
    );
  }

  // 로딩 중일 때 스켈레톤 표시
  if (isLoading) {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '16px',
          maxWidth: '100%',
        }}
      >
        if( !mobile)
        {Array.from({ length: rank.length }).map((_, index) => (
          <SkeletonCard key={`skeleton-${index}`} />
        ))}
        else {
          Array.from({ length: rank.length }).map((_, index) => (
            <SkeletonCardMobile key={`skeleton-${index}`} />
          ))
        }
      </div>
    );
  }

  // 최고 순위(가장 낮은 rank 값) 찾기
  const highestRank = Math.min(...rank.map((score) => score.rank));

  return (
    <>
      <style>{skeletonStyles}</style>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: mobile ? '8px' : '16px',
          maxWidth: '100%',
        }}
      >
        {updatedAllRank.map((score, index) => {
          const isHighestRank = score.rank === highestRank;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={`${score.name}-${index}`}
              style={{
                position: 'relative',
                cursor: 'pointer',
                borderRadius: mobile ? '12px' : '24px',
                border: isHovered
                  ? '1px solid black'
                  : isHighestRank
                    ? '1px solid transparent'
                    : '1px solid #E7E8EA',
                backgroundColor: isHovered
                  ? 'white'
                  : isHighestRank
                    ? color
                    : '#FAFAFA',
                padding: mobile ? '10px 10px' : '15px 33px 38px',
                paddingBottom: mobile ? '' : '',
                transition: 'all 0.2s ease',
                minHeight: mobile ? '' : '60px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: mobile ? '100%' : '250px',
                height: mobile ? '' : '230px',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleRankClick(score)}
            >

              {!mobile &&
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                  }}
                >
                  <Image
                    src="/icons/info_icon.png"
                    alt="정보 아이콘"
                    width={16}
                    height={16}
                    style={{
                      filter: isHovered
                        ? 'none'
                        : isHighestRank
                          ? 'brightness(0) invert(1)'
                          : 'none',
                    }}
                  />
                </div>
              }

              <Flex
                alignItems="start"
                justifyContent="center"
                gap="10px"
                flexDirection="column"
                style={{
                  marginLeft: mobile ? '4px' : '',
                }}
              >
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: isHighestRank
                      ? isHovered
                        ? 'black'
                        : 'white'
                      : 'black',
                    marginTop: mobile ? '' : '8px',
                  }}
                >
                  {score.name}
                </div>

                {mobile &&
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: isHighestRank
                        ? isHovered
                          ? 'black'
                          : 'white'
                        : '#9A9EA3',
                    }}
                  >
                    상위 {score.topPercentage}%
                  </div>
                }

                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: '600',
                    lineHeight: '43px',
                    color: isHighestRank
                      ? isHovered
                        ? color
                        : 'white'
                      : color,
                  }}
                >
                  {score.rank}위
                </div>

                {!mobile &&
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: isHighestRank
                        ? isHovered
                          ? 'black'
                          : 'white'
                        : 'black',
                    }}
                  >
                    상위 {score.topPercentage}%
                  </div>
                }
              </Flex>

              {!mobile &&
                <div
                  style={{
                    margin: '22px 0 0px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  {score.score !== undefined && score.score > 0 && (
                    <div
                      style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: isHighestRank
                          ? isHovered
                            ? 'black'
                            : 'white'
                          : 'black',
                      }}
                    >
                      {score.score.toFixed(1)}점
                    </div>
                  )}
                  {score.avgScore > 0 && (
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: isHighestRank
                          ? isHovered
                            ? '#9A9EA3'
                            : 'white'
                          : '#9A9EA3',
                      }}
                    >
                      전국 평균 대비 {score.scoreGap >= 0 ? '+' : ''}
                      {score.scoreGap.toFixed(1)}점
                    </div>
                  )}
                </div>
              }
            </div>
          );
        })}
      </div>

      {/* IndexModal 수정 - 캐싱된 데이터 사용 */}
      {selectedIndexData && (
        <IndexModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          data={{
            ...selectedIndexData,
            // 키 인덱스 데이터 쿼리에서 받은 데이터로 업데이트
            indexDescription:
              keyIndexDataQuery.data?.description ||
              selectedIndexData.indexDescription,
            source: keyIndexDataQuery.data?.source || selectedIndexData.source,
            year: keyIndexDataQuery.data?.year || selectedIndexData.year,
            // undefined인 경우 프로퍼티 자체를 제외
            ...(keyIndexDataQuery.data?.yearly_avg_score !== undefined && {
              yearlyAvgScore: keyIndexDataQuery.data.yearly_avg_score,
            }),
          }}
          regionId={selectedRegion?.id || 0}
          apiData={
            regionKeyIndexQueries.find(
              (query, index) =>
                rank[index]?.key_index_id === selectedIndexData.indexId,
            )?.data || undefined
          }
        />
      )}
    </>
  );
};

export default CategoryRankGrid;
