'use client';

import { RegionKeyIndexScoreResponse } from '@/api/services/data.service';
import { NUM_OF_REGIONS } from '@/constants/data';
import { colorMap, IndexData } from '@/features/results/sections/StrenthWeaknessIndexSection';
import { useDistrict } from '@/store';
import { Flex } from '@chakra-ui/react';
import React, { useMemo } from 'react';

interface IndexModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: IndexData;
  regionId: number;
  apiData?: RegionKeyIndexScoreResponse; // 캐싱된 데이터
}

const IndexModal: React.FC<IndexModalProps> = ({
  isOpen,
  onClose,
  data,
  regionId,
  apiData, // 추가된 prop
}) => {
  const { selectedRegion } = useDistrict();

  const rank = useMemo(() => {
    if (data.indexRank) return data.indexRank;
    if (!selectedRegion?.key_index_ranks) {
      return 0;
    }

    return selectedRegion.key_index_ranks.top.find(
      (rank) => rank.key_index_id === data.indexId,
    )?.rank;
  }, [selectedRegion, data.indexId]);

  // API 데이터가 이미 전달되었으므로 추가 호출 불필요
  const displayData = apiData || {
    region_key_index_score: {
      score: data.indexScore,
      year: data.year || new Date().getFullYear(),
    },
    avg_score: 0,
  };

  const topPercentage = ((data.indexRank / NUM_OF_REGIONS) * 100).toFixed(1);
  const source = data.source || '';
  const avgScore = displayData.avg_score || 0;

  const scoreGap = displayData.region_key_index_score.score - avgScore;
  const rankColor = colorMap[data.category] || '#FF3737';

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        cursor: 'pointer',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '1000px',
          borderRadius: '30px',
          overflow: 'hidden',
          backgroundColor: 'white',
          cursor: 'default',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* x button */}
        <div
          style={{
            position: 'absolute',
            top: 18,
            right: 18,
            zIndex: 9999,
            cursor: 'pointer',
            padding: '10px',
          }}
          onClick={onClose}
        >
          <CloseIcon onClose={onClose} />
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: 'white',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <div
              style={{
                padding: '4.5px 10px',
                backgroundColor: 'white',
                border: '1px solid #000000',
                borderRadius: '9px',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '24px',
                color: '#000000',
                alignSelf: 'flex-start',
                marginBottom: '32px',
                width: 'fit-content',
              }}
            >
              {data.fullRegionName}
            </div>

            <Flex
              alignItems="start"
              justifyContent="center"
              flexDirection="column"
            >
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: '7px',
                }}
              >
                {data.indexName}
              </div>

              <div
                style={{
                  fontSize: '28px',
                  fontWeight: '600',
                  lineHeight: '43px',
                  color: rankColor,
                  marginBottom: '6px',
                }}
              >
                {rank}위
              </div>

              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#000',
                  marginBottom: '33px',
                }}
              >
                상위 {topPercentage}%
              </div>
            </Flex>
          </div>

          <div
            style={{
              margin: '0 0 73px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
            }}
          >
            {displayData.region_key_index_score.score !== undefined &&
              displayData.region_key_index_score.score > 0 && (
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#000',
                  }}
                >
                  {displayData.region_key_index_score.score.toFixed(1)}점
                </div>
              )}
            {avgScore > 0 && (
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#9A9EA3',
                }}
              >
                전국 평균 대비 {scoreGap >= 0 ? '+' : ''}
                {scoreGap.toFixed(1)}점
              </div>
            )}
          </div>

          <div
            style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#9A9EA3',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              style={{ fontSize: '14px', fontWeight: '500', color: '#D9D9D9' }}
            >
              로데이터 출처기관
            </span>
            {source}
          </div>
        </div>

        <div
          style={{
            flex: 3,
            backgroundColor: '#F5F5F5',
            padding: '32px',
            paddingLeft: '60px',
            paddingRight: '83px',
            paddingTop: '99px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '15px',
              fontWeight: '400',
              color: 'black',
              lineHeight: 1.6,
              textAlign: 'justify',
            }}
          >
            {data.indexDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexModal;

function CloseIcon({ onClose }: { onClose: () => void }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      onClick={onClose}
      style={{ cursor: 'pointer' }}
    >
      <line
        x1="9.90238"
        y1="9.18917"
        x2="28.9943"
        y2="28.2811"
        stroke="#9A9EA3"
      />
      <line
        x1="28.9961"
        y1="9.90263"
        x2="9.90425"
        y2="28.9945"
        stroke="#9A9EA3"
      />
    </svg>
  );
}
