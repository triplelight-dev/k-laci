'use client';

import { CATEGORIES } from '../../../constants/categories';

interface RadarJewelChartMiniProps {
  data: number[];
  size?: number;
  imageUrl?: string;
  hideBackground?: boolean; // 배경 숨기기 옵션 추가
}

const RadarJewelChartMini: React.FC<RadarJewelChartMiniProps> = ({
  data,
  size = 300,
  imageUrl = '/backgrounds/radar_chart_bg.png',
  hideBackground = false, // 기본값은 false
}) => {
  const center = size / 2;
  const radius = size * 0.35;

  // 차트 순서에 맞게 카테고리 배열 생성
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

  const numAxes = categories.length;
  const angleStep = (2 * Math.PI) / numAxes;
  const rotation = Math.PI / 4 - (23 * Math.PI) / 180;

  // 값 보정 - 보석 크기를 더 작게 만들기 위해 값을 조정
  const vals = data.slice(0, numAxes);
  while (vals.length < numAxes) vals.push(0);

  // 축 끝점 좌표 계산
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
    ['#74BF9E', '#59A37D'], // 안전회복형
    ['#F56542', '#D64A2E'], // 인구정착형
    ['#F4B04D', '#D09B3F'], // 경제정속형
    ['#ACAAE8', '#8E8AE5'], // 생활정체형
    ['#74BF9E', '#59A37D'], // 안전정진형
    ['#F56542', '#D64A2E'], // 인구성장형
    ['#F4B04D', '#D09B3F'], // 경제혁신형
  ];

  return (
    <svg
      width={size}
      height={size}
      style={{
        display: 'block',
        margin: 0,
        padding: 0,
      }}
      viewBox={`0 0 ${size} ${size}`}
    >
      <defs>
        {/* 이미지 패턴 정의 */}
        {imageUrl && (
          <pattern
            id="jewelImagePatternMini"
            patternUnits="userSpaceOnUse"
            width={radius * 2}
            height={radius * 2}
            x={center - radius}
            y={center - radius}
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
        <clipPath id="jewelClipPathMini">
          {points.map((pt, i) => {
            const next = points[(i + 1) % numAxes];
            if (!next) return null;

            return (
              <path
                key={i}
                d={`M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`}
              />
            );
          })}
        </clipPath>

        {/* 그라디언트들 */}
        {categories.map((category, i) => {
          if (!category) return null;
          const pct = Math.min(100, ((vals[i] ?? 0) / 100) * 100);
          const [startColor, endColor] = fixedColorPairs[i] ?? ['#000', '#000'];

          if (category === '안전회복형') {
            return (
              <radialGradient
                key={i}
                id={`gradMini${i}`}
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
                id={`gradMini${i}`}
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
                id={`gradMini${i}`}
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
              id={`gradMini${i}`}
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

      {/* 배경 격자 요소들 - hideBackground가 false일 때만 렌더링 */}
      {!hideBackground && (
        <>
          {/* 전체를 둘러싸는 원 (100% 라인) */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#D9D9E8"
            strokeWidth={0.5}
          />

          {/* 중앙 점선 원 (50% 라인) */}
          <circle
            cx={center}
            cy={center}
            r={radius * 0.5}
            fill="none"
            stroke="#D9D9E8"
            strokeWidth={0.5}
            strokeDasharray="2 2"
          />

          {/* 가로 점선 */}
          <line
            x1={center - radius}
            y1={center}
            x2={center + radius}
            y2={center}
            stroke="#CCC"
            strokeWidth={0.5}
            strokeDasharray="4 4"
          />

          {/* 방사형 축선 - 각 카테고리 위치에 맞춤 */}
          {points.map((pt, i) => (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={center + radius * Math.cos(pt.angle)}
              y2={center + radius * Math.sin(pt.angle)}
              stroke="#D9D9E8"
              strokeWidth={0.5}
            />
          ))}
        </>
      )}

      {/* 배경 이미지가 있을 때: 이미지 패턴으로 보석 렌더링 */}
      {imageUrl && (
        <polygon
          points={points.map(pt => `${pt.x},${pt.y}`).join(' ')}
          fill="url(#jewelImagePatternMini)"
        />
      )}

      {/* 배경 이미지가 없을 때: 그라디언트로 보석 렌더링 */}
      {!imageUrl &&
        points.map((pt, i) => {
          const next = points[(i + 1) % numAxes];
          if (!next) return null;

          return (
            <path
              key={i}
              d={`M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`}
              fill={`url(#gradMini${i})`}
              fillOpacity={0.7}
              stroke="none"
              style={{
                transition: 'opacity 0.8s ease, fill-opacity 0.8s ease',
              }}
            />
          );
        })}
    </svg>
  );
};

export default RadarJewelChartMini; 