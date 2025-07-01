'use client';

import RadarBackground from './RadarBackground';
import RadarHoverEffects from './RadarHoverEffects';
import RadarJewel from './RadarJewel';
import { RadarChartContext, RadarChartProps } from './types';

const JewelRadarChart = ({
  data,
  isJewel = false,
  size = 500,
}: RadarChartProps) => {
  const center = size / 2;
  const radius = size * 0.4;
  const jewelSize = isJewel ? radius * 2 : size;

  // 폰트 크기 비율 계산
  const fontSize = {
    category: Math.round(size * 0.028),
    value: Math.round(size * 0.02),
    tooltip: Math.round(size * 0.024),
    area: Math.round(size * 0.028),
  };

  // 라벨 위치 오프셋
  const labelOffset = {
    category: Math.round(size * 0.07),
    value: Math.round(size * 0.008),
  };

  const categories = [
    '생활역동형',
    '안전복원형',
    '인구정착형',
    '경제정속형',
    '생활정체형',
    '안전정진형',
    '인구성장형',
    '경제혁신형',
  ];

  const colorMap: Record<string, string> = {
    생활역동형: '#874FFF',
    생활정체형: '#874FFF',
    안전복원형: '#24CB71',
    안전정진형: '#24CB71',
    인구정착형: '#FF3737',
    인구성장형: '#FF3737',
    경제정속형: '#FFA600',
    경제혁신형: '#FFA600',
  };

  const numAxes = categories.length;
  const angleStep = (2 * Math.PI) / numAxes;
  const rotation = Math.PI / 4 - (23 * Math.PI) / 180;

  // 값 보정
  const vals = data.slice(0, numAxes);
  while (vals.length < numAxes) vals.push(0);

  // 축 끝점 좌표 및 각도 저장
  const points = vals.map((value, i) => {
    const angle = -Math.PI / 2 + rotation + i * angleStep;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
      angle,
    };
  });

  // 두색 그라디언트 쌍
  const fixedColorPairs: [string, string][] = [
    ['#ACAAE8', '#8E8AE5'], // 생활역동형
    ['#74BF9E', '#59A37D'], // 안전복원형
    ['#F56542', '#D64A2E'], // 인구정착형
    ['#F4B04D', '#D09B3F'], // 경제정속형
    ['#ACAAE8', '#8E8AE5'], // 생활정체형
    ['#74BF9E', '#59A37D'], // 안전정진형
    ['#F56542', '#D64A2E'], // 인구성장형
    ['#F4B04D', '#D09B3F'], // 경제혁신형
  ];

  const context: RadarChartContext = {
    center,
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
  };

  return (
    <svg
      width={jewelSize}
      height={jewelSize}
      style={{
        display: 'block',
        margin: 0,
        padding: 0,
        cursor: 'pointer',
      }}
      viewBox={
        isJewel
          ? `${center - radius} ${center - radius} ${radius * 2} ${radius * 2}`
          : `0 0 ${size} ${size}`
      }
      className="radar-chart"
    >
      {/* 라벨 마스크 */}
      {!isJewel && (
        <defs>
          <mask id="labelMask">
            <rect width={jewelSize} height={jewelSize} fill="white" />
            {points.map((pt, i) => {
              const x =
                center + (radius + labelOffset.category) * Math.cos(pt.angle);
              const y =
                center + (radius + labelOffset.category) * Math.sin(pt.angle);
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
        </defs>
      )}

      <RadarBackground context={context} />
      <RadarJewel context={context} />
      <RadarHoverEffects context={context} />
    </svg>
  );
};

export default JewelRadarChart;
