'use client';

import React from 'react';

interface RankBarProps {
  currentRank: number;
  minRank: number;
  maxRank: number;
  color: string;
}

const RankBar: React.FC<RankBarProps> = ({
  currentRank,
  minRank = 1,
  maxRank = 229,
  color,
}) => {
  // 현재 순위의 위치를 백분율로 계산 (1위가 왼쪽, 229위가 오른쪽)
  // 수정된 계산 로직: (currentRank - minRank) / (maxRank - minRank) * 100
  const position = ((currentRank - minRank) / (maxRank - minRank)) * 100;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        marginTop: '1rem',
        marginBottom: '2rem',
      }}
    >
      {/* 최소/최대 순위 표시 (바 위에) */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
          color: '#666666',
          fontSize: '0.9rem',
          fontWeight: 'bold',
        }}
      >
        <span>{minRank}위</span>
        <span>{maxRank}위</span>
      </div>

      {/* 배경 바 */}
      <div
        style={{
          width: '100%',
          height: '20px',
          backgroundColor: '#E7E8EA',
          borderRadius: '10px',
          border: 'none',
          position: 'relative',
        }}
      />

      {/* 현재 순위 표시 바 */}
      <div
        style={{
          position: 'absolute',
          left: `${position}%`,
          top: '20px',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* 순위 텍스트 - 눈금 바 위에 떠있도록 조정 */}
        <div
          style={{
            position: 'absolute',
            top: '-35px', // 눈금 바 위로 충분히 떠있도록 조정
            color,
            fontSize: '1rem',
            fontWeight: 'bold',
            whiteSpace: 'nowrap', // 텍스트가 한 줄로 유지되도록
          }}
        >
          {currentRank}위
        </div>

        {/* 눈금 바 */}
        <div
          style={{
            width: '2px',
            height: '50px',
            backgroundColor: color,
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            marginTop: '10px',
          }}
        />
      </div>
    </div>
  );
};

export default RankBar;
