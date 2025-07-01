'use client';

import { useState } from 'react';
import { RadarChartContext } from './types';

interface RadarHoverEffectsProps {
  context: RadarChartContext;
}

const RadarHoverEffects = ({ context }: RadarHoverEffectsProps) => {
  const [hoveredArea, setHoveredArea] = useState<'top' | 'bottom' | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const {
    center,
    radius,
    size,
    isJewel,
    fontSize,
    categories,
    colorMap,
    points,
    vals,
  } = context;

  const numAxes = categories.length;

  if (isJewel) return null;

  return (
    <>
      {/* 호버 효과를 위한 마스크들 */}
      <defs>
        <mask id="hoverTopMask">
          <rect width={size} height={size} fill="white" />
          <rect
            x={center - radius}
            y={center}
            width={radius * 2}
            height={radius}
            fill="black"
          />
        </mask>

        <mask id="hoverBottomMask">
          <rect width={size} height={size} fill="white" />
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
            .radar-chart:hover .data-point {
              opacity: 1 !important;
            }
            .radar-chart:hover .data-point:hover {
              r: 6 !important;
              stroke-width: 2 !important;
            }
          `}
        </style>
      </defs>

      {/* 호버 효과를 위한 오버레이 레이어들 */}
      {/* 상단 오버레이 (파란색) - 하단 영역 호버시 회색으로 변경 */}
      <g mask="url(#hoverTopMask)">
        {points.map((pt, i) => {
          const next = points[(i + 1) % numAxes];
          if (!next) return null;

          return (
            <path
              key={`top-${i}`}
              d={`M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`}
              fill={hoveredArea === 'bottom' ? '#95A6C1' : '#3352D7'}
              fillOpacity={hoveredArea === 'bottom' ? 1 : 0}
              stroke="white"
              strokeWidth={1}
              className="hover-top-overlay"
              style={{
                transition: 'opacity 0.3s ease, fill 0.3s ease',
              }}
            />
          );
        })}
      </g>

      {/* 하단 오버레이 (회색) - 상단 영역 호버시 회색으로 변경 */}
      <g mask="url(#hoverBottomMask)">
        {points.map((pt, i) => {
          const next = points[(i + 1) % numAxes];
          if (!next) return null;

          return (
            <path
              key={`bottom-${i}`}
              d={`M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`}
              fill={hoveredArea === 'top' ? '#95A6C1' : '#95A6C1'}
              fillOpacity={hoveredArea === 'top' ? 1 : 0}
              stroke="white"
              strokeWidth={1}
              className="hover-bottom-overlay"
              style={{
                transition: 'opacity 0.3s ease, fill 0.3s ease',
              }}
            />
          );
        })}
      </g>

      {/* 투명한 호버 영역들 */}
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

      {/* 데이터 포인트 */}
      {points.map((pt, i) => {
        const category = categories[i];
        if (!category) return null;
        const isTop = pt.y <= center;
        const pointColor = isTop ? '#3352D7' : '#95A6C1';

        return (
          <g key={`point-${i}`}>
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
                setHoveredPoint(i);
                const circle = document.querySelector(
                  `circle[data-index="${i}"]`,
                ) as SVGElement;
                if (circle) {
                  circle.style.r = '6';
                  circle.style.strokeWidth = '2';
                }
              }}
              onMouseLeave={() => {
                setHoveredPoint(null);
                const circle = document.querySelector(
                  `circle[data-index="${i}"]`,
                ) as SVGElement;
                if (circle) {
                  circle.style.r = '4';
                  circle.style.strokeWidth = '1.5';
                }
              }}
              data-index={i}
            />

            <text
              x={pt.x}
              y={pt.y - 15}
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              fill={
                ['인구성장형', '안전회복형'].includes(category)
                  ? colorMap[category] || '#333'
                  : '#333'
              }
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

      {/* 툴팁들 */}
      {/* 데이터 포인트 툴팁 */}
      {hoveredPoint !== null && points[hoveredPoint] && (
        <g>
          <rect
            x={points[hoveredPoint]!.x - 40}
            y={points[hoveredPoint]!.y - 50}
            width={80}
            height={40}
            rx={5}
            fill="rgba(0, 0, 0, 0.8)"
          />
          <text
            x={points[hoveredPoint]!.x}
            y={points[hoveredPoint]!.y - 35}
            textAnchor="middle"
            fontSize={fontSize.tooltip}
            fill="white"
            fontWeight="bold"
          >
            {categories[hoveredPoint]}
          </text>
          <text
            x={points[hoveredPoint]!.x}
            y={points[hoveredPoint]!.y - 20}
            textAnchor="middle"
            fontSize={fontSize.tooltip}
            fill="white"
          >
            {vals[hoveredPoint]}점
          </text>
        </g>
      )}

      {/* 영역 호버 툴팁 - 흰색 배경에 검정색 보더 */}
      {hoveredArea && hoveredPoint === null && (
        <g>
          {/* 툴팁 배경 */}
          <rect
            x={center - 120}
            y={hoveredArea === 'top' ? center - 80 : center + 20}
            width={240}
            height={hoveredArea === 'top' ? 60 : 60}
            rx={5}
            fill="white"
            stroke="#333"
            strokeWidth={1}
          />
          {/* 툴팁 텍스트 */}
          {hoveredArea === 'top' ? (
            <>
              <text
                x={center}
                y={center - 60}
                textAnchor="middle"
                fontSize="11"
                fill="#333"
              >
                원석레이더 차트의 상반부는{' '}
                <tspan fontWeight="bold">'강점'</tspan> 영역입니다.
              </text>
              <text
                x={center}
                y={center - 45}
                textAnchor="middle"
                fontSize="11"
                fill="#333"
              >
                '양점' 원형 범위와 비교해 지역의 자산 정도를
              </text>
              <text
                x={center}
                y={center - 30}
                textAnchor="middle"
                fontSize="11"
                fill="#333"
              >
                파악할 수 있습니다.
              </text>
            </>
          ) : (
            <>
              <text
                x={center}
                y={center + 40}
                textAnchor="middle"
                fontSize="11"
                fill="#333"
              >
                원석레이더 차트의 하반부는{' '}
                <tspan fontWeight="bold">'약점'</tspan> 영역입니다.
              </text>
              <text
                x={center}
                y={center + 55}
                textAnchor="middle"
                fontSize="11"
                fill="#333"
              >
                '강점' 원형 범위와 비교해 개선 정도를
              </text>
              <text
                x={center}
                y={center + 70}
                textAnchor="middle"
                fontSize="11"
                fill="#333"
              >
                파악할 수 있습니다.
              </text>
            </>
          )}
        </g>
      )}
    </>
  );
};

export default RadarHoverEffects;
