'use client';

import { useState } from 'react';

type Props = {
  data: number[]; // [0~100] 값 8개
  isJewel?: boolean; // 보석 요소만 보이도록 하는 prop
  size?: number; // 차트의 전체 크기 (width, height)
};

const JewelRadarChart = ({ data, isJewel = false, size = 500 }: Props) => {
  const [hoveredArea, setHoveredArea] = useState<'top' | 'bottom' | null>(null);

  const center = size / 2;
  const radius = size * 0.4;

  // isJewel일 때의 실제 크기 계산 (보석 크기만큼만)
  const jewelSize = isJewel ? radius * 2 : size;

  // 폰트 크기 비율 계산 (기존 크기 기준)
  const fontSize = {
    category: Math.round(size * 0.032), // 기존 16px (500px 기준)
    value: Math.round(size * 0.02), // 기존 10px (500px 기준)
    tooltip: Math.round(size * 0.024), // 툴팁용 12px (500px 기준)
    area: Math.round(size * 0.028), // 영역 툴팁용 14px (500px 기준)
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
        cursor: 'pointer',
      }}
      viewBox={
        isJewel
          ? `${center - radius} ${center - radius} ${radius * 2} ${radius * 2}`
          : `0 0 ${size} ${size}`
      }
      className="radar-chart"
    >
      {/* 기존 오른쪽 반원 배경 (0도 ~ 180도) - radius 크기까지만 */}
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

        {/* 호버 효과를 위한 마스크들 */}
        <mask id="hoverTopMask">
          <rect width={jewelSize} height={jewelSize} fill="white" />
          {/* 180도 가로선 아래쪽을 검은색으로 마스킹 (위쪽만 보이게) */}
          <rect
            x={center - radius}
            y={center}
            width={radius * 2}
            height={radius}
            fill="black"
          />
        </mask>

        <mask id="hoverBottomMask">
          <rect width={jewelSize} height={jewelSize} fill="white" />
          {/* 180도 가로선 위쪽을 검은색으로 마스킹 (아래쪽만 보이게) */}
          <rect
            x={center - radius}
            y={0}
            width={radius * 2}
            height={center}
            fill="black"
          />
        </mask>

        {/* 호버 효과를 위한 스타일 */}
        <style>
          {`
            .radar-chart:hover .jewel-triangle {
              opacity: 0 !important;
            }
            .radar-chart:hover .hover-top-overlay {
              opacity: 1 !important;
            }
            .radar-chart:hover .hover-bottom-overlay {
              opacity: 1 !important;
            }
            .radar-chart:hover .data-point {
              opacity: 1 !important;
            }
            .radar-chart:hover .data-point:hover {
              r: 6 !important;
              stroke-width: 2 !important;
            }
          `}
        </style>

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

      {/* 호버 효과를 위한 오버레이 레이어들 */}
      {!isJewel && (
        <>
          {/* 상단 오버레이 (파란색) */}
          <g mask="url(#hoverTopMask)">
            {points.map((pt, i) => {
              const next = points[(i + 1) % numAxes];
              if (!next) return null;
              
              return (
                <path
                  key={`top-${i}`}
                  d={`M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`}
                  fill="#3352D7"
                  fillOpacity={1}
                  stroke="white"
                  strokeWidth={1}
                  className="hover-top-overlay"
                  style={{
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />
              );
            })}
          </g>

          {/* 하단 오버레이 (회색) */}
          <g mask="url(#hoverBottomMask)">
            {points.map((pt, i) => {
              const next = points[(i + 1) % numAxes];
              if (!next) return null;
              
              return (
                <path
                  key={`bottom-${i}`}
                  d={`M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`}
                  fill="#95A6C1"
                  fillOpacity={1}
                  stroke="white"
                  strokeWidth={1}
                  className="hover-bottom-overlay"
                  style={{
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />
              );
            })}
          </g>
        </>
      )}

      {/* 투명한 호버 영역들 */}
      {!isJewel && (
        <>
          {/* 상단 호버 영역 */}
          <path
            d={`M ${center - radius} ${center - radius} 
                L ${center + radius} ${center - radius}
                L ${center + radius} ${center}
                L ${center - radius} ${center}
                Z`}
            fill="transparent"
            onMouseEnter={() => setHoveredArea('top')}
            onMouseLeave={() => setHoveredArea(null)}
            style={{ cursor: 'pointer' }}
          />
          
          {/* 하단 호버 영역 */}
          <path
            d={`M ${center - radius} ${center} 
                L ${center + radius} ${center}
                L ${center + radius} ${center + radius}
                L ${center - radius} ${center + radius}
                Z`}
            fill="transparent"
            onMouseEnter={() => setHoveredArea('bottom')}
            onMouseLeave={() => setHoveredArea(null)}
            style={{ cursor: 'pointer' }}
          />
        </>
      )}

      {/* 📍 데이터 포인트 (작은 동그라미) */}
      {!isJewel &&
        points.map((pt, i) => {
          const category = categories[i];
          if (!category) return null;
          // 180도 가로선 기준으로 상단/하단 판별 (center가 180도 가로선)
          const isTop = pt.y <= center;
          const pointColor = isTop ? '#3352D7' : '#95A6C1';

          return (
            <g key={`point-${i}`}>
              {/* 데이터 포인트 동그라미 */}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={4}
                fill="white"
                stroke={pointColor}
                strokeWidth={1.5}
                className="data-point"
                style={{
                  opacity: 0,
                  transition:
                    'opacity 0.3s ease, r 0.2s ease, stroke-width 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={() => {
                  // 호버 시 동그라미 크기 증가
                  const circle = document.querySelector(
                    `circle[data-index="${i}"]`
                  ) as SVGElement;
                  if (circle) {
                    circle.style.r = '6';
                    circle.style.strokeWidth = '2';
                  }
                }}
                onMouseLeave={() => {
                  // 호버 해제 시 동그라미 크기 복원
                  const circle = document.querySelector(
                    `circle[data-index="${i}"]`
                  ) as SVGElement;
                  if (circle) {
                    circle.style.r = '4';
                    circle.style.strokeWidth = '1.5';
                  }
                }}
                data-index={i}
              />

              {/* 카테고리 텍스트 */}
              <text
                x={pt.x}
                y={pt.y - 15}
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
                fill={['인구성장형', '안전복원형'].includes(category)
                  ? colorMap[category] || '#333'
                  : '#333'}
                className="category-text"
                style={{
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                {category}
              </text>
            </g>
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
            strokeDasharray={rate === 1.0 ? "none" : "2 2"}
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

      {/* ➕ 가로 점선만 (세로 점선 제거, 숫자 라벨 제거) */}
      {!isJewel && (
        <line
          x1={center - radius - 40}
          y1={center}
          x2={center + radius + 40}
          y2={center}
          stroke="#CCC"
          strokeWidth={0.5}
          strokeDasharray="4 4"
        />
      )}

      {/*️ 축 라벨 */}
      {!isJewel &&
        points.map((pt, i) => {
          const category = categories[i];
          if (!category) return null;
          
          let deg = (pt.angle * 180) / Math.PI + 90;
          if (deg > 180) deg -= 180;
          if (
            ['경제혁신형', '인구성장형', '경제정속형', '인구정착형'].includes(
              category,
            )
          ) {
            deg += 180;
          }
          const x =
            center + (radius + labelOffset.category) * Math.cos(pt.angle);
          const y =
            center + (radius + labelOffset.category) * Math.sin(pt.angle);

          // 인구성장형, 안전복원형 외에는 회색으로
          const textColor = ['인구성장형', '안전복원형'].includes(category)
            ? colorMap[category] || '#999999'
            : '#999999';

          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dy="0.4em"
              fontSize={fontSize.category}
              fontWeight="bold"
              fill={textColor}
              transform={`rotate(${deg} ${x} ${y})`}
            >
              {category}
            </text>
          );
        })}

      {/* 영역 호버 툴팁 - 호버 영역 밖에 배치 */}
      {!isJewel && hoveredArea && (
        <g>
          {/* 툴팁 배경 */}
          <rect
            x={center - 50}
            y={hoveredArea === 'top' ? center - 120 : center + 60}
            width={100}
            height={30}
            rx={5}
            fill="rgba(0, 0, 0, 0.8)"
          />
          {/* 툴팁 텍스트 */}
          <text
            x={center}
            y={hoveredArea === 'top' ? center - 100 : center + 80}
            textAnchor="middle"
            fontSize={fontSize.area}
            fill="white"
            fontWeight="bold"
          >
            {hoveredArea === 'top' ? '강점영역' : '약점영역'}
          </text>
        </g>
      )}
    </svg>
  );
};

export default JewelRadarChart;
