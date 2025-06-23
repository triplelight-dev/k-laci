'use client';

import React from 'react';

type Props = {
  data: number[]; // [0~100] 값 8개
  isJewel?: boolean; // 보석 요소만 보이도록 하는 prop
  size?: number; // 차트의 전체 크기 (width, height)
};

const JewelRadarChart = ({ data, isJewel = false, size = 500 }: Props) => {
  const center = size / 2;
  const radius = size * 0.4;

  // isJewel일 때의 실제 크기 계산 (보석 크기만큼만)
  const jewelSize = isJewel ? radius * 2 : size;

  // 폰트 크기 비율 계산 (기존 크기 기준)
  const fontSize = {
    category: Math.round(size * 0.032), // 기존 16px (500px 기준)
    value: Math.round(size * 0.02), // 기존 10px (500px 기준)
  };

  // 라벨 위치 오프셋도 size에 비례하도록 조정
  const labelOffset = {
    category: Math.round(size * 0.06), // 기존 30px (500px 기준)
    value: Math.round(size * 0.008), // 기존 4px (500px 기준)
  };

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
    생활역동형: '#874FFF',
    생활정주형: '#874FFF',
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
    <svg
      width={jewelSize}
      height={jewelSize}
      style={{
        display: 'block',
        margin: 0,
        padding: 0,
      }}
      viewBox={
        isJewel
          ? `${center - radius} ${center - radius} ${radius * 2} ${radius * 2}`
          : `0 0 ${size} ${size}`
      }
    >
      {/* 오른쪽 반원 배경 (0도 ~ 180도) - radius 크기까지만 */}
      {!isJewel && (
        <>
          <path
            d={`M ${center} ${center} 
                L ${center + radius * Math.cos(0)} ${center + radius * Math.sin(0)}
                A ${radius} ${radius} 0 0 1 
                ${center + radius * Math.cos(Math.PI)} ${center + radius * Math.sin(Math.PI)}
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
            fill="#F4F4F4"
            mask="url(#labelMask)"
          />
        </>
      )}

      <defs>
        <mask id="labelMask">
          <rect width={jewelSize} height={jewelSize} fill="white" />
          {/* 라벨 영역을 검은색으로 마스킹 */}
          {!isJewel &&
            points.map((pt, i) => {
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
      {!isJewel &&
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
      {!isJewel &&
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
      {!isJewel && (
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
            fontSize={fontSize.value}
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
                  dx={labelOffset.value}
                  dy="0.35em"
                  fontSize={fontSize.value}
                  fill="#CCC"
                >
                  {val}
                </text>
                <text
                  x={center - r}
                  y={center}
                  dx={-labelOffset.value}
                  dy="0.35em"
                  textAnchor="end"
                  fontSize={fontSize.value}
                  fill="#CCC"
                >
                  {val}
                </text>
                <text
                  x={center}
                  y={center + r}
                  dy="1.2em"
                  textAnchor="middle"
                  fontSize={fontSize.value}
                  fill="#CCC"
                >
                  {val}
                </text>
                <text
                  x={center}
                  y={center - r}
                  dy="-0.3em"
                  textAnchor="middle"
                  fontSize={fontSize.value}
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
      {!isJewel &&
        points.map((pt, i) => {
          let deg = (pt.angle * 180) / Math.PI + 90;
          if (deg > 180) deg -= 180;
          if (
            ['경제혁신형', '인구성장형', '경제정속형', '인구정착형'].includes(
              categories[i],
            )
          ) {
            deg += 180;
          }
          const x =
            center + (radius + labelOffset.category) * Math.cos(pt.angle);
          const y =
            center + (radius + labelOffset.category) * Math.sin(pt.angle);

          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dy="0.4em"
              fontSize={fontSize.category}
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
