import React from 'react';

type GradientType =
  | 'radial-center-to-edge'
  | 'radial-edge-to-center'
  | 'linear-base-to-center'
  | 'linear-center-to-base';

type ColorDefinition = {
  startColor: string;
  endColor: string;
  gradientType: GradientType;
};

type Props = {
  data: number[]; // [0~100] 값 7개
  labels?: string[]; // 항목 라벨 7개
  showGrid?: boolean; // 레이더 원 표시 여부
};

const JewelRadarChart = ({ data, labels, showGrid = false }: Props) => {
  const size = 500;
  const center = size / 2;
  const radius = 200;

  const categories = labels || [
    '경제혁신형',
    '생활역동형',
    '안전복원형',
    '인구성장형',
    '경제정속형',
    '생활정주형',
    '안전정진형',
  ];

  const numAxes = categories.length;
  const angleStep = (2 * Math.PI) / numAxes;

  // ⭕️ 점 좌표 계산
  const points = data.map((value, i) => {
    const angle = -Math.PI / 2 + i * angleStep;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  });

  // 🎨 각 삼각형의 시작색 → 끝색 정의 및 그라데이션 타입 지정
  // 사용자 요청에 맞춰 '다른 색으로 변하게' 하면서 명확한 색상 전환을 시도했던 버전 (클리핑 전)
  const fixedColorDefinitions: ColorDefinition[] = [
    // [0] 경제혁신형: 빨강 → 초록
    {
      startColor: '#F56542',
      endColor: '#C2BDF3',
      gradientType: 'radial-center-to-edge',
    },
    // [1] 생활역동형: 초록 → 노랑
    {
      startColor: '#F56542',
      endColor: '#FFFF00',
      gradientType: 'linear-base-to-center',
    },
    // [2] 안전복원형: 보라 → 노랑
    {
      startColor: '#800080',
      endColor: '#FFFF00',
      gradientType: 'radial-edge-to-center',
    },
    // [3] 인구성장형: 파랑 → 주황
    {
      startColor: '#0000FF',
      endColor: '#C2BDF3',
      gradientType: 'linear-center-to-base',
    },
    // [4] 경제정속형: 시안(청록) → 마젠타(자홍)
    {
      startColor: '#00FFFF',
      endColor: '#FF00FF',
      gradientType: 'radial-center-to-edge',
    },
    // [5] 생활정주형: 주황 → 파랑
    {
      startColor: '#FFA500',
      endColor: '#0000FF',
      gradientType: 'linear-base-to-center',
    },
    // [6] 안전정진형: 마젠타(자홍) → 초록
    {
      startColor: '#FF00FF',
      endColor: '#74BF9E',
      gradientType: 'radial-edge-to-center',
    },
  ];

  // 레이더 차트의 외곽선을 정의하는 clipPath
  // 이는 모든 데이터 포인트의 외부 경계를 따라가는 다각형이 될 것입니다.
  // 이 버전에서는 아직 <g>에 적용되지 않았습니다.
  const radarOutlinePath =
    points.map((p, idx) => `${idx === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') +
    'Z';

  return (
    <svg width={size} height={size}>
      <defs>
        {/* 각 삼각형에 적용될 다양한 타입의 그라데이션 정의 */}
        {points.map((point, i) => {
          const { startColor, endColor, gradientType } =
            fixedColorDefinitions[i % fixedColorDefinitions.length];
          const nextPoint = points[(i + 1) % numAxes];

          const baseMidX = (point.x + nextPoint.x) / 2;
          const baseMidY = (point.y + nextPoint.y) / 2;

          // 이 버전에서는 opacity를 높여 '흰색으로 변하는' 느낌을 줄였지만,
          // 아직 clipPath 적용 전이므로 블러 효과가 외곽으로 번질 수 있습니다.
          const opaqueStartOpacity = 0.8; // 시작 색상 투명도 (덜 투명)
          const opaqueEndOpacity = 1.0; // 끝 색상 투명도 (완전 불투명)

          if (gradientType === 'radial-center-to-edge') {
            return (
              <radialGradient
                key={i}
                id={`grad${i}`}
                cx={center}
                cy={center}
                r={radius}
                fx={center}
                fy={center}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor={startColor}
                  stopOpacity={opaqueStartOpacity}
                />
                <stop
                  offset="100%"
                  stopColor={endColor}
                  stopOpacity={opaqueEndOpacity}
                />
              </radialGradient>
            );
          } else if (gradientType === 'radial-edge-to-center') {
            return (
              <radialGradient
                key={i}
                id={`grad${i}`}
                cx={center}
                cy={center}
                r={radius}
                fx={center}
                fy={center}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor={endColor}
                  stopOpacity={opaqueEndOpacity}
                />
                <stop
                  offset="100%"
                  stopColor={startColor}
                  stopOpacity={opaqueStartOpacity}
                />
              </radialGradient>
            );
          } else if (gradientType === 'linear-base-to-center') {
            return (
              <linearGradient
                key={i}
                id={`grad${i}`}
                x1={baseMidX}
                y1={baseMidY}
                x2={center}
                y2={center}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor={endColor}
                  stopOpacity={opaqueEndOpacity}
                />
                <stop
                  offset="100%"
                  stopColor={startColor}
                  stopOpacity={opaqueStartOpacity}
                />
              </linearGradient>
            );
          } else if (gradientType === 'linear-center-to-base') {
            return (
              <linearGradient
                key={i}
                id={`grad${i}`}
                x1={center}
                y1={center}
                x2={baseMidX}
                y2={baseMidY}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor={startColor}
                  stopOpacity={opaqueStartOpacity}
                />
                <stop
                  offset="100%"
                  stopColor={endColor}
                  stopOpacity={opaqueEndOpacity}
                />
              </linearGradient>
            );
          }
          return null;
        })}

        {/* 블렌딩 효과를 위한 SVG 필터 정의 */}
        <filter
          id="blendingFilter"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="25"
            result="blurred"
          />
          <feBlend in="SourceGraphic" in2="blurred" mode="screen" />
        </filter>

        {/* 이 버전에서는 clipPath가 정의는 되어 있지만, <g>에 아직 적용되지 않았습니다. */}
        <clipPath id="radarClipPath">
          <path d={radarOutlinePath} />
        </clipPath>
      </defs>

      {/* 🌀 격자 원 */}
      {showGrid &&
        [0.25, 0.5, 0.75, 1.0].map((ratio, i) => (
          <circle
            key={`grid-${i}`}
            cx={center}
            cy={center}
            r={radius * ratio}
            fill="none"
            stroke="#ccc"
            strokeWidth={0.5}
          />
        ))}

      {/* ⚪ 방사형 축 */}
      {showGrid &&
        categories.map((_, i) => {
          const angle = -Math.PI / 2 + i * angleStep;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);

          return (
            <line
              key={`axis-${i}`}
              x1={center}
              y1={center}
              y2={y}
              x2={x}
              stroke="#ccc"
              strokeWidth={0.5}
            />
          );
        })}

      {/* 💎 보석 삼각형 조각들을 그룹으로 묶고 필터 적용 */}
      {/* 이 버전에서는 clipPath="url(#radarClipPath)"가 아직 <g>에 적용되지 않았습니다. */}
      <g filter="url(#blendingFilter)">
        {points.map((point, i) => {
          const next = points[(i + 1) % numAxes];
          return (
            <path
              key={i}
              d={`M${center},${center} L${point.x},${point.y} L${next.x},${next.y} Z`}
              fill={`url(#grad${i})`}
              fillOpacity={1.0} // 삼각형 자체의 투명도를 1.0으로 설정하여 필터가 더 잘 작동하도록 함
            />
          );
        })}
      </g>

      {/* 🏷️ 라벨 */}
      {categories.map((label, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        const x = center + (radius + 20) * Math.cos(angle);
        const y = center + (radius + 20) * Math.sin(angle);

        let textAnchor = 'middle';
        let dy = '0.35em';

        if (Math.abs(Math.cos(angle)) > 0.8) {
          textAnchor = Math.cos(angle) > 0 ? 'start' : 'end';
          dy = '0.35em';
        } else if (Math.abs(Math.sin(angle)) > 0.8) {
          textAnchor = 'middle';
          dy = Math.sin(angle) > 0 ? '1em' : '-0.3em';
        } else {
          if (Math.cos(angle) > 0 && Math.sin(angle) < 0) {
            // 우상단
            textAnchor = 'start';
            dy = '-0.3em';
          } else if (Math.cos(angle) < 0 && Math.sin(angle) < 0) {
            // 좌상단
            textAnchor = 'end';
            dy = '-0.3em';
          } else if (Math.cos(angle) < 0 && Math.sin(angle) > 0) {
            // 좌하단
            textAnchor = 'end';
            dy = '1em';
          } else if (Math.cos(angle) > 0 && Math.sin(angle) > 0) {
            // 우하단
            textAnchor = 'start';
            dy = '1em';
          }
        }

        return (
          <text
            key={`label-${i}`}
            x={x}
            y={y}
            textAnchor={textAnchor}
            dy={dy}
            fontSize="12"
            fill="#444"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
};

export default JewelRadarChart;
