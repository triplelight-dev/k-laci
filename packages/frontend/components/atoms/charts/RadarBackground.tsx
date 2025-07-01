'use client';

import { RadarChartContext } from './types';

interface RadarBackgroundProps {
  context: RadarChartContext;
}

const RadarBackground = ({ context }: RadarBackgroundProps) => {
  const {
    center,
    radius,
    // size,
    isJewel,
    fontSize,
    labelOffset,
    categories,
    colorMap,
    points,
  } = context;

  if (isJewel) return null;

  return (
    <>
      {/* 위쪽 반원 배경 (0도 ~ 180도) */}
      <path
        d={`M ${center} ${center} 
            L ${center + radius * Math.cos(0)} ${center + radius * Math.sin(0)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(Math.PI)} ${center + radius * Math.sin(Math.PI)}
            Z`}
        fill="#EBEBEB"
      />

      {/* 아래쪽 반원 배경 (180도 ~ 360도) */}
      <path
        d={`M ${center} ${center} 
            L ${center + radius * Math.cos(Math.PI)} ${center + radius * Math.sin(Math.PI)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(2 * Math.PI)} ${center + radius * Math.sin(2 * Math.PI)}
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
        fill="#EBEBEB"
        mask="url(#labelMask)"
      />

      <path
        d={`M ${center} ${center} 
            L ${center + radius * Math.cos(Math.PI)} ${center + radius * Math.sin(Math.PI)}
            A ${radius} ${radius} 0 0 1 
            ${center + radius * Math.cos(2 * Math.PI)} ${center + radius * Math.sin(2 * Math.PI)}
            Z`}
        fill="#F4F4F4"
        mask="url(#labelMask)"
      />

      {/* 원형 격자 (50%, 100%) */}
      {[0.5, 1.0].map((rate, i) => (
        <circle
          key={i}
          cx={center}
          cy={center}
          r={radius * rate}
          fill="none"
          stroke="#D9D9E8"
          strokeWidth={0.5}
          strokeDasharray={rate === 1.0 ? "none" : "2 2"}
        />
      ))}

      {/* 방사형 축선 */}
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

      {/* 가로 점선 */}
      <line
        x1={center - radius - 40}
        y1={center}
        x2={center + radius + 40}
        y2={center}
        stroke="#CCC"
        strokeWidth={0.5}
        strokeDasharray="4 4"
      />

      {/* 축 라벨 */}
      {points.map((pt, i) => {
        const category = categories[i];
        if (!category) return null;
        
        const deg = 0;
        const x = center + (radius + labelOffset.category) * Math.cos(pt.angle);
        const y = center + (radius + labelOffset.category) * Math.sin(pt.angle);

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
    </>
  );
};

export default RadarBackground; 