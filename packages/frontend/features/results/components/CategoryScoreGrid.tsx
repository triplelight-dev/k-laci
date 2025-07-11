'use client';

import { useRegionKeyIndexScore } from '@/api/hooks/useRegionKeyIndexScore';
import { NUM_OF_REGIONS } from '@/constants/data';
import { CategoryRank } from '@/types/category';
import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

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
  onScoreClick: (score: CategoryRank) => void;
  regionId: number;
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
  onScoreClick,
  regionId,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [updatedAllRank, setUpdatedAllRank] = useState<UpdatedRank[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { getRegionKeyIndexScore } = useRegionKeyIndexScore();


  useEffect(() => {
    const fetchRankData = async () => {
      if (!rank || rank.length === 0) {
        setUpdatedAllRank([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const promises = rank.map(async (score) => {
          if (!score.key_index_id || !regionId) {
            return {
              ...score,
              score: 0,
              topPercentage: ((score.rank / NUM_OF_REGIONS) * 100).toFixed(1),
              scoreGap: 0,
              avgScore: 0,
              regionId: regionId
            };
          }

          const data = await getRegionKeyIndexScore(regionId, score.key_index_id);
          return {
            ...score,
            score: data.region_key_index_score.score,
            topPercentage: ((score.rank / NUM_OF_REGIONS) * 100).toFixed(1),
            scoreGap: data.region_key_index_score.score - data.avg_score,
            avgScore: data.avg_score,
            regionId: regionId
          };
        });

        const updatedRank = await Promise.all(promises);
        setUpdatedAllRank(updatedRank);
      } catch (error) {
        console.error('Failed to fetch rank data:', error);
        // 에러 발생 시 기본 데이터로 설정
        const fallbackRank = rank.map(score => ({
          ...score,
          score: 0,
          topPercentage: ((score.rank / NUM_OF_REGIONS) * 100).toFixed(1),
          scoreGap: 0,
          avgScore: 0,
          regionId: regionId
        }));
        setUpdatedAllRank(fallbackRank);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRankData();
  }, [rank, regionId, getRegionKeyIndexScore]);





  // 스켈레톤 컴포넌트
  const SkeletonCard = () => (
    <div
      style={{
        width: '250px',
        height: '230px',
        position: 'relative',
        borderRadius: '8px',
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
      {/* 우상단 스켈레톤 아이콘 */}
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
        {/* 제목 스켈레톤 */}
        <div
          style={{
            width: '60%',
            height: '18px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
          }}
        />

        {/* 순위 스켈레톤 */}
        <div
          style={{
            width: '40%',
            height: '28px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
          }}
        />

        {/* 퍼센트 스켈레톤 */}
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
        {/* 점수 스켈레톤 */}
        <div
          style={{
            width: '50%',
            height: '16px',
            backgroundColor: '#E5E7EB',
            borderRadius: '4px',
            marginBottom: '2px',
          }}
        />
        {/* 평균 대비 스켈레톤 */}
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
          gridTemplateColumns: 'repeat(4, 1fr)',
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
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          maxWidth: '100%',
        }}
      >
        {Array.from({ length: rank.length }).map((_, index) => (
          <SkeletonCard key={`skeleton-${index}`} />
        ))}
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
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
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
                borderRadius: '8px',
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
                padding: '15px 33px',
                transition: 'all 0.2s ease',
                minHeight: '60px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '250px',
                height: '230px',
              }}
              onMouseEnter={() => {
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
              onClick={() => onScoreClick(score)}
            >
              {/* 우상단 아이콘 */}
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

              <Flex alignItems='start' justifyContent='center' gap='10px' flexDirection='column'>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: isHighestRank ? 'white' : 'black',
                    marginTop: '8px',
                  }}
                >
                  {score.name}
                </div>

                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: '600',
                    lineHeight: '43px',
                    color: isHighestRank ? 'white' : color,
                  }}
                >
                  {score.rank}위
                </div>

                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: isHighestRank ? 'white' : '#000',
                  }}
                >
                  상위 {score.topPercentage}%
                </div>

              </Flex>

              <div
                style={{
                  margin: '22px 0 0px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                {score.score !== undefined &&
                  score.score > 0 && (
                    <div
                      style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: isHighestRank ? 'white' : '#000',
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
                      color: isHighestRank ? 'white' : '#9A9EA3',
                    }}
                  >
                    전국 평균 대비 {score.scoreGap >= 0 ? '+' : ''}
                    {score.scoreGap.toFixed(1)}점
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryRankGrid;
