import { getKlaciCodeNickname, parseKlaciCode } from '@/utils/klaciCodeUtils';
import React, { useState } from 'react';

interface KlaciCodeCirclesProps {
  klaciCode: string;
  size?: number;
  gap?: number;
  fontSize?: string;
  fontWeight?: number;
}

const KlaciCodeCircles: React.FC<KlaciCodeCirclesProps> = ({
  klaciCode,
  size = 25,
  gap = 6,
  fontSize = '1rem',
  fontWeight = 600,
}) => {
  const klaciCodes = parseKlaciCode(klaciCode);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      style={{
        display: 'flex',
        gap: `${gap}px`,
        position: 'relative',
      }}
    >
      {klaciCodes.map((item, index) => (
        <div
          key={index}
          style={{
            position: 'relative',
          }}
        >
          <div
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              backgroundColor: item.color,
              color: 'white',
              border: `2px solid ${item.color}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize,
              fontWeight,
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.code}
          </div>
        </div>
      ))}
      
      {/* 툴팁 - circles 컴포넌트 중앙 하단에 위치 */}
      {hoveredIndex !== null && klaciCodes[hoveredIndex] && (
        <div
          style={{
            position: 'absolute',
            top: `${size + 8}px`,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#000000',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          {getKlaciCodeNickname(klaciCodes[hoveredIndex].code)}
        </div>
      )}
    </div>
  );
};

export default KlaciCodeCircles; 