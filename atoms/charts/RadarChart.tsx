import React from 'react';

type Props = {
  data: number[]; // [0~100] 값 7개
  labels?: string[]; // 항목 라벨 7개
  showGrid?: boolean; // 레이더 원 표시 여부
};

const JewelRadarChart = ({ data, labels, showGrid = false }: Props) => {
  const size = 500;
  const center = size / 2;
  const radius = 200;

  // 이미지에 보이는 라벨을 기준으로 categories 업데이트
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

  // 🎨 각 삼각형의 시작색 → 끝색 정의
  // 이미지에 나타난 색상 흐름을 기반으로 조정
  // 시작색(차트 중심부)은 투명도를 높게, 끝색(바깥쪽)은 투명도를 낮게 설정하여 겹침 블렌딩 유도
  const fixedColorDefinitions: { startColor: string; endColor: string }[] = [
    // [0] 경제혁신형: 빨강 계열
    { startColor: '#FFDCDC', endColor: '#C2255C' }, // 연한 빨강 -> 자홍 (강조)
    // [1] 생활역동형: 보라~파랑 계열
    { startColor: '#E6E6FA', endColor: '#5F3DC4' }, // 연한 보라 -> 진한 보라
    // [2] 안전복원형: 청록 계열
    { startColor: '#D1F5F6', endColor: '#3BC9DB' }, // 연한 청록 -> 진한 청록
    // [3] 인구성장형 (오른쪽 상단): 연두~노랑 계열 (이미지에서 초록색과 노란색이 섞이는 부분)
    { startColor: '#F0FFF0', endColor: '#63E6BE' }, // 연한 초록 -> 민트 (인구성장형은 이미지에서 주황색과 초록색이 섞이는 곳)
    // [4] 경제정속형: 노랑~주황 계열
    { startColor: '#FFFACD', endColor: '#FAB005' }, // 연한 노랑 -> 진한 주황
    // [5] 생활정주형: 주황~빨강 계열
    { startColor: '#FFE8D4', endColor: '#FF922B' }, // 연한 주황 -> 진한 주황
    // [6] 안전정진형 (왼쪽 하단): 빨강~자홍 계열 (이미지에서 빨간색과 자홍색이 섞이는 부분)
    { startColor: '#FFE3E3', endColor: '#FF6B6B' }, // 연한 빨강 -> 진한 빨강
  ];

  return (
    <svg width={size} height={size}>
      <defs>
        {/* 각 삼각형에 적용될 방사형 그라데이션 정의 */}
        {points.map((_, i) => {
          const { startColor, endColor } =
            fixedColorDefinitions[i % fixedColorDefinitions.length];
          return (
            <radialGradient
              key={i}
              id={`grad${i}`}
              cx={center} // 그라데이션 중심 x (차트 중심)
              cy={center} // 그라데이션 중심 y (차트 중심)
              r={radius} // 그라데이션 반경 (차트의 최대 반경)
              fx={center} // focal point x (그라데이션 시작 지점 x, 여기서는 cx, cy와 동일)
              fy={center} // focal point y (그라데이션 시작 지점 y, 여기서는 cx, cy와 동일)
              gradientUnits="userSpaceOnUse" // 사용자 공간 좌표 사용 (절대 위치)
            >
              {/* 중심에서 시작하는 색상 (거의 투명하게 설정하여 다른 삼각형과 블렌딩 유도) */}
              <stop offset="0%" stopColor={startColor} stopOpacity="0.05" />
              {/* 바깥으로 갈수록 진해지는 색상 (충분히 불투명하게 설정) */}
              <stop offset="100%" stopColor={endColor} stopOpacity="0.85" />
            </radialGradient>
          );
        })}

        {/* 모든 삼각형의 블렌딩 효과를 위한 SVG 필터 정의 */}
        {/* 이 필터는 아래 <g> 요소에 적용되어 모든 삼각형을 하나의 이미지처럼 처리 */}
        <filter
          id="blendingFilter"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          {/* 1단계: SourceGraphic (모든 삼각형이 합쳐진 이미지)에 가우시안 블러 적용 */}
          {/* stdDeviation 값을 조절하여 흐림 정도(블렌딩 강도)를 조정 */}
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="25"
            result="blurred"
          />

          {/* 2단계: 블러된 결과와 원본 SourceGraphic을 혼합 (선택 사항, 효과 조절) */}
          {/* 'screen' 모드는 색상을 밝게 혼합하여 수채화 같은 느낌을 줍니다. */}
          {/* 'multiply' 모드는 어둡게 혼합하며, 'overlay' 등 다른 모드도 시도 가능 */}
          <feBlend in="SourceGraphic" in2="blurred" mode="screen" />
        </filter>
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
          const y = center + radius * Math.sin(angle); // 축 라벨이 원에 가까이 붙도록 +20 제거

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
      {/* 이 <g> 태그에 filter 속성을 적용하여 모든 path에 블렌딩 효과를 한 번에 적용 */}
      <g filter="url(#blendingFilter)">
        {points.map((point, i) => {
          const next = points[(i + 1) % numAxes];
          return (
            <path
              key={i}
              d={`M${center},${center} L${point.x},${point.y} L${next.x},${next.y} Z`}
              fill={`url(#grad${i})`} // 개별 방사형 그라데이션 적용
              fillOpacity={0.9} // 삼각형 자체의 투명도를 높여 블렌딩 효과 강화
              // stroke="none" // <-- 이미지처럼 외곽선 제거 (선택 사항)
              // strokeWidth={0}
            />
          );
        })}
      </g>

      {/* 🏷️ 라벨 */}
      {categories.map((label, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        // 라벨 위치를 원 바깥으로 적당히 떨어뜨림
        const x = center + (radius + 20) * Math.cos(angle);
        const y = center + (radius + 20) * Math.sin(angle);

        let textAnchor = 'middle';
        let dy = '0.35em'; // 텍스트를 수직 중앙에 맞춤

        // 라벨이 축에 따라 정렬되도록 조정
        // 각도를 기반으로 text-anchor 및 dy (수직 위치 조정) 결정
        if (Math.abs(Math.cos(angle)) > 0.8) {
          // 좌우 극한
          textAnchor = Math.cos(angle) > 0 ? 'start' : 'end';
          dy = '0.35em';
        } else if (Math.abs(Math.sin(angle)) > 0.8) {
          // 상하 극한
          textAnchor = 'middle';
          dy = Math.sin(angle) > 0 ? '1em' : '-0.3em';
        } else {
          // 대각선
          // 대각선 방향에 따라 미세 조정
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
