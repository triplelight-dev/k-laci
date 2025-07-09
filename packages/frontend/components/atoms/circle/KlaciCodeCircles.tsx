import { parseKlaciCode } from '@/utils/klaciCodeUtils';
import React from 'react';

interface KlaciCodeCirclesProps {
  klaciCode: string;
  size?: number;
  gap?: number;
  marginBottom?: number;
  fontSize?: string;
  fontWeight?: number;
}

const KlaciCodeCircles: React.FC<KlaciCodeCirclesProps> = ({
  klaciCode,
  size = 30,
  gap = 8,
  marginBottom = 30,
  fontSize = '1rem',
  fontWeight = 600,
}) => {
  const klaciCodes = parseKlaciCode(klaciCode);

  return (
    <div
      style={{
        display: 'flex',
        gap: `${gap}px`,
        marginBottom: `${marginBottom}px`,
      }}
    >
      {klaciCodes.map((item, index) => (
        <div
          key={index}
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
          }}
        >
          {item.code}
        </div>
      ))}
    </div>
  );
};

export default KlaciCodeCircles; 