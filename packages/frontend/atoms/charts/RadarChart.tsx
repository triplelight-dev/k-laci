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
  data: number[]; // [0~100] 값 8개 (기대값)
  labels?: string[]; // 항목 라벨 8개
  showGrid?: boolean; // 레이더 원 표시 여부
};

const JewelRadarChart = ({ data, labels, showGrid = false }: Props) => {
  const size = 500;
  const center = size / 2;
  const radius = 200;

  // 항목 수를 8개로 고정하거나 props.labels 길이에 맞춤
  const categories = labels || [
    '경제혁신형',
    '생활역동형',
    '안전복원형',
    '인구성장형',
    '경제정속형',
    '생활정주형',
    '안전정진형',
    '새로운항목', // 8번째 항목 추가 (혹은 실제 라벨 사용)
  ];

  const numAxes = categories.length; // 이제 8이 됩니다.
  const angleStep = (2 * Math.PI) / numAxes;

  // **핵심 수정: data 배열 길이 보정**
  // data 배열의 길이가 numAxes보다 짧으면 0으로 채워서 오류 방지
  const processedData = [...data];
  while (processedData.length < numAxes) {
    processedData.push(0); // 부족한 데이터는 0으로 채움
  }

  // ⭕️ 점 좌표 계산 - 이제 processedData를 사용합니다.
  const points = processedData.map((value, i) => {
    const angle = -Math.PI / 2 + i * angleStep;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  });

  // 🎨 각 삼각형의 시작색 → 끝색 정의 및 그라데이션 타입 지정
  // 8번째 항목에 대한 색상 정의 추가
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
    // [7] 새로운항목: 연한 파랑 → 진한 파랑 (8번째 항목 추가)
    {
      startColor: '#87CEEB',
      endColor: '#4169E1',
      gradientType: 'linear-center-to-base',
    },
  ];

  // 레이더 차트의 외곽선을 정의하는 clipPath
  // points 배열이 항상 numAxes 길이를 가지므로 안전합니다.
  const radarOutlinePath =
    points.map((p, idx) => `${idx === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') +
    'Z';

  return (
    <svg width={size} height={size}>
      <defs>
        {/* 각 삼각형에 적용될 다양한 타입의 그라데이션 정의 */}
        {points.map((point, i) => {
          // 이제 points는 항상 numAxes 길이를 가짐
          const { startColor, endColor, gradientType } =
            fixedColorDefinitions[i % fixedColorDefinitions.length];
          const nextPoint = points[(i + 1) % numAxes]; // nextPoint도 항상 정의됨

          const baseMidX = (point.x + nextPoint.x) / 2;
          const baseMidY = (point.y + nextPoint.y) / 2;

          const opaqueStartOpacity = 0.8;
          const opaqueEndOpacity = 1.0;

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

        {/* clipPath 적용: 이제 <g>에 적용될 것입니다. */}
        <clipPath id="radarClipPath">
          <path d={radarOutlinePath} />
        </clipPath>
      </defs>

      {/* 💎 보석 삼각형 조각들을 그룹으로 묶고 필터와 clipPath 적용 */}
      {/* clipPath="url(#radarClipPath)"가 이제 <g>에 적용됩니다. */}
      <g filter="url(#blendingFilter)" clipPath="url(#radarClipPath)">
        {points.map((point, i) => {
          const next = points[(i + 1) % numAxes];
          return (
            <path
              key={i}
              d={`M${center},${center} L${point.x},${point.y} L${next.x},${next.y} Z`}
              fill={`url(#grad${i})`}
              fillOpacity={1.0}
            />
          );
        })}
      </g>

      {/* 🌀 격자 원 */}
      {showGrid &&
        [0.25, 0.5, 0.75, 1.0].map((ratio, i) => (
          <circle
            key={`grid-${i}`}
            cx={center}
            cy={center}
            r={radius * ratio}
            fill="none"
            stroke="#6c676746"
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

      {/* 🏷️ 라벨 */}
      {categories.map((label, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        const x = center + (radius + 20) * Math.cos(angle);
        const y = center + (radius + 20) * Math.sin(angle);

        let textAnchor = 'middle';
        let dy = '0.35em';

        // 8개 항목에 맞춰 라벨 위치 조정 로직 재검토 (필요 시)
        // 현재 로직은 모든 각도에 대해 작동하지만, 8개 항목에서 라벨이 겹치지 않도록
        // 미세 조정이 필요할 수 있습니다.
        if (Math.abs(Math.cos(angle)) > 0.8) {
          // 수평에 가까운 축 (0도, 180도)
          textAnchor = Math.cos(angle) > 0 ? 'start' : 'end';
          dy = '0.35em';
        } else if (Math.abs(Math.sin(angle)) > 0.8) {
          // 수직에 가까운 축 (90도, 270도)
          textAnchor = 'middle';
          dy = Math.sin(angle) > 0 ? '1em' : '-0.3em';
        } else {
          // 대각선 축
          if (Math.cos(angle) > 0 && Math.sin(angle) < 0) {
            // 우상단 (45도)
            textAnchor = 'start';
            dy = '-0.3em';
          } else if (Math.cos(angle) < 0 && Math.sin(angle) < 0) {
            // 좌상단 (135도)
            textAnchor = 'end';
            dy = '-0.3em';
          } else if (Math.cos(angle) < 0 && Math.sin(angle) > 0) {
            // 좌하단 (225도)
            textAnchor = 'end';
            dy = '1em';
          } else if (Math.cos(angle) > 0 && Math.sin(angle) > 0) {
            // 우하단 (315도)
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

      {/* 방사선 값 표기 (0 ~ 100, 20 단위, 십자형 점선으로) */}
      {showGrid &&
        [0, 20, 40, 60, 80, 100].map((value) => {
          const r = (value / 100) * radius; // 해당 값에 대한 반지름
          const textOffset = 5; // 텍스트를 축에서 약간 띄울 거리

          // 십자형으로 4개의 주요 방향에 값을 표기 (radian 값)
          // 270도 (-Math.PI / 2), 0도 (0), 90도 (Math.PI / 2), 180도 (Math.PI)
          const cardinalAngles = [
            -Math.PI / 2, // 270도 (위)
            0, // 0도 (오른쪽)
            Math.PI / 2, // 90도 (아래)
            Math.PI, // 180도 (왼쪽)
          ];

          return cardinalAngles.map((angle, angleIdx) => {
            // 텍스트 위치 계산
            const textX = center + (r + textOffset) * Math.cos(angle);
            const textY = center + (r + textOffset) * Math.sin(angle);

            let textAnchor = 'middle';
            let dy = '0.35em'; // 기본 값

            // 텍스트 정렬 및 위치 미세 조정
            if (angle === 0) {
              // 0도 (오른쪽)
              textAnchor = 'start';
              dy = '0.35em';
            } else if (angle === Math.PI / 2) {
              // 90도 (아래)
              textAnchor = 'middle';
              dy = '1.2em';
            } else if (angle === Math.PI) {
              // 180도 (왼쪽)
              textAnchor = 'end';
              dy = '0.35em';
            } else if (angle === -Math.PI / 2) {
              // 270도 (위)
              textAnchor = 'middle';
              dy = '-0.5em';
            }

            // 0 값은 중앙에만 표시 (가장 위쪽 축)
            if (value === 0 && angle !== -Math.PI / 2) return null; // 0은 270도(위)에서만 표시

            // 0 값의 경우 텍스트를 중심에 가깝게
            // 0은 항상 위쪽 축에만 표시하므로, 그 위치를 고정
            const finalTextX =
              value === 0 && angle === -Math.PI / 2 ? center : textX;
            const finalTextY =
              value === 0 && angle === -Math.PI / 2 ? center + 15 : textY; // 0은 항상 중심에서 약간 아래에

            return (
              <React.Fragment key={`value-${value}-${angleIdx}`}>
                {/* 값 텍스트 */}
                <text
                  x={finalTextX}
                  y={finalTextY}
                  textAnchor={textAnchor}
                  dy={dy}
                  fontSize="10"
                  fill="#888"
                >
                  {value}
                </text>

                {/* 점선 (0이 아닌 값에 대해서만 십자형 축에 그리기) */}
                {value !== 0 && (
                  <line
                    x1={center + r * Math.cos(angle)}
                    y1={center + r * Math.sin(angle)}
                    x2={center + (r + textOffset - 2) * Math.cos(angle)} // 텍스트 바로 앞까지
                    y2={center + (r + textOffset - 2) * Math.sin(angle)}
                    stroke="#888" // 점선 색상
                    strokeWidth={0.5}
                    strokeDasharray="2 2" // 점선 패턴 (2px 선, 2px 간격)
                  />
                )}
              </React.Fragment>
            );
          });
        })}
    </svg>
  );
};

export default JewelRadarChart;
