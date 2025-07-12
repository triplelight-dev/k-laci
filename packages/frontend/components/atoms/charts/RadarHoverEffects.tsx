'use client';

import { useCallback, useState } from 'react';
import { RadarChartContext } from './types';

interface RadarHoverEffectsProps {
  context: RadarChartContext;
  showStrongTooltip?: boolean;
  showWeakTooltip?: boolean;
}

const RadarHoverEffects = ({ context, showStrongTooltip, showWeakTooltip }: RadarHoverEffectsProps) => {
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

  // 깜빡임 방지를 위한 useCallback 사용
  const handlePointMouseEnter = useCallback((i: number) => {
    setHoveredPoint(i);
    const circle = document.querySelector(
      `circle[data-index="${i}"]`,
    ) as SVGElement;
    if (circle) {
      circle.style.r = '7';
      circle.style.strokeWidth = '2';
      circle.style.fill = '#FFFFFF';
    }
    
    // 내부 검정색 원도 보이게 설정
    const innerCircle = document.querySelector(
      `circle[data-index="${i}"] + circle.data-point-inner`,
    ) as SVGElement;
    if (innerCircle) {
      innerCircle.style.opacity = '1';
    }
  }, []);

  const handlePointMouseLeave = useCallback((i: number) => {
    setHoveredPoint(null);
    const circle = document.querySelector(
      `circle[data-index="${i}"]`,
    ) as SVGElement;
    if (circle) {
      circle.style.r = '2';
      circle.style.strokeWidth = '1.5';
      circle.style.fill = '#9A9EA3';
    }
    
    // 내부 검정색 원 숨기기
    const innerCircle = document.querySelector(
      `circle[data-index="${i}"] + circle.data-point-inner`,
    ) as SVGElement;
    if (innerCircle) {
      innerCircle.style.opacity = '0';
    }
  }, []);

  if (isJewel) return null;

  return (
    <>
      {/* 호버 효과를 위한 스타일 */}
      <defs>
        <style>
          {`
            .radar-chart:hover .jewel-triangle {
              opacity: 0 !important;
              transition: opacity 0.8s ease !important;
            }
            .radar-chart:hover .data-point {
              opacity: 1 !important;
            }
            .radar-chart:hover .data-point:hover {
              r: 7 !important;
              stroke-width: 2 !important;
              fill: #FFFFFF !important;
            }
            .radar-chart:hover .data-point:hover + .data-point-inner {
              opacity: 1 !important;
            }
            .radar-guide-label {
              font-size: 12px !important;
              font-weight: 600 !important;
              fill: #BDBDBD !important;
              opacity: 1 !important;
            } 
            .radar-guide-qmark {
              font-size: 8px !important;
              font-weight: bold !important;
              fill: #BDBDBD !important;
              opacity: 1 !important;
            }
            
            /* 원 안의 텍스트 폰트 크기 고정 */
            .radar-circle-code-text {
              font-size: 11px !important;
            }
            
            /* 라벨 텍스트 폰트 웨이트 고정 */
            .radar-category-label {
              font-weight: 600 !important;
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}
        </style>
      </defs>

      {/* 데이터 포인트 */}
      {points.map((pt, i) => {
        const category = categories[i];
        if (!category) return null;

        return (
          <g key={`point-${i}`}>
            {/* 투명한 호버 영역 - 하나의 큰 원으로 통합 */}
            <circle
              cx={pt.x}
              cy={pt.y}
              r={8}
              fill="transparent"
              onMouseEnter={() => handlePointMouseEnter(i)}
              onMouseLeave={() => handlePointMouseLeave(i)}
              style={{ cursor: 'pointer' }}
            />
            
            {/* 기본 원 */}
            <circle
              cx={pt.x}
              cy={pt.y}
              r={2}
              fill="#9A9EA3"
              stroke="#9A9EA3"
              strokeWidth={1.5}
              className="data-point"
              style={{
                opacity: 0,
                transition:
                  'opacity 0.3s ease, r 0.2s ease, stroke-width 0.2s ease, fill 0.2s ease',
                pointerEvents: 'none', // 이벤트 비활성화
              }}
              data-index={i}
            />
            
            {/* 호버 시 내부 검정색 원 */}
            <circle
              cx={pt.x}
              cy={pt.y}
              r={2.5}
              fill="#000000"
              className="data-point-inner"
              style={{
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none', // 이벤트 비활성화
              }}
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
                pointerEvents: 'none', // 이벤트 비활성화
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
            x={points[hoveredPoint]!.x - 15}
            y={points[hoveredPoint]!.y - 35}
            width={30}
            height={25}
            rx={6}
            fill="white"
            stroke="#333"
            strokeWidth={1}
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))',
            }}
          />
          <text
            x={points[hoveredPoint]!.x}
            y={points[hoveredPoint]!.y - 22}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontSize.tooltip * 1.1}
            fill="#333"
            fontWeight="bold"
          >
            {vals[hoveredPoint]?.toFixed(1)}
          </text>
        </g>
      )}

      {/* 강점/약점 영역 툴팁 - 우측 텍스트 호버에만 반응 */}
      {showStrongTooltip && (
        <g>
          {/* 강점영역 툴팁 */}
          <rect
            x={center - 120}
            y={center + 40}
            width={240}
            height={60}
            rx={5}
            fill="white"
            stroke="#333"
            strokeWidth={1}
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))',
            }}
          />
          <text
            x={center}
            y={center + 55}
            textAnchor="middle"
            fontSize="11"
            fill="#333"
          >
            원석레이더 차트의 상반부는{' '}
            <tspan fontWeight="bold">&apos;강점&apos;</tspan> 영역입니다.
          </text>
          <text
            x={center}
            y={center + 70}
            textAnchor="middle"
            fontSize="11"
            fill="#333"
          >
            &apos;약점&apos; 원형 범위와 비교해 지역의 자산 정도를
          </text>
          <text
            x={center}
            y={center + 85}
            textAnchor="middle"
            fontSize="11"
            fill="#333"
          >
            파악할 수 있습니다.
          </text>
        </g>
      )}
      {showWeakTooltip && (
        <g>
          {/* 약점영역 툴팁 */}
          <rect
            x={center - 120}
            y={center - 100}
            width={240}
            height={60}
            rx={5}
            fill="white"
            stroke="#333"
            strokeWidth={1}
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))',
            }}
          />
          <text
            x={center}
            y={center - 75}
            textAnchor="middle"
            fontSize="11"
            fill="#333"
          >
            원석레이더 차트의 하반부는{' '}
            <tspan fontWeight="bold">&apos;약점&apos;</tspan> 영역입니다.
          </text>
          <text
            x={center}
            y={center - 60}
            textAnchor="middle"
            fontSize="11"
            fill="#333"
          >
            &apos;강점&apos; 원형 범위와 비교해 개선 정도를
          </text>
          <text
            x={center}
            y={center - 45}
            textAnchor="middle"
            fontSize="11"
            fill="#333"
          >
            파악할 수 있습니다.
          </text>
        </g>
      )}
    </>
  );
};

export default RadarHoverEffects;
