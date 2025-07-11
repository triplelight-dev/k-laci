'use client';

import React, { useEffect } from 'react';

import { useRegionKeyIndexScore } from '@/api/hooks/useRegionKeyIndexScore';
import { NUM_OF_REGIONS } from '@/constants/data';
import { IndexData } from '@/features/results/sections/StrenthWeaknessIndexSection';

import { colorMap } from '@/features/results/sections/StrenthWeaknessIndexSection';
import { Flex } from '@chakra-ui/react';

interface IndexModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: IndexData;
  regionId: number;
}

const IndexModal: React.FC<IndexModalProps> = ({
  isOpen,
  onClose,
  data,
  regionId,
}) => {
  const {
    data: apiData,
    loading,
    error,
    getRegionKeyIndexScore,
  } = useRegionKeyIndexScore();

  useEffect(() => {
    if (isOpen && data.indexId && regionId) {
      getRegionKeyIndexScore(regionId, data.indexId);
    }
  }, [isOpen, data.indexId, regionId, getRegionKeyIndexScore]);

  if (!isOpen) return null;


  // apidata가 없고 로딩 중일 때는 로딩 상태를 보여줌
  if (!apiData && loading) {
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
            display: 'flex',
            width: '1000px',
            height: '450px',
            borderRadius: '30px',
            overflow: 'hidden',
            backgroundColor: 'white',
            cursor: 'default',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            style={{
              fontSize: '16px',
              fontWeight: '400',
              color: '#ADB5C4',
            }}
          >
            데이터를 불러오는 중...
          </div>
        </div>
      </div>
    );
  }

  const displayData = apiData || {
    region_key_index_score: {
      score: data.indexScore,
      year: data.year || new Date().getFullYear(),
    },
  };

  const topPercentage = ((data.indexRank / NUM_OF_REGIONS) * 100).toFixed(1);
  const source = data.source || '';
  const avgScore = apiData?.avg_score || 0;
  const scoreGap = displayData.region_key_index_score.score - avgScore;

  const rankColor = colorMap[data.category] || '#FF3737';

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
          height: '450px',
          borderRadius: '30px',
          overflow: 'hidden',
          backgroundColor: 'white',
          cursor: 'default',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* x button */}
        <div style={{
          position: 'absolute',
          top: 18,
          right: 18,
          zIndex: 9999,
          cursor: 'pointer',
          padding: '10px',
        }} onClick={onClose}>
          <CloseIcon onClose={onClose} />
        </div>



        <div
          style={{
            flex: 1,
            backgroundColor: 'white',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                padding: '8px 16px',
                backgroundColor: 'white',
                border: '1px solid #000000',
                borderRadius: '9px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#000000',
                alignSelf: 'flex-start',
                marginBottom: '30px',
                width: 'fit-content',
              }}
            >
              {data.fullRegionName}
            </div>

            <Flex alignItems='start' justifyContent='center' gap='10px' flexDirection='column'>
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#000000',
                  marginTop: '8px',
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
                }}
              >
                {data.indexRank}위
              </div>

              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#000',
                }}
              >
                상위 {topPercentage}%
              </div>

            </Flex>

          </div>

          <div
            style={{
              margin: '33px 0 73px',
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
              fontWeight: '400',
              color: '#9A9EA3',
              paddingTop: '16px',
              paddingBottom: '16px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#9A9EA3' }}>데이터 출처</span>
            {source}
          </div>

          {/* 로딩 상태 표시 */}
          {loading && (
            <div
              style={{
                fontSize: '15px',
                fontWeight: '400',
                color: '#ADB5C4',
                marginTop: '16px',
              }}
            >
              데이터를 불러오는 중...
            </div>
          )}

          {/* 에러 상태 표시 */}
          {error && (
            <div
              style={{
                fontSize: '15px',
                fontWeight: '400',
                color: '#FF3737',
                marginTop: '16px',
              }}
            >
              {error.message}
            </div>
          )}
        </div>

        <div
          style={{
            flex: 3,
            backgroundColor: '#F9F9FF',
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
    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none" onClick={onClose} style={{ cursor: 'pointer' }}>
      <line x1="9.90238" y1="9.18917" x2="28.9943" y2="28.2811" stroke="#9A9EA3" />
      <line x1="28.9961" y1="9.90263" x2="9.90425" y2="28.9945" stroke="#9A9EA3" />
    </svg >
  );
}