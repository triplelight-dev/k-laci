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
  size = 500,
  imageUrl = '/backgrounds/radar_chart_bg.png',
  regionData,
}: RadarChartProps) => {
  const center = size / 2;
  const radius = size * 0.4;
  const jewelSize = isJewel ? radius * 2 : size;

  // 라벨이 잘리지 않도록 전체 SVG 크기와 viewBox를 더 크게 설정
  const padding = size * 0.2; // 20% 패딩
  const svgSize = size + padding * 2;
  
  // 좌우만 확장
  const horizontalExtension = 200; // 200으로 유지
  const svgWidth = svgSize + horizontalExtension * 2;
  const svgHeight = svgSize;
  
  // 중심점 분리
  const svgCenterX = center + padding + horizontalExtension; // x축 중심 (확장된 중심)
  const svgCenterY = center + padding; // y축 중심 (원래 중심)

  // 폰트 크기 비율 계산
  const fontSize = {
    category: Math.round(size * 0.028),
    value: Math.round(size * 0.02),
    tooltip: Math.round(size * 0.024),
    area: Math.round(size * 0.028),
  };

  // 라벨 위치 오프셋
  const labelOffset = {
    category: Math.round(size * 0.03), // 0.07에서 0.03으로 줄여서 꼭지점에 더 가깝게
    value: Math.round(size * 0.008),
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

  // 축 끝점 좌표 및 각도 저장 - x축과 y축 중심 분리
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

  const context: RadarChartContext = {
    center: svgCenterX, // x축 중심 (배경 컴포넌트에서 사용)
    radius,
    size,
    jewelSize,
    isJewel,
    fontSize,
    labelOffset,
    categories,
    colorMap,
    points,
    vals,
    fixedColorPairs,
    regionData: regionData || {},
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
        border: '1px solid #BDBDBD',
      }}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className="radar-chart"
    >
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
              d={points.map((pt, i) => {
                if (i === 0) return `M${pt.x},${pt.y}`;
                return `L${pt.x},${pt.y}`;
              }).join(' ') + 'Z'}
              fill="black"
            />
          </mask>
        </defs>
      )}

      {/* 전체 SVG 영역을 표시하는 사각형 */}
      <rect
        x={0}
        y={0}
        width={svgWidth}
        height={svgHeight}
        fill="none"
        stroke="#BDBDBD"
        strokeWidth={1}
        strokeDasharray="3 3"
      />

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
