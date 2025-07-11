import React from 'react';

interface KlaciCodeCirclesProps {
  klaciCode: string;
  size?: number;
  gap?: number;
  fontSize?: string;
  fontWeight?: number;
}

const KlaciCodeCircles: React.FC<KlaciCodeCirclesProps> = ({
  klaciCode,
  size = 30,
  gap = 8,
  fontSize = '1rem',
  fontWeight = 600,
}) => {
  // KLACI 코드 색상 매핑 (대문자 기준)
  const codeColorMapping: Record<string, string> = {
    G: '#FF3737',
    T: '#FFA600',
    V: '#874FFF',
    R: '#24CB71',
  };

  // klaci_code 문자열을 개별 문자로 분리
  const klaciCodes = klaciCode.split('').map((code) => ({
    code, // 원본 코드 그대로 표시 (소문자면 소문자로)
    color: codeColorMapping[code.toUpperCase()] || '#666666', // 색상 매칭은 대문자로 변환
  }));

  return (
    <div
      style={{
        display: 'flex',
        gap: `${gap}px`,
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