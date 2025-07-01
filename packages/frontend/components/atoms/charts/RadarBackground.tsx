'use client';

import { CATEGORIES } from '../../../constants/categories';
import { isActiveCategory } from '../../../utils/categoryUtils';
import { RadarChartContext } from './types';

interface RadarBackgroundProps {
  context: RadarChartContext;
}

const RadarBackground = ({ context }: RadarBackgroundProps) => {
  const {
    center,
    radius,
    isJewel,
    fontSize,
    labelOffset,
    categories,
    colorMap,
    points,
    regionData,
  } = context;

  if (isJewel) return null;

  // KLACI 코드에서 해당 카테고리의 코드를 가져오는 함수
  const getCategoryCode = (
    category: string,
    klaciCode?: string,
  ): string | null => {
    if (!klaciCode || klaciCode.length !== 4) return null;

    // 카테고리별 코드 매핑
    const categoryCodeMap: Record<string, number> = {
      [CATEGORIES.인구성장형]: 0,
      [CATEGORIES.인구정착형]: 0,
      [CATEGORIES.경제혁신형]: 1,
      [CATEGORIES.경제정속형]: 1,
      [CATEGORIES.생활역동형]: 2,
      [CATEGORIES.생활정체형]: 2,
      [CATEGORIES.안전회복형]: 3,
      [CATEGORIES.안전정진형]: 3,
    };

    const codeIndex = categoryCodeMap[category];
    if (codeIndex === undefined) return null;

    // 해당 카테고리가 활성화된 카테고리인지 확인
    if (regionData) {
      const { growth_score, economy_score, living_score, safety_score } =
        regionData;
      const isActive = isActiveCategory(
        category,
        growth_score || 50,
        economy_score || 50,
        living_score || 50,
        safety_score || 50,
      );

      if (isActive) {
        // KLACI 코드의 해당 자리(0~3)의 원본 문자(대소문자 구분)를 반환
        return klaciCode[codeIndex] ?? null;
      }
    }

    return null;
  };

  return (
    <>
      {/* 위쪽 반원 배경 (0도 ~ 180도) */}
      <path
        d={`M ${center} ${center} 
            L ${center + radius * Math.cos(0)} ${center + radius * Math.sin(0)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(Math.PI)} ${center + radius * Math.sin(Math.PI)}
            Z`}
        fill="#EBEBEB"
      />

      {/* 아래쪽 반원 배경 (180도 ~ 360도) */}
      <path
        d={`M ${center} ${center} 
            L ${center + radius * Math.cos(Math.PI)} ${center + radius * Math.sin(Math.PI)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(2 * Math.PI)} ${center + radius * Math.sin(2 * Math.PI)}
            Z`}
        fill="#F4F4F4"
      />

      {/* 배경에 마스크 적용 */}
      <path
        d={`M ${center} ${center} 
            L ${center + radius * Math.cos(0)} ${center + radius * Math.sin(0)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(Math.PI)} ${center + radius * Math.sin(Math.PI)}
            Z`}
        fill="#EBEBEB"
        mask="url(#labelMask)"
      />

      <path
        d={`M ${center} ${center} 
            L ${center + radius * Math.cos(Math.PI)} ${center + radius * Math.sin(Math.PI)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(2 * Math.PI)} ${center + radius * Math.sin(2 * Math.PI)}
            Z`}
        fill="#F4F4F4"
        mask="url(#labelMask)"
      />

      {/* 원형 격자 (50%, 100%) */}
      {[0.5, 1.0].map((rate, i) => (
        <circle
          key={i}
          cx={center}
          cy={center}
          r={radius * rate}
          fill="none"
          stroke="#D9D9E8"
          strokeWidth={0.5}
          strokeDasharray={rate === 1.0 ? 'none' : '2 2'}
        />
      ))}

      {/* 방사형 축선 - 보석 위에서는 보이지 않게 마스크 적용 */}
      <g mask="url(#jewelMask)">
        {points.map((pt, i) => (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={center + radius * Math.cos(pt.angle)}
            y2={center + radius * Math.sin(pt.angle)}
            stroke="#D9D9E8"
            strokeWidth={0.5}
          />
        ))}
      </g>

      {/* 가로 점선 */}
      <line
        x1={center - radius - 40}
        y1={center}
        x2={center + radius + 40}
        y2={center}
        stroke="#CCC"
        strokeWidth={0.5}
        strokeDasharray="4 4"
      />

      {/* 축 라벨 */}
      {points.map((pt, i) => {
        const category = categories[i];
        if (!category) return null;
        
        const deg = 0;
        const x = center + (radius + labelOffset.category) * Math.cos(pt.angle);
        const y = center + (radius + labelOffset.category) * Math.sin(pt.angle);

        // 지역 데이터가 있으면 점수에 따른 색상 적용
        let textColor = '#999999'; // 기본 색상
        let circleColor = '#999999'; // 원 색상
        let klaciCodeValue = undefined;
        if (regionData) {
          const { growth_score, economy_score, living_score, safety_score, klaci_code } = regionData;
          const isActive = isActiveCategory(
            category,
            growth_score || 50,
            economy_score || 50,
            living_score || 50,
            safety_score || 50
          );
          // KLACI 코드 값 추출 (klaci_code만 사용)
          klaciCodeValue = klaci_code;
          if (isActive) {
            // 활성화된 카테고리 중에서도 낮은 점수 카테고리들은 검정색으로 표시
            const lowScoreCategories = [
              CATEGORIES.안전정진형,
              CATEGORIES.생활정체형,
              CATEGORIES.경제정속형,
              CATEGORIES.인구정착형,
            ];
            if ((lowScoreCategories as string[]).includes(category)) {
              textColor = '#000000'; // 검정색
              circleColor = '#000000'; // 원도 검정색
            } else {
              textColor = colorMap[category] || '#999999'; // 키컬러
              circleColor = colorMap[category] || '#999999'; // 원도 키컬러
            }
          }
        }

        const categoryCode = getCategoryCode(category, klaciCodeValue);
        const circleRadius = 8; // 원 반지름 (2/3 크기)
        const circleMargin = 32; // 원과 텍스트 사이 간격(아주 조금 더 멀리)
        // 좌측에 원이 와야 하는 카테고리
        const leftCircleCategories = [
          CATEGORIES.경제혁신형,
          CATEGORIES.인구성장형,
          CATEGORIES.안전정진형,
          CATEGORIES.생활정체형,
        ];
        // 카테고리별 x축 오프셋
        let xOffset = 0;
        if (category === CATEGORIES.인구성장형 || category === CATEGORIES.안전정진형) {
          xOffset = -16;
        } else if (category === CATEGORIES.안전회복형 || category === CATEGORIES.인구정착형) {
          xOffset = 16;
        }
        // 원의 x좌표: 좌측 카테고리는 왼쪽, 나머지는 오른쪽
        const codeX = (leftCircleCategories as string[]).includes(category)
          ? x - (circleRadius + circleMargin) + xOffset
          : x + circleRadius + circleMargin + xOffset;
        const codeY = y;
        // 라벨 x좌표도 동일하게 오프셋 적용
        const labelX = x + xOffset;

        // 하단 요소 카테고리(원 배경색 #D9D9E8)
        const bottomCategories = [
          CATEGORIES.안전정진형,
          CATEGORIES.생활정체형,
          CATEGORIES.경제정속형,
          CATEGORIES.인구정착형,
        ];
        // 원 색상 결정
        const finalCircleColor = (bottomCategories as string[]).includes(category)
          ? '#D9D9E8'
          : circleColor;

        return (
          <g key={i}>
            <text
              x={labelX}
              y={y}
              textAnchor="middle"
              dy="0.4em"
              fontSize={fontSize.category}
              fontWeight="bold"
              fill={textColor}
              transform={`rotate(${deg} ${labelX} ${y})`}
            >
              {category}
            </text>
            {categoryCode && (
              <>
                <circle
                  cx={codeX}
                  cy={codeY}
                  r={circleRadius}
                  fill={finalCircleColor}
                  stroke="none"
                />
                <text
                  x={codeX}
                  y={codeY}
                  textAnchor="middle"
                  dy="0.4em"
                  fontSize={fontSize.category * 0.65}
                  fontWeight="bold"
                  fill="#FFFFFF"
                >
                  {categoryCode}
                </text>
              </>
            )}
          </g>
        );
      })}
    </>
  );
};

export default RadarBackground;
