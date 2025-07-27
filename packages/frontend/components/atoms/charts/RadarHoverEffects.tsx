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
    actualCenterY, // centerY 대신 actualCenterY 사용
    radius,
    size,
    isJewel,
    fontSize,
    categories,
    colorMap,
    points,
    vals,
    tooltip,
  } = context;

  // context에서 받은 툴팁 위치 값들 사용
  const { boxX: tooltipBoxX, textX: tooltipTextX, boxY: tooltipBoxY } = tooltip;

  // 깜빡임 방지를 위한 useCallback 사용
  const handlePointMouseEnter = useCallback((i: number) => {
    setHoveredPoint(i);
    // 꼭지점 호버 시에는 크기 변경하지 않음, 툴팁만 표시
  }, []);

  const handlePointMouseLeave = useCallback((i: number) => {
    setHoveredPoint(null);
    // 꼭지점 호버 해제 시에도 크기 변경하지 않음
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
              r: 4 !important;
              stroke-width: 2 !important;
              fill: #FFFFFF !important;
              stroke: #9A9EA3 !important;
            }
            .radar-chart:hover .data-point:hover + .data-point-inner {
              opacity: 0 !important;
            }
            .radar-guide-label {
              font-weight: 600 !important;
              opacity: 1 !important;
            } 
            .radar-guide-qmark {
              font-weight: bold !important;
              opacity: 1 !important;
            }
            
            /* 원 안의 텍스트 폰트 크기 고정 */
            .radar-circle-code-text {
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
              r={6}
              fill="transparent"
              onMouseEnter={() => handlePointMouseEnter(i)}
              onMouseLeave={() => handlePointMouseLeave(i)}
              style={{ cursor: 'pointer' }}
            />
            
            {/* 기본 원 - 흰색 원에 회색 보더 */}
            <circle
              cx={pt.x}
              cy={pt.y}
              r={4}
              fill="#FFFFFF"
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
            
            {/* 호버 시 내부 검정색 원 - 더 이상 사용하지 않음 */}
            <circle
              cx={pt.x}
              cy={pt.y}
              r={2.5}
              fill="#000000"
              className="data-point-inner"
              style={{
                opacity: 0,
                transition: 'opacity 0.2s ease',
                pointerEvents: 'none',
              }}
            />

            {/* 툴팁 내용 - 간단한 형태로 복원 */}
            {hoveredPoint === i && (
              <g>
                {/* 툴팁 배경 */}
                <rect
                  x={pt.x + 10}
                  y={pt.y - 30}
                  width={50}
                  height={40}
                  rx={8}
                  fill="rgba(0, 0, 0, 0.8)"
                  stroke="none"
                />
                
                {/* 툴팁 텍스트 - 점수만 표시 */}
                <text
                  x={pt.x + 35}
                  y={pt.y - 10}
                  fill="white"
                  fontSize={fontSize.tooltip}
                  fontWeight="500"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {vals[i]?.toFixed(1)}
                </text>
              </g>
            )}
          </g>
        );
      })}

      {/* 강점/약점 영역 툴팁 - actualCenterY 기준으로 수정 */}
      {showStrongTooltip && (
        <g>
          <rect
            x={tooltipBoxX + 15}
            y={tooltipBoxY}
            width={320}
            height={100}
            fill="transparent"
            stroke="none"
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))',
            }}
          />
          <text
            x={tooltipTextX + 15}
            y={actualCenterY - 25} // 점선 위 첫 번째 줄 (2px 더 위로)
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: `${fontSize.area}px`, fontWeight: '400' }}
            fill="#333"
          >
            차트 상반부는 <tspan fontWeight="bold" style={{ fontWeight: 'bold' }}>강점영역</tspan>입니다.
          </text>
          <text
            x={tooltipTextX + 15}
            y={actualCenterY - 9} // 점선 위 두 번째 줄 (1px 더 위로)
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: `${fontSize.area}px`, fontWeight: '400' }}
            fill="#333"
          >
            영역 내 면적과 역량 분포에
          </text>
          <text
            x={tooltipTextX + 15}
            y={actualCenterY + 9} // 점선 아래 첫 번째 줄 (1px 더 아래로)
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: `${fontSize.area}px`, fontWeight: '400' }}
            fill="#333"
          >
            따라 해당 지역이 현재 보유한
          </text>
          <text
            x={tooltipTextX + 15}
            y={actualCenterY + 25} // 점선 아래 두 번째 줄 (2px 더 아래로)
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: `${fontSize.area}px`, fontWeight: '400' }}
            fill="#333"
          >
            <tspan fontWeight="bold" style={{ fontWeight: 'bold' }}>강점</tspan>을 진단할 수 있습니다.
          </text>
        </g>
      )}

      {/* 약점영역 툴팁 - actualCenterY 기준으로 수정 */}
      {showWeakTooltip && (
        <g>
          <rect
            x={tooltipBoxX + 15}
            y={tooltipBoxY}
            width={320}
            height={100}
            fill="transparent"
            stroke="none"
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))',
            }}
          />
          <text
            x={tooltipTextX + 15}
            y={actualCenterY - 25} // 점선 위 첫 번째 줄 (2px 더 위로)
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: `${fontSize.area}px`, fontWeight: '400' }}
            fill="#333"
          >
            차트 하반부는 <tspan fontWeight="bold" style={{ fontWeight: 'bold' }}>약점영역</tspan>입니다.
          </text>
          <text
            x={tooltipTextX + 15}
            y={actualCenterY - 9} // 점선 위 두 번째 줄 (1px 더 위로)
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: `${fontSize.area}px`, fontWeight: '400' }}
            fill="#333"
          >
            영역 내 면적과 역량 분포에
          </text>
          <text
            x={tooltipTextX + 15}
            y={actualCenterY + 9} // 점선 아래 첫 번째 줄 (1px 더 아래로)
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: `${fontSize.area}px`, fontWeight: '400' }}
            fill="#333"
          >
            따라 해당 지역이 현재 보유한
          </text>
          <text
            x={tooltipTextX + 15}
            y={actualCenterY + 25} // 점선 아래 두 번째 줄 (2px 더 아래로)
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: `${fontSize.area}px`, fontWeight: '400' }}
            fill="#333"
          >
            <tspan fontWeight="bold" style={{ fontWeight: 'bold' }}>약점</tspan>을 진단할 수 있습니다.
          </text>
        </g>
      )}
    </>
  );
};

export default RadarHoverEffects;
