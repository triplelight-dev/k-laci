'use client';

import { useState } from 'react';
import { CATEGORIES } from '../../../constants/categories';
import RadarBackground from './RadarBackground';
import RadarHoverEffects from './RadarHoverEffects';
import RadarJewel from './RadarJewel';
import { RadarChartContext, RadarChartProps } from './types';

const JewelRadarChart = ({
  data,
  isJewel = false,
  size = 3000,
  imageUrl = '/backgrounds/radar_chart_bg.png',
  regionData,
}: RadarChartProps) => {
  const center = size / 2;
  const radius = size * 0.4;
  const jewelSize = isJewel ? radius * 2 : size;

  // 세로 간격 완전 제거 - 좌우만 확장
  const horizontalExtension = 250;  // 200 → 250 (양옆으로 50px씩 확장)
  const svgWidth = size + horizontalExtension * 2; // 좌우만 확장
  const svgHeight = size; // 세로는 차트 크기와 완전히 동일

  // 중심점 계산 - 세로는 정중앙
  const svgCenterX = center + horizontalExtension;
  const svgCenterY = size / 2; // 명확하게 SVG 높이의 정중앙

  // 폰트 크기 비율 계산 - 크기를 증가
  const fontSize = {
    category: Math.round(size * 0.03), // 0.028 → 0.038
    value: Math.round(size * 0.02), // 0.02 → 0.028
    tooltip: Math.round(size * 0.01), // 0.024 → 0.032
    area: Math.round(size * 0.022), // 0.028 → 0.038
  };

  // 라벨 위치 오프셋도 조정
  const labelOffset = {
    category: Math.round(size * 0.04), // 0.03 → 0.04
    value: Math.round(size * 0.012), // 0.008 → 0.012
  };

  // 아이콘 크기 추가
  const iconSize = {
    qmarkRadius: Math.round(fontSize.area * 0.6), // 원 사이즈 유지
    qmarkFontSize: Math.round(fontSize.area * 0.75), // 강점영역 텍스트의 75%
    circleRadius: Math.round(size * 0.018), // 카테고리 코드 원형 반지름 (기존 8 → size * 0.018)
    circleMargin: Math.round(size * 0.036), // 카테고리 코드 원형과 텍스트 간격 (기존 25 → size * 0.036)
  };

  // 차트 순서에 맞게 카테고리 배열 생성 (순서 중요!)
  const categories = [
    CATEGORIES.생활역동형,
    CATEGORIES.안전회복형,
    CATEGORIES.인구정착형,
    CATEGORIES.경제정속형,
    CATEGORIES.생활정체형,
    CATEGORIES.안전정진형,
    CATEGORIES.인구성장형,
    CATEGORIES.경제혁신형,
  ];

  const colorMap: Record<string, string> = {
    [CATEGORIES.생활역동형]: '#874FFF',
    [CATEGORIES.생활정체형]: '#874FFF',
    [CATEGORIES.안전회복형]: '#24CB71',
    [CATEGORIES.안전정진형]: '#24CB71',
    [CATEGORIES.인구정착형]: '#FF3737',
    [CATEGORIES.인구성장형]: '#FF3737',
    [CATEGORIES.경제정속형]: '#FFA600',
    [CATEGORIES.경제혁신형]: '#FFA600',
  };

  const numAxes = categories.length;
  const angleStep = (2 * Math.PI) / numAxes;
  const rotation = Math.PI / 4 - (23 * Math.PI) / 180;

  // 값 보정
  const vals = data.slice(0, numAxes);
  while (vals.length < numAxes) vals.push(0);

  // 축 끝점 좌표 계산
  const points = vals.map((value, i) => {
    const angle = -Math.PI / 2 + rotation + i * angleStep;
    const r = (value / 100) * radius;
    return {
      x: svgCenterX + r * Math.cos(angle),
      y: svgCenterY + r * Math.sin(angle),
      angle,
    };
  });

  // 두색 그라디언트 쌍
  const fixedColorPairs: [string, string][] = [
    ['#ACAAE8', '#8E8AE5'], // 생활역동형
    ['#74BF9E', '#59A37D'], // 안전회복형
    ['#F56542', '#D64A2E'], // 인구정착형
    ['#F4B04D', '#D09B3F'], // 경제정속형
    ['#ACAAE8', '#8E8AE5'], // 생활정체형
    ['#74BF9E', '#59A37D'], // 안전정진형
    ['#F56542', '#D64A2E'], // 인구성장형
    ['#F4B04D', '#D09B3F'], // 경제혁신형
  ];

  // 모든 위치 계산
  const guideLabelX = svgCenterX + radius + 20;

  // 텍스트 길이 더 정확하게 계산: '↑ 강점영역'
  // 화살표(0.8) + 공백(0.3) + 한국어 4글자(4.0) = 5.1배 정도
  const textWidth = fontSize.area * 5.5; // 여유분 포함
  const textGap = Math.round(fontSize.area * 0.4) - 6; // 1px 좌로 이동
  const guideQmarkX = guideLabelX + textWidth + textGap;

  const guideStrongY = svgCenterY - 20;
  const guideWeakY = svgCenterY + 22;

  // 툴팁 위치 계산
  const tooltipBoxX = svgCenterX + radius + 95;
  const tooltipTextX = svgCenterX + radius + 107;
  const tooltipBoxY = svgCenterY - 50;

  const context: RadarChartContext = {
    center: svgCenterX,
    centerY: svgCenterY - 200, // 가이드 텍스트용 (추가)
    actualCenterY: svgCenterY,
    radius,
    size,
    jewelSize,
    isJewel,
    fontSize,
    labelOffset,
    iconSize, // 추가
    categories,
    colorMap,
    points,
    vals,
    fixedColorPairs,
    regionData: regionData || {},
    guide: {
      labelX: guideLabelX,
      qmarkX: guideQmarkX,
      strongY: guideStrongY,
      weakY: guideWeakY,
    },
    tooltip: {
      boxX: tooltipBoxX,
      textX: tooltipTextX,
      boxY: tooltipBoxY,
    },
  };

  const [showStrongTooltip, setShowStrongTooltip] = useState(false);
  const [showWeakTooltip, setShowWeakTooltip] = useState(false);

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      style={{
        display: 'block',
        margin: 0,
        padding: 0,
        cursor: 'pointer',
      }}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className="radar-chart"
    >
      {/* 파란 박스 - 세로 간격 완전 제거 */}
      {/* 개발용 보더 제거
      <rect
        x={horizontalExtension}
        y={0}
        width={size}
        height={size}
        fill="none"
        stroke="blue"
        strokeWidth="2"
        strokeDasharray="5,5"
      />
      */}

      {/* 실제 차트 원 보더 */}
      {/* 개발용 보더 제거
      <circle
        cx={svgCenterX}
        cy={svgCenterY}
        r={radius}
        fill="none"
        stroke="green"
        strokeWidth="3"
        strokeDasharray="10,5"
      />
      */}

      {/* 라벨 마스크 */}
      {!isJewel && (
        <defs>
          <mask id="labelMask">
            <rect width={svgWidth} height={svgHeight} fill="white" />
            {points.map((pt, i) => {
              const x = pt.x;
              const y = pt.y;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={fontSize.category * 2}
                  fill="black"
                />
              );
            })}
          </mask>

          {/* 보석 영역 마스크 - 방사형 축선을 보석 위에서 숨기기 위해 */}
          <mask id="jewelMask">
            <rect width={svgWidth} height={svgHeight} fill="white" />
            {/* 보석 전체를 하나의 영역으로 마스킹 */}
            <path
              d={
                points
                  .map((pt, i) => {
                    if (i === 0) return `M${pt.x},${pt.y}`;
                    return `L${pt.x},${pt.y}`;
                  })
                  .join(' ') + 'Z'
              }
              fill="black"
            />
          </mask>
        </defs>
      )}

      <RadarBackground
        context={context}
        onStrongGuideHover={setShowStrongTooltip}
        onWeakGuideHover={setShowWeakTooltip}
      />
      <RadarJewel context={context} imageUrl={imageUrl} />
      <RadarHoverEffects
        context={context}
        showStrongTooltip={showStrongTooltip}
        showWeakTooltip={showWeakTooltip}
      />
    </svg>
  );
};

export default JewelRadarChart;