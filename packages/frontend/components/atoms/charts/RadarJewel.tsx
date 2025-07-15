'use client';

import { RadarChartContext } from './types';

interface RadarJewelProps {
  context: RadarChartContext;
  imageUrl?: string;
}

const RadarJewel = ({ context, imageUrl }: RadarJewelProps) => {
  const { center, radius, categories, points, vals, fixedColorPairs } = context;

  const numAxes = categories.length;
  
  // 배경과 동일한 중심점 사용
  const jewelCenterX = center; // x축 중심 (svgCenterX)
  const jewelCenterY = center - 150; // y축 중심 (svgCenterY 상당)

  return (
    <>
      <defs>
        {/* 이미지 패턴 정의 - 정중앙 정렬을 위해 수정 */}
        {imageUrl && (
          <pattern
            id="jewelImagePattern"
            patternUnits="userSpaceOnUse"
            width={radius * 2}
            height={radius * 2}
            x={jewelCenterX - radius}
            y={jewelCenterY - radius}
          >
            <image
              href={imageUrl}
              width={radius * 2}
              height={radius * 2}
              x="0"
              y="0"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        )}

        {/* 보석 모양 클립패스 정의 */}
        <clipPath id="jewelClipPath">
          {points.map((pt, i) => {
            const next = points[(i + 1) % numAxes];
            if (!next) return null;

            return (
              <path
                key={i}
                d={`M${jewelCenterX},${jewelCenterY} L${pt.x},${pt.y} L${next.x},${next.y} Z`}
              />
            );
          })}
        </clipPath>

        {/* 기존 그라디언트들 */}
        {categories.map((category, i) => {
          if (!category) return null;
          const pct = Math.min(100, ((vals[i] ?? 0) / 100) * 100);
          const [startColor, endColor] = fixedColorPairs[i] ?? ['#000', '#000'];

          if (category === '안전회복형') {
            return (
              <radialGradient
                key={i}
                id={`grad${i}`}
                cx={jewelCenterX}
                cy={jewelCenterY}
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
                cx={jewelCenterX}
                cy={jewelCenterY}
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
                cx={jewelCenterX}
                cy={jewelCenterY}
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
              cx={jewelCenterX}
              cy={jewelCenterY}
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

      {/* 이미지가 있을 때: 이미지 패턴으로 보석 렌더링 */}
      {imageUrl && (
        <g clipPath="url(#jewelClipPath)">
          <rect
            x={jewelCenterX - radius}
            y={jewelCenterY - radius}
            width={radius * 2}
            height={radius * 2}
            fill="url(#jewelImagePattern)"
          />
        </g>
      )}

      {/* 이미지가 없을 때: 기존 그라디언트로 보석 렌더링 */}
      {!imageUrl &&
        points.map((pt, i) => {
          const next = points[(i + 1) % numAxes];
          if (!next) return null;

          return (
            <path
              key={i}
              d={`M${jewelCenterX},${jewelCenterY} L${pt.x},${pt.y} L${next.x},${next.y} Z`}
              fill={`url(#grad${i})`}
              fillOpacity={0.7}
              stroke="none"
              className="jewel-triangle"
              style={{
                transition: 'opacity 0.8s ease, fill-opacity 0.8s ease',
              }}
            />
          );
        })}

      {/* 보석 테두리 완전 제거 */}
    </>
  );
};

export default RadarJewel;
