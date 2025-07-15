'use client';

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
  const guideLabelX = center + radius + 20; // 기존보다 20px 더 왼쪽
  const guideQmarkX = guideLabelX + 65; // 원은 텍스트 기준 오른쪽 32px (필요시 조정)
  // 실제 y축 중심 계산
  const centerY = center - 150; // center는 svgCenterX이므로 horizontalExtension만큼 빼기
  const guideStrongY = centerY - 10;
  const guideWeakY = centerY + 18;

  return (
    <>
      {/* 위쪽 반원 배경 (0도 ~ 180도) */}
      <path
        d={`M ${center} ${centerY} 
            L ${center + radius * Math.cos(0)} ${centerY + radius * Math.sin(0)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(Math.PI)} ${centerY + radius * Math.sin(Math.PI)}
            Z`}
        fill="#EBEBEB"
      />

      {/* 아래쪽 반원 배경 (180도 ~ 360도) */}
      <path
        d={`M ${center} ${centerY} 
            L ${center + radius * Math.cos(Math.PI)} ${centerY + radius * Math.sin(Math.PI)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(2 * Math.PI)} ${centerY + radius * Math.sin(2 * Math.PI)}
            Z`}
        fill="#F4F4F4"
      />

      {/* 배경에 마스크 적용 */}
      <path
        d={`M ${center} ${centerY} 
            L ${center + radius * Math.cos(0)} ${centerY + radius * Math.sin(0)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(Math.PI)} ${centerY + radius * Math.sin(Math.PI)}
            Z`}
        fill="#EBEBEB"
        mask="url(#labelMask)"
      />

      <path
        d={`M ${center} ${centerY} 
            L ${center + radius * Math.cos(Math.PI)} ${centerY + radius * Math.sin(Math.PI)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(2 * Math.PI)} ${centerY + radius * Math.sin(2 * Math.PI)}
            Z`}
        fill="#F4F4F4"
        mask="url(#labelMask)"
      />

      {/* 원형 격자 (50%, 100%) */}
      {[0.5, 1.0].map((rate, i) => (
        <circle
          key={i}
          cx={center}
          cy={centerY}
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
            y1={centerY}
            x2={center + radius * Math.cos(pt.angle)}
            y2={centerY + radius * Math.sin(pt.angle)}
            stroke="#D9D9E8"
            strokeWidth={0.5}
          />
        ))}
      </g>

      {/* 가로 점선 (길이 더 늘림) */}
      <line
        x1={center - radius - 120}
        y1={centerY}
        x2={center + radius + 120}
        y2={centerY}
        stroke="#CCC"
        strokeWidth={0.5}
        strokeDasharray="4 4"
      />

      {/* 강점/약점 텍스트 + 물음표 아이콘 */}
      <g
        onMouseEnter={() => onStrongGuideHover && onStrongGuideHover(true)}
        onMouseLeave={() => onStrongGuideHover && onStrongGuideHover(false)}
        style={{ cursor: 'pointer' }}
      >
        {/* 강점영역 텍스트 */}
        <text
          x={guideLabelX}
          y={guideStrongY}
          textAnchor="start"
          fontSize="8px"
          fontWeight="600"
          fill="#BDBDBD"
          className="radar-guide-label"
          style={{ cursor: 'pointer' }}
        >
          ↑ 강점영역
        </text>
        {/* 물음표 아이콘 */}
        <g style={{ cursor: 'pointer' }}>
          <circle
            cx={guideQmarkX}
            cy={guideStrongY - 3}
            r={7}
            fill="#F5F5F5"
            stroke="#D9D9E8"
            strokeWidth="1"
            style={{ cursor: 'pointer' }}
          />
          <text
            x={guideQmarkX}
            y={guideStrongY - 3}
            textAnchor="middle"
            fontSize="8px"
            fontWeight="bold"
            fill="#BDBDBD"
            alignmentBaseline="middle"
            dominantBaseline="middle"
            className="radar-guide-qmark"
            style={{ cursor: 'pointer' }}
          >
            ?
          </text>
        </g>
        {/* 호버 영역(투명) */}
        <rect
          x={guideLabelX - 5}
          y={guideStrongY - 12}
          width={60}
          height={24}
          fill="transparent"
          style={{ cursor: 'pointer' }}
        />
      </g>
      <g
        onMouseEnter={() => onWeakGuideHover && onWeakGuideHover(true)}
        onMouseLeave={() => onWeakGuideHover && onWeakGuideHover(false)}
        style={{ cursor: 'pointer' }}
      >
        {/* 약점영역 텍스트 */}
        <text
          x={guideLabelX}
          y={guideWeakY}
          textAnchor="start"
          fontSize="8px"
          fontWeight="600"
          fill="#BDBDBD"
          className="radar-guide-label"
          style={{ cursor: 'pointer' }}
        >
          ↓ 약점영역
        </text>
        {/* 물음표 아이콘 */}
        <g style={{ cursor: 'pointer' }}>
          <circle
            cx={guideQmarkX}
            cy={guideWeakY - 3}
            r={7}
            fill="#F5F5F5"
            stroke="#D9D9E8"
            strokeWidth="1"
            style={{ cursor: 'pointer' }}
          />
          <text
            x={guideQmarkX}
            y={guideWeakY - 3}
            textAnchor="middle"
            fontSize="8px"
            fontWeight="bold"
            fill="#BDBDBD"
            alignmentBaseline="middle"
            dominantBaseline="middle"
            className="radar-guide-qmark"
            style={{ cursor: 'pointer' }}
          >
            ?
          </text>
        </g>
        {/* 호버 영역(투명) */}
        <rect
          x={guideLabelX - 5}
          y={guideWeakY - 12}
          width={60}
          height={24}
          fill="transparent"
          style={{ cursor: 'pointer' }}
        />
      </g>

      {/* 축 라벨 */}
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

        // 라벨 위치
        const baseX =
          center + (radius + labelOffset.category) * Math.cos(pt.angle);
        const baseY =
          centerY + (radius + labelOffset.category) * Math.sin(pt.angle);

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
        const labelMargin = 8; // 16에서 8로 줄여서 꼭지점에 더 가깝게
        if (bottomCategories.includes(category as any)) {
          // 하단 라벨: y를 아래로
          labelY = baseY + labelMargin;
        } else if (topCategories.includes(category as any)) {
          // 상단 라벨: y를 위로
          labelY = baseY - labelMargin;
        }

        // circle 위치 계산 - 원은 기존 위치 유지
        let codeX, codeY, circleTransform;
        const circleMargin = 25; // 20에서 25로 늘려서 라벨과 원의 거리를 조금 더 늘림
        if (bottomCategories.includes(category as any)) {
          // 하단 라벨: 라벨에서 원의 중심 '반대 방향(아래)'으로 margin만큼 이동
          const vecX = center - labelX;
          const vecY = centerY - labelY;
          const vecLen = Math.sqrt(vecX * vecX + vecY * vecY);
          const normX = vecX / vecLen;
          const normY = vecY / vecLen;
          codeX = labelX - normX * circleMargin;
          codeY = labelY - normY * circleMargin;
          circleTransform = `rotate(${rotationAngle} ${codeX} ${codeY})`;
        } else if (topCategories.includes(category as any)) {
          // 상단 라벨: 라벨에서 원의 중심 '반대 방향(위)'으로 margin만큼 이동
          const vecX = center - labelX;
          const vecY = centerY - labelY;
          const vecLen = Math.sqrt(vecX * vecX + vecY * vecY);
          const normX = vecX / vecLen;
          const normY = vecY / vecLen;
          codeX = labelX - normX * circleMargin;
          codeY = labelY - normY * circleMargin;
          circleTransform = `rotate(${rotationAngle} ${codeX} ${codeY})`;
        } else {
          // 나머지: 접선 방향(라벨 기준 +90도)으로 margin만큼 이동
          const tangentAngle = pt.angle + Math.PI / 2;
          codeX = labelX + circleMargin * Math.cos(tangentAngle);
          codeY = labelY + circleMargin * Math.sin(tangentAngle);
          circleTransform = `rotate(${rotationAngle} ${codeX} ${codeY})`;
        }

        // 지역 데이터가 있으면 점수에 따른 색상 적용
        let textColor = '#999999'; // 기본 색상
        let circleColor = '#999999'; // 원 색상
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
              textColor = '#000000';
              circleColor = '#000000';
            } else {
              textColor = colorMap[category] || '#999999';
              circleColor = colorMap[category] || '#999999';
            }
          }
        }

        const categoryCode = getCategoryCode(category, klaciCodeValue);

        const circleRadius = 8;
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
              dy="0.4em"
              fontSize={fontSize.category}
              fontWeight="600"
              fill={textColor}
              transform={`rotate(${rotationAngle} ${labelX} ${labelY})`}
              className="radar-category-label"
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
                  transform={circleTransform}
                />
                <text
                  x={codeX}
                  y={codeY}
                  textAnchor="middle"
                  dy="0.4em"
                  fontSize="16px"
                  fontWeight="bold"
                  fill="#FFFFFF"
                  transform={circleTransform}
                  className="radar-circle-code-text"
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
