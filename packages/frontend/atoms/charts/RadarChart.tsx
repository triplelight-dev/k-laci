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

  // 두색 그라디언트 쌍 (categories 순서와 일치)
  const fixedColorPairs: [string, string][] = [
    ['#ACAAE8', '#8E8AE5'], // 생활역동형
    ['#74BF9E', '#59A37D'], // 안전복원형
    ['#F56542', '#D64A2E'], // 인구정착형
    ['#F4B04D', '#D09B3F'], // 경제정속형
    ['#ACAAE8', '#8E8AE5'], // 생활정주형
    ['#74BF9E', '#59A37D'], // 안전정진형
    ['#F56542', '#D64A2E'], // 인구성장형
    ['#F4B04D', '#D09B3F'], // 경제혁신형
  ];

  return (
    <svg width={size} height={size}>
      <defs>
        {categories.map((category, i) => {
          const pct = Math.min(100, (vals[i] / 100) * 100);
          const [startColor, endColor] = fixedColorPairs[i];

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
                <stop offset="0%" stopColor="#F56542" />
                <stop offset={`${pct * 0.7}%`} stopColor="#F56542" />
                <stop offset={`${pct}%`} stopColor="#74BF9E" />
                <stop offset="100%" stopColor="#74BF9E" />
              </radialGradient>
            );
          }
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
                <stop offset="0%" stopColor="#F56542" />
                <stop
                  offset={`${pct}%`}
                  stopColor="#F56542"
                  stopOpacity={0.5}
                />
                <stop offset="100%" stopColor="#F56542" stopOpacity={0.5} />
              </radialGradient>
            );
          }
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
                <stop offset="0%" stopColor="#F56542" />
                <stop offset={`${pct}%`} stopColor="#F4B04D" />
                <stop offset="100%" stopColor="#F4B04D" />
              </radialGradient>
            );
          }
          return (
            <radialGradient
              key={i}
              id={`grad${i}`}
              cx={center}
              cy={center}
              r={radius}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={startColor} />
              <stop offset={`${pct}%`} stopColor={endColor} />
              <stop offset="100%" stopColor={endColor} />
            </radialGradient>
          );
        })}
      </defs>

      {/* 💎 보석 삼각형 */}
      {points.map((pt, i) => {
        const next = points[(i + 1) % numAxes];
        return (
          <path
            key={i}
            d={`M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`}
            fill={`url(#grad${i})`}
            fillOpacity={0.7}
            stroke="white"
            strokeWidth={1}
          />
        );
      })}

      {/* 🌀 원형 격자 (5개: 20,40,60,80,100) */}
      {showGrid &&
        [0.2, 0.4, 0.6, 0.8, 1.0].map((rate, i) => (
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

      {/* ⚪ 방사형 축선 */}
      {showGrid &&
        points.map((pt, i) => (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={center + radius * Math.cos(pt.angle)}
            y2={center + radius * Math.sin(pt.angle)}
            stroke="#AAA"
            strokeWidth={0.5}
          />
        ))}

      {/* ➕ 십자형 점선 + 값 라벨 */}
      {showGrid && (
        <>
          <line
            x1={center - radius}
            y1={center}
            x2={center + radius}
            y2={center}
            stroke="#CCC"
            strokeWidth={0.5}
            strokeDasharray="4 4"
          />
          <line
            x1={center}
            y1={center - radius}
            x2={center}
            y2={center + radius}
            stroke="#CCC"
            strokeWidth={0.5}
            strokeDasharray="4 4"
          />
          {/* 0 중앙에 한 번만 */}
          <text
            x={center}
            y={center}
            textAnchor="middle"
            dy="0.35em"
            fontSize={10}
            fill="#CCC"
          >
            0
          </text>
          {[20, 40, 60, 80, 100].map((val) => {
            const r = (val / 100) * radius;
            return (
              <g key={val}>
                <text
                  x={center + r}
                  y={center}
                  dx="4"
                  dy="0.35em"
                  fontSize={10}
                  fill="#CCC"
                >
                  {val}
                </text>
                <text
                  x={center - r}
                  y={center}
                  dx="-4"
                  dy="0.35em"
                  textAnchor="end"
                  fontSize={10}
                  fill="#CCC"
                >
                  {val}
                </text>
                <text
                  x={center}
                  y={center + r}
                  dy="1.2em"
                  textAnchor="middle"
                  fontSize={10}
                  fill="#CCC"
                >
                  {val}
                </text>
                <text
                  x={center}
                  y={center - r}
                  dy="-0.3em"
                  textAnchor="middle"
                  fontSize={10}
                  fill="#CCC"
                >
                  {val}
                </text>
              </g>
            );
          })}
        </>
      )}

      {/* 🏷️ 축 라벨 */}
      {points.map((pt, i) => {
        let deg = (pt.angle * 180) / Math.PI + 90;
        if (deg > 180) deg -= 180;
        if (
          ['경제혁신형', '인구성장형', '경제정속형', '인구정착형'].includes(
            categories[i],
          )
        ) {
          deg += 180;
        }
        const x = center + (radius + 30) * Math.cos(pt.angle);
        const y = center + (radius + 30) * Math.sin(pt.angle);

        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dy="0.4em"
            fontSize={16}
            fontWeight="bold"
            fill={colorMap[categories[i]]}
            transform={`rotate(${deg} ${x} ${y})`}
          >
            {categories[i]}
          </text>
        );
      })}
    </svg>
  );
};

export default JewelRadarChart;
