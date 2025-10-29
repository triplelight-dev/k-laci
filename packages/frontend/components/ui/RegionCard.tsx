'use client';

import RadarJewelChartMini from '@/components/atoms/charts/RadarJewelChartMini';
import KlaciCodeCirclesMini from '@/components/atoms/circle/KlaciCodeCirclesMini';
import { RegionCardData, RegionCardProps } from '@/types/region';
import React from 'react';

// 랜덤 목업 데이터 생성 함수 (실제 데이터가 없을 때만 사용)
const generateMockRadarData = (seed: number): number[] => {
  // seed를 기반으로 일관된 랜덤 데이터 생성
  const random = (min: number, max: number) => {
    const x = Math.sin(seed++) * 10000;
    return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min;
  };

  // 8개 카테고리에 대한 랜덤 데이터 생성
  return [
    random(30, 85), // 생활역동형
    random(40, 90), // 안전회복형
    random(25, 80), // 인구정착형
    random(35, 85), // 경제정속형
    random(30, 80), // 생활정체형
    random(40, 90), // 안전정진형
    random(20, 75), // 인구성장형
    random(30, 85), // 경제혁신형
  ];
};

// 뱃지 텍스트를 결정하는 함수
const getBadgeText = (data: RegionCardData): string => {
  // API에서 받은 display_type이 있으면 사용
  if (data.display_type) {
    return data.display_type;
  }

  // selection_tags가 있으면 첫 번째 태그를 기반으로 결정
  if (data.selection_tags && data.selection_tags.length > 0) {
    const firstTag = data.selection_tags[0];
    switch (firstTag) {
      case 'SAME_CODE':
        return '유형이 비슷한';
      case 'ADJACENT_RANK':
        return '순위가 비슷한';
      case 'SHARED_STRENGTH':
        return '강점이 비슷한';
      case 'SAME_WEIGHT_CLASS':
        return '인구가 비슷한';
      default:
        return '순위가 비슷한'; // 기본값
    }
  }

  // Home 페이지용 기본값
  return '상위 랭킹';
};

const RegionCard: React.FC<RegionCardProps> = ({
  data,
  onClick,
  style,
  topDivStyle,
  isHideBadge,
  bottomDivStyle,
  mobile
}) => {
  // 실제 데이터가 있으면 사용, 없으면 목업 데이터 사용
  const klaciCode = data.klaciCode || ''; // 기본값 설정
  const klaciType = data.klaciType || ''; // 기본값 설정
  const klaciNickname = data.klaciNickname || ''; // 기본값 설정
  const klaciNicknameMultiline = data.klaciNicknameMultiline || []; // 기본값 설정

  const nickname =
    klaciNicknameMultiline.length > 0
      ? klaciNicknameMultiline
      : [klaciNickname];

  // 레이더 차트 데이터: 실제 데이터가 있으면 사용, 없으면 목업 데이터 생성
  const radarData =
    Array.isArray(data.radarData) && data.radarData.length === 8
      ? data.radarData
      : generateMockRadarData(Number(data.id) || data.rank);

  // 뱃지 텍스트 결정
  const badgeText = getBadgeText(data);

  // 뱃지 높이 계산 (패딩 4px * 2 + 폰트 크기 14px + 여유 공간)
  const badgeHeight = 4 + 4 + 14 + 8; // 약 30px

  return (
    <div
      role="button"
      style={{
        minWidth: '385px',
        width: '280px',
        height: mobile ? '573px' : isHideBadge ? `${573 - badgeHeight}px` : '573px',
        backgroundColor: '#FAFAFA', // 전체 회색 배경
        borderRadius: '40px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative', // 절대 위치를 위한 기준점
        ...style,
      }}
      onClick={() => onClick?.(data)}
    >
      {/* 상단 - 흰색 배경 (절대 위치로 카드 전체 너비 덮기) */}
      {!mobile &&
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '127px', // 상단 영역 높이
            backgroundColor: 'white',
            padding: '34px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
            ...topDivStyle,
            pointerEvents: 'none', // 마우스 이벤트를 부모로 전달
          }}
        >
          {/* 종합순위 */}
          <div
            style={{
              fontSize: '17px',
              fontWeight: '500',
              color: 'black',
              marginTop: '10px',
              marginBottom: '4px',
              pointerEvents: 'none',
            }}
          >
            종합순위 {data.rank}위
          </div>
          {/* 지역명 */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#000',
              pointerEvents: 'none',
            }}
          >
            {data.province} {data.name}
          </div>
        </div>
      }

      {/* 하단 - 회색 배경 */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#FAFAFA',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          marginTop: '80px', // 상단 흰색 영역 높이만큼 여백
          pointerEvents: 'none', // 마우스 이벤트를 부모로 전달
          ...bottomDivStyle,
        }}
      >
        {/* 상단 - 레이더 차트 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '15px',
            height: '260px',
            padding: '5px',
            pointerEvents: 'none',
          }}
        >
          <RadarJewelChartMini
            data={radarData}
            size={210}
            imageUrl="/backgrounds/radar_chart_bg.png"
          />
        </div>

        {/* 하단 - KLACI 정보 (좌측 정렬) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            paddingLeft: '10px',
            pointerEvents: 'none',
          }}
        >
          {!mobile &&
            <>
              {/* KLACI Circle */}
              < KlaciCodeCirclesMini klaciCode={klaciCode} />

              {/* 지역 타입 */}
              <div
                style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#000',
                  textAlign: 'center',
                  lineHeight: '1.2',
                  pointerEvents: 'none',
                  marginTop: '5px',
                }}
              >
                {klaciType}
              </div>

              {/* 닉네임 */}
              <div
                style={{
                  fontSize: '18px',
                  color: 'black',
                  textAlign: 'center',
                  lineHeight: '1.3',
                  fontWeight: '400',
                  letterSpacing: '0.02em',
                  marginTop: '5px',
                  marginBottom: '10px',
                }}
              >
                {nickname.map((line, index) => (
                  <div key={index} style={{ whiteSpace: 'nowrap' }}>
                    {line}
                  </div>
                ))}
              </div>
            </>
          }

          {/* 뱃지 */}
          {!isHideBadge && (
            <div
              style={{
                fontSize: '14px',
                color: '#000',
                border: '1px solid #000',
                backgroundColor: 'transparent',
                padding: '4px 8px',
                borderRadius: '8px',
                fontWeight: '500',
              }}
            >
              {badgeText}
            </div>
          )}

          {mobile &&
            <>
              {/* 지역명 */}
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: '600',
                  color: '#000',
                  pointerEvents: 'none',
                }}
              >
                {data.province} {data.name}
              </div>
            </>
          }

        </div>
      </div>
    </div>
  );
};

export default RegionCard;
