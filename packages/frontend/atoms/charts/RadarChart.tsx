'use client';

import React from 'react';

type Props = {
  data: number[]; // [0~100] 값 8개
  showGrid?: boolean;
};

const JewelRadarChart = ({ data, showGrid = false }: Props) => {
  const size = 500;
  const center = size / 2;
  const radius = 200;

  // 우상단부터 시계방향으로 재배치된 8개 라벨
  const categories = [
    '생활역동형',
    '안전복원형',
    '인구정착형',
    '경제정속형',
    '생활정주형',
    '안전정진형',
    '인구성장형',
    '경제혁신형',
  ];

  // 축별 메인 색상 매핑
  const colorMap: Record<string, string> = {
    생활역동형: '#ACAAE8',
    생활정주형: '#ACAAE8',
    안전복원형: '#74BF9E',
    안전정진형: '#74BF9E',
    인구정착형: '#F56542',
    인구성장형: '#F56542',
    경제정속형: '#F4B04D',
    경제혁신형: '#F4B04D',
  };

  const numAxes = categories.length;
  const angleStep = (2 * Math.PI) / numAxes;
  const rotation = Math.PI / 4 - (23 * Math.PI) / 180;

  // 값 보정
  const vals = data.slice(0, numAxes);
  while (vals.length < numAxes) vals.push(0);

  // 축 끝점 좌표
  const points = vals.map((value, i) => {
    const angle = -Math.PI / 2 + rotation + i * angleStep;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  });

  // 인구정착형용 연한 빨강
  const lightRed = '#FF7F7F';

  return (
    <svg width={size} height={size}>
      <defs>
        {categories.map((category, i) => {
          const pct = Math.min(100, (vals[i] / 100) * 100);

          // 안전복원형: 중심→70% pct 빨강, 이후 초록
          if (category === '안전복원형') {
            return (
              <radialGradient
                key={i}
                id={`grad${i}`}
                cx={center}
                cy={center}
                r={radius}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#F56542" stopOpacity={1} />
                <stop
                  offset={`${pct * 0.7}%`}
                  stopColor="#F56542"
                  stopOpacity={1}
                />
                <stop offset={`${pct}%`} stopColor="#74BF9E" stopOpacity={1} />
                <stop offset="100%" stopColor="#74BF9E" stopOpacity={1} />
              </radialGradient>
            );
          }

          // 인구정착형: 중심 진한 빨강→값 위치까지 연한 빨강
          if (category === '인구정착형') {
            return (
              <radialGradient
                key={i}
                id={`grad${i}`}
                cx={center}
                cy={center}
                r={radius}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#F56542" stopOpacity={1} />
                <stop offset={`${pct}%`} stopColor={lightRed} stopOpacity={1} />
                <stop offset="100%" stopColor={lightRed} stopOpacity={1} />
              </radialGradient>
            );
          }

          // 경제정속형: 중심→값 위치까지 붉은색→값 위치부터 노랑
          if (category === '경제정속형') {
            return (
              <radialGradient
                key={i}
                id={`grad${i}`}
                cx={center}
                cy={center}
                r={radius}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#F56542" stopOpacity={1} />
                <stop offset={`${pct}%`} stopColor="#F4B04D" stopOpacity={1} />
                <stop offset="100%" stopColor="#F4B04D" stopOpacity={1} />
              </radialGradient>
            );
          }

          // 나머지 축: 자신의 색상 투명→반투명
          const base = colorMap[category];
          return (
            <radialGradient
              key={i}
              id={`grad${i}`}
              cx={center}
              cy={center}
              r={radius}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={base} stopOpacity={0} />
              <stop offset={`${pct}%`} stopColor={base} stopOpacity={0.7} />
              <stop offset="100%" stopColor={base} stopOpacity={0.7} />
            </radialGradient>
          );
        })}
      </defs>

      {/* 보석 삼각형 */}
      {points.map((pt, i) => {
        const next = points[(i + 1) % numAxes];
        return (
          <path
            key={i}
            d={`M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`}
            fill={`url(#grad${i})`}
            fillOpacity={1}
            stroke="white"
            strokeWidth={1}
          />
        );
      })}

      {/* 원형 격자 */}
      {showGrid &&
        [0.25, 0.5, 0.75, 1.0].map((rate, i) => (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={radius * rate}
            fill="none"
            stroke="#AAA"
            strokeWidth={0.5}
          />
        ))}

      {/* 방사형 축선 */}
      {showGrid &&
        Array.from({ length: numAxes }).map((_, i) => {
          const angle = -Math.PI / 2 + rotation + i * angleStep;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#AAA"
              strokeWidth={0.5}
            />
          );
        })}

      {/* 축 라벨 */}
      {categories.map((label, i) => {
        const angle = -Math.PI / 2 + rotation + i * angleStep;
        const x = center + (radius + 20) * Math.cos(angle);
        const y = center + (radius + 20) * Math.sin(angle);

        let textAnchor: 'start' | 'middle' | 'end' = 'middle';
        if (Math.cos(angle) > 0.5) textAnchor = 'start';
        else if (Math.cos(angle) < -0.5) textAnchor = 'end';

        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor={textAnchor}
            dy="1em"
            fontSize="12"
            fill={colorMap[label]}
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
};

export default JewelRadarChart;
