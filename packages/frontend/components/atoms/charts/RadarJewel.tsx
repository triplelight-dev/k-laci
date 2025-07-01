'use client';

import { RadarChartContext } from './types';

interface RadarJewelProps {
  context: RadarChartContext;
}

const RadarJewel = ({ context }: RadarJewelProps) => {
  const {
    center,
    radius,
    isJewel,
    categories,
    points,
    vals,
    fixedColorPairs,
  } = context;

  const numAxes = categories.length;

  return (
    <>
      {/* 그라디언트 정의 */}
      <defs>
        {categories.map((category, i) => {
          if (!category) return null;
          const pct = Math.min(100, (vals[i] ?? 0) / 100 * 100);
          const [startColor, endColor] = fixedColorPairs[i] ?? ['#000', '#000'];

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

      {/* 보석 삼각형 */}
      {points.map((pt, i) => {
        const next = points[(i + 1) % numAxes];
        if (!next) return null;
        
        return (
          <path
            key={i}
            d={`M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`}
            fill={`url(#grad${i})`}
            fillOpacity={0.7}
            stroke="white"
            strokeWidth={1}
            className="jewel-triangle"
            style={{
              transition: 'opacity 0.3s ease',
            }}
          />
        );
      })}
    </>
  );
};

export default RadarJewel; 