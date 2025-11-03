'use client';

import { NUM_OF_REGIONS } from '@/constants/data';
import { useDistrict } from '@/store';
import { CategoryData } from '@/types/category';
import React, { useEffect, useState } from 'react';
import CategoryRankGrid from './CategoryScoreGrid';

interface CategoryRankingProps {
  index: number;
  categoryData: CategoryData;
  mobile: boolean;
}

const CategoryRanking: React.FC<CategoryRankingProps> = ({
  categoryData,
  mobile
}) => {
  const { title, color, currentRank, description, rank } = categoryData;
  const [isClient, setIsClient] = useState(false);

  // Zustand store에서 선택된 지역 정보 가져오기
  const { selectedRegion } = useDistrict();

  // Hydration 에러 방지를 위한 클라이언트 사이드 렌더링
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 상위 퍼센트 계산
  const topPercentage = ((currentRank / NUM_OF_REGIONS) * 100).toFixed(1);

  // 클라이언트 사이드에서만 렌더링
  if (!isClient) {
    return (
      <div
        className="flex w-full flex-col bg-white"
        style={{}}
      >
        {!mobile &&
          <div className="flex p-6">
            <div
              className="flex flex-col"
              style={{
                width: mobile ? '50%' : '25%',
                paddingRight: '2rem'
              }}
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
                  textAlign: 'justify',
                }}
              >
                {description}
              </div>
            </div>
          </div>
        }

        {mobile &&
          <div className="flex p-6">
            <div
              className="flex flex-col"
              style={{
                width: mobile ? '50%' : '25%',
                paddingRight: '2rem'
              }}
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
          </div>
        }
      </div>
    );
  }

  return (
    <div
      className="flex w-full flex-col"
      style={{ gap: '50px', maxWidth: mobile ? '100%' : '1060px', backgroundColor: mobile ? '' : 'bg-white' }}
    >
      {/* 메인 콘텐츠 */}

      {!mobile &&
        <div className="flex p-6" style={{ gap: '2rem', marginBottom: '30px' }}>
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
                fontSize: '24px',
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
                fontSize: '36px',
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
                fontSize: '18px',
                fontWeight: 400,
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
                lineHeight: '28px',
                fontSize: '18px',
                fontWeight: 400,
                color: '#000',
                textAlign: 'justify',
              }}
            >
              {description}
            </div>
          </div>
        </div>
      }

      {mobile &&
        <div className="flex w-full p-6" style={{ gap: '2rem', marginBottom: '30px' }}>
          {/* 좌측 박스 (1:1 비율에서 1) */}
          <div
            className="flex flex-col"
            style={{
              flex: 1,
              paddingRight: '2rem',
            }}
          >

            <div
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: 'black',
              }}
            >
              상위 {topPercentage}%
            </div>

            {/* 타이틀 */}
            <div
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'black',
                marginBottom: '8px',
              }}
            >
              {title}
            </div>
          </div>

          {/* 우측 박스 (1:1 비율에서 1) */}
          <div style={{ flex: 1, textAlign: 'right' }}>
            {/* 키컬러로 N위 */}
            <div
              style={{
                fontSize: '36px',
                fontWeight: 600,
                color: color,
                marginBottom: '0.5rem'
              }}
            >
              {currentRank}위
            </div>
          </div>
        </div>
      }

      {/* 세부 점수 그리드 */}
      <div className="px-6 pb-6">
        <CategoryRankGrid
          rank={rank}
          color={color}
          regionId={selectedRegion?.id || 0}
          categoryTitle={title}
          mobile={mobile}
        />
      </div>
    </div>
  );
};

export default CategoryRanking;
