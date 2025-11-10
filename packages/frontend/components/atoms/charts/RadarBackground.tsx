'use client';

import { useState } from 'react';
import { CATEGORIES } from '../../../constants/categories';
import { isActiveCategory } from '../../../utils/categoryUtils';
import { RadarChartContext } from './types';

interface RadarBackgroundProps {
  context: RadarChartContext;
  onStrongGuideHover?: (show: boolean) => void;
  onWeakGuideHover?: (show: boolean) => void;
}

const RadarBackground = ({
  context,
  onStrongGuideHover,
  onWeakGuideHover,
}: RadarBackgroundProps) => {
  const [isStrongHovered, setIsStrongHovered] = useState(false);
  const [isWeakHovered, setIsWeakHovered] = useState(false);

  const {
    center,
    actualCenterY,
    radius,
    size,
    isJewel,
    fontSize,
    labelOffset,
    iconSize, // 추가
    categories,
    colorMap,
    points,
    vals,
    fixedColorPairs,
    regionData, // 추가
    guide,
  } = context;

  if (isJewel) return null;

  // 가이드 위치 값들 추출
  const {
    labelX: guideLabelX,
    qmarkX: guideQmarkX,
    strongY: guideStrongY,
    weakY: guideWeakY,
  } = guide;

  // map 바깥에서 한 번만 선언
  const leftCircleCategories = [
    CATEGORIES.경제혁신형,
    CATEGORIES.인구성장형,
    CATEGORIES.안전정진형,
    CATEGORIES.생활정체형,
  ];
  const topCategories = [
    CATEGORIES.인구성장형,
    CATEGORIES.경제혁신형,
    CATEGORIES.생활역동형,
    CATEGORIES.안전회복형,
  ];
  const bottomCategories = [
    CATEGORIES.안전정진형,
    CATEGORIES.생활정체형,
    CATEGORIES.경제정속형,
    CATEGORIES.인구정착형,
  ];

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
        growth_score ?? 0,
        economy_score ?? 0,
        living_score ?? 0,
        safety_score ?? 0,
      );

      if (isActive) {
        // KLACI 코드의 해당 자리(0~3)의 원본 문자(대소문자 구분)를 반환
        return klaciCode[codeIndex] ?? null;
      }
    }

    return null;
  };

  // 강점/약점 텍스트 + 물음표 아이콘
  // 실제 y축 중심 계산
  // const centerY = center - 200; // 제거 - 이미 context에서 받았음
  // const guideStrongY = centerY - 10; // 제거 - 이미 context에서 받았음
  // const guideWeakY = centerY + 18; // 제거 - 이미 context에서 받았음

  // 호버 핸들러
  const handleStrongHover = (hovered: boolean) => {
    setIsStrongHovered(hovered);
    onStrongGuideHover && onStrongGuideHover(hovered);
  };

  const handleWeakHover = (hovered: boolean) => {
    setIsWeakHovered(hovered);
    onWeakGuideHover && onWeakGuideHover(hovered);
  };

  // 호버 상태에 따른 색상 계산
  const strongAreaColor = isStrongHovered ? '#FBFBFB' : 'transparent'; // 강점영역 호버 시 연한 회색
  const weakAreaColor = isWeakHovered ? '#EBECEC' : 'transparent'; // 약점영역 호버 시 회색(#EBECEC)

  // 호버 상태에 따른 텍스트 및 원 색상 계산
  const strongTextColor = isStrongHovered ? '#000000' : '#BDBDBD';
  const strongCircleColor = isStrongHovered ? 'transparent' : '#F5F5F5';
  const strongCircleStroke = isStrongHovered ? '#000000' : '#D9D9E8';
  const strongQmarkColor = isStrongHovered ? '#000000' : '#BDBDBD';

  const weakTextColor = isWeakHovered ? '#000000' : '#BDBDBD';
  const weakCircleColor = isWeakHovered ? 'transparent' : '#F5F5F5';
  const weakCircleStroke = isWeakHovered ? '#000000' : '#D9D9E8';
  const weakQmarkColor = isWeakHovered ? '#000000' : '#BDBDBD';

  return (
    <>

      {/* 위쪽 반원 배경 (0도 ~ 180도) - Jewel 기준 */}
      <path
        d={`M ${center} ${actualCenterY} 
            L ${center + radius * Math.cos(Math.PI)} ${actualCenterY + radius * Math.sin(Math.PI)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(2 * Math.PI)} ${actualCenterY + radius * Math.sin(2 * Math.PI)}
            Z`}
        fill={size != 400 ? strongAreaColor : '#FBFBFB'}
        style={{
          transition: 'fill 0.3s ease',
        }}
      />
      {/* 아래쪽 반원 배경 (180도 ~ 360도) - Jewel 기준 */}
      <path
        d={`M ${center} ${actualCenterY} 
            L ${center + radius * Math.cos(0)} ${actualCenterY + radius * Math.sin(0)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(Math.PI)} ${actualCenterY + radius * Math.sin(Math.PI)}
            Z`}
        fill={size != 400 ? weakAreaColor : '#EBECEC'}
        style={{
          transition: 'fill 0.3s ease'
        }}
      />

      {/* 위쪽 반원 배경 (0도 ~ 180도) - Jewel 기준 */}
      <path
        d={`M ${center} ${actualCenterY} 
            L ${center + radius * Math.cos(Math.PI)} ${actualCenterY + radius * Math.sin(Math.PI)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(2 * Math.PI)} ${actualCenterY + radius * Math.sin(2 * Math.PI)}
            Z`}
        fill={strongAreaColor}
        mask="url(#labelMask)"
        style={{
          transition: 'fill 0.3s ease',
        }}
      />
      {/* 아래쪽 반원 배경 (180도 ~ 360도) - Jewel 기준 */}
      <path
        d={`M ${center} ${actualCenterY} 
            L ${center + radius * Math.cos(0)} ${actualCenterY + radius * Math.sin(0)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(Math.PI)} ${actualCenterY + radius * Math.sin(Math.PI)}
            Z`}
        fill={weakAreaColor}
        mask="url(#labelMask)"
        style={{
          transition: 'fill 0.3s ease',
        }}
      />

      {/* 원형 격자 (50%, 100%) - Jewel 기준 */}
      {[0.5, 1.0].map((rate, i) => (
        <circle
          key={i}
          cx={center}
          cy={actualCenterY}
          r={radius * rate}
          fill="none"
          stroke="#D9D9E8"
          strokeWidth={0.5}
          strokeDasharray={rate === 1.0 ? 'none' : '2 2'}
        />
      ))}

      {/* 방사형 축선 - Jewel 기준 */}
      <g mask="url(#jewelMask)">
        {points.map((pt, i) => (
          <line
            key={i}
            x1={center}
            y1={actualCenterY}
            x2={center + radius * Math.cos(pt.angle)}
            y2={actualCenterY + radius * Math.sin(pt.angle)}
            stroke="#D9D9E8"
            strokeWidth={0.5}
          />
        ))}
      </g>

      {/* 가로 점선 - Jewel 기준 */}
      <line
        x1={center - radius - 120}
        y1={actualCenterY}
        x2={center + radius + 120}
        y2={actualCenterY}
        stroke="#CCC"
        strokeWidth={0.5}
        strokeDasharray="4 4"
      />

      {/* 강점/약점 텍스트 + 물음표 아이콘 - 기존 centerY 사용 (가이드 텍스트용) */}
      <g
        onMouseEnter={() => size != 400 ? handleStrongHover(true) : null}
        onMouseLeave={() => size != 400 ? handleStrongHover(false) : null}
        style={{ cursor: 'pointer' }}
      >
        <text
          x={guideLabelX + (size != 400 ? 0 : 50)}
          y={guideStrongY + (size != 400 ? 0 : guideStrongY * -1)}
          textAnchor="start"
          dominantBaseline="middle"
          style={{ fontSize: `${fontSize.area}px`, fontWeight: 'bold' }} // fontWeight도 style로 설정
          fill={strongTextColor}
        >
          {size != 400 ? '↑ 강점영역' : '강점'}
        </text>
        {size != 400 && (
          <>
            <circle
              cx={guideQmarkX}
              cy={guideStrongY} // 1px 아래로 조정 제거 - 텍스트와 같은 높이
              r={iconSize.qmarkRadius} // 8 → iconSize.qmarkRadius
              fill={strongCircleColor}
              stroke={strongCircleStroke}
              strokeWidth={1}
            />
            <text
              x={guideQmarkX}
              y={guideStrongY} // 1px 아래로 조정 제거 - 텍스트와 같은 높이
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontSize: `${iconSize.qmarkFontSize}px`,
                fontWeight: 'bold',
              }} // fontWeight도 style로 설정
              fill={strongQmarkColor}
            >
              ?
            </text>
          </>
        )}
      </g>

      <g
        onMouseEnter={() => size != 400 ? handleWeakHover(true) : null}
        onMouseLeave={() => size != 400 ? handleWeakHover(false) : null}
        style={{ cursor: 'pointer',
          backgroundColor: size != 400 ? '' : '#EBECEC'
         }}
      >
        <text
          x={guideLabelX + (size != 400 ? 0 : 50)}
          y={guideWeakY + (size != 400 ? 0 : (guideWeakY - fontSize.area))}
          textAnchor="start"
          dominantBaseline="middle"
          style={{ fontSize: `${fontSize.area}px`, fontWeight: 'bold' }} // fontWeight도 style로 설정
          fill={weakTextColor}
        >
          {size != 400 ? '↓ 약점영역' : '약점'}
        </text>
        {size != 400 && (
          <>
            <circle
              cx={guideQmarkX}
              cy={guideWeakY} // 1px 아래로 조정 제거 - 텍스트와 같은 높이
              r={iconSize.qmarkRadius} // 8 → iconSize.qmarkRadius
              fill={weakCircleColor}
              stroke={weakCircleStroke}
              strokeWidth={1}
            />
            <text
              x={guideQmarkX}
              y={guideWeakY} // 1px 아래로 조정 제거 - 텍스트와 같은 높이
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontSize: `${iconSize.qmarkFontSize}px`,
                fontWeight: 'bold',
              }} // fontWeight도 style로 설정
              fill={weakQmarkColor}
            >
              ?
            </text>
          </>
        )}
      </g>

      {/* 카테고리 라벨 - Jewel 기준으로 수정 */}
      {points.map((pt, i) => {
        const category = categories[i];
        if (!category) return null;

        // 각도 계산 (라디안 → 도)
        const angleInDegrees = (pt.angle * 180) / Math.PI;

        // 접선 방향으로 회전: 위쪽(0도) 기준 +90, 아래쪽(180도) 기준 -90
        let rotationAngle =
          angleInDegrees > -90 && angleInDegrees <= 90
            ? angleInDegrees + 90
            : angleInDegrees - 90;
        // 글자가 위로 향하는 경우(90~270도) 180도 추가 회전
        if (rotationAngle > 90 && rotationAngle < 270) {
          rotationAngle += 180;
        }

        // 라벨 위치 - actualCenterY 사용 (Jewel 기준)
        const baseX =
          center + (radius + labelOffset.category) * Math.cos(pt.angle);
        const baseY =
          actualCenterY + (radius + labelOffset.category) * Math.sin(pt.angle);

        // 카테고리별 x축 오프셋
        let xOffset = 0;
        if (
          category === CATEGORIES.인구성장형 ||
          category === CATEGORIES.안전정진형
        ) {
          xOffset = -16;
        } else if (
          category === CATEGORIES.안전회복형 ||
          category === CATEGORIES.인구정착형
        ) {
          xOffset = 16;
        }

        // 라벨 위치 조정: 상단/하단/기타에 따라 y축 오프셋 적용
        let labelX = baseX + xOffset;
        let labelY = baseY;
        const labelMargin = 8;
        if (bottomCategories.includes(category as any)) {
          labelY = baseY + labelMargin;
        } else if (topCategories.includes(category as any)) {
          labelY = baseY - labelMargin;
        }

        // circle 위치 계산 - 상단/하단 반원 간격 조정
        let codeX, codeY, circleTransform;
        const circleMargin = iconSize.circleMargin; // 25 → iconSize.circleMargin
        const extraMargin = Math.round(size * 0.014); // 10px 정도 추가 간격

        if (bottomCategories.includes(category as any)) {
          // 하단 반원: 텍스트보다 더 아래로
          const vecX = center - labelX;
          const vecY = actualCenterY - labelY;
          const vecLen = Math.sqrt(vecX * vecX + vecY * vecY);
          const normX = vecX / vecLen;
          const normY = vecY / vecLen;
          codeX = labelX - normX * (circleMargin + extraMargin);
          codeY = labelY - normY * (circleMargin + extraMargin);
          circleTransform = `rotate(${rotationAngle} ${codeX} ${codeY})`;
        } else if (topCategories.includes(category as any)) {
          // 상단 반원: 텍스트보다 더 위로
          const vecX = center - labelX;
          const vecY = actualCenterY - labelY;
          const vecLen = Math.sqrt(vecX * vecX + vecY * vecY);
          const normX = vecX / vecLen;
          const normY = vecY / vecLen;
          codeX = labelX - normX * (circleMargin + extraMargin);
          codeY = labelY - normY * (circleMargin + extraMargin);
          circleTransform = `rotate(${rotationAngle} ${codeX} ${codeY})`;
        } else {
          // 좌우 위치 (3시, 9시 방향)
          const tangentAngle = pt.angle + Math.PI / 2;
          codeX = labelX + circleMargin * Math.cos(tangentAngle);
          codeY = labelY + circleMargin * Math.sin(tangentAngle);
          circleTransform = `rotate(${rotationAngle} ${codeX} ${codeY})`;
        }

        // 지역 데이터가 있으면 점수에 따른 색상 적용
        let textColor = '#999999'; // 기본 색상
        let circleColor = '#999999'; // 원 색상
        let circleTextColor = '#999999'; // 원 안의 텍스트 색상 (새로 추가)
        let circleStroke = '#999999'; // 원 보더 색상 (새로 추가)
        let klaciCodeValue = undefined;

        if (regionData) {
          const {
            growth_score,
            economy_score,
            living_score,
            safety_score,
            klaci_code,
          } = regionData;
          const isActive = isActiveCategory(
            category,
            growth_score ?? 0,
            economy_score ?? 0,
            living_score ?? 0,
            safety_score ?? 0,
          );
          klaciCodeValue = klaci_code;
          if (isActive) {
            const lowScoreCategories = [
              CATEGORIES.안전정진형,
              CATEGORIES.생활정체형,
              CATEGORIES.경제정속형,
              CATEGORIES.인구정착형,
            ];

            if ((lowScoreCategories as string[]).includes(category)) {
              // 하단 반원 (bottomCategories)
              textColor = '#000000';
              circleColor = '#000000';
              circleTextColor = '#FFFFFF'; // 원 안의 텍스트는 흰색
              circleStroke = 'none'; // 보더 없음
            } else {
              // 상단 반원 (topCategories)
              textColor = colorMap[category] || '#999999';
              circleColor = colorMap[category] || '#999999';
              circleTextColor = '#FFFFFF'; // 원 안의 텍스트는 흰색
              circleStroke = colorMap[category] || '#999999'; // 보더는 키컬러
            }
          }
        }

        const categoryCode = getCategoryCode(category, klaciCodeValue);
        const circleRadius = iconSize.circleRadius; // 8 → iconSize.circleRadius
        const finalCircleColor = (bottomCategories as string[]).includes(
          category,
        )
          ? '#D9D9E8'
          : circleColor;

        return (
          <g key={i}>
            <text
              x={labelX}
              y={labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontSize: `${fontSize.category}px`, fontWeight: 'bold' }} // fontWeight도 style로 설정
              fill={textColor}
              transform={`rotate(${rotationAngle} ${labelX} ${labelY})`}
            >
              {category}
            </text>
            {categoryCode && (
              <g transform={circleTransform}>
                <circle
                  cx={codeX}
                  cy={codeY}
                  r={circleRadius}
                  fill={finalCircleColor}
                  stroke={circleStroke}
                  strokeWidth={circleStroke === 'none' ? 0 : 1}
                />
                <text
                  x={codeX}
                  y={codeY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fontSize: `${fontSize.value}px`, fontWeight: '500' }} // fontWeight도 style로 설정
                  fill={circleTextColor}
                >
                  {categoryCode}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </>
  );
};

export default RadarBackground;

export function getCategoryByScore(
  growthScore: number, // 인구성장형 점수
  economyScore: number, // 경제혁신형 점수
  livingScore: number, // 생활역동형 점수
  safetyScore: number, // 안전회복형 점수
): string[] {
  return [
    growthScore >= 50 ? CATEGORIES.인구성장형 : CATEGORIES.인구정착형, // 인덱스 0
    economyScore >= 50 ? CATEGORIES.경제혁신형 : CATEGORIES.경제정속형, // 인덱스 1
    livingScore >= 50 ? CATEGORIES.생활역동형 : CATEGORIES.생활정체형, // 인덱스 2
    safetyScore >= 50 ? CATEGORIES.안전회복형 : CATEGORIES.안전정진형, // 인덱스 3
  ];
}
