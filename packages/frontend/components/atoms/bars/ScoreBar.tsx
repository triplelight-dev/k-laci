import React from 'react';

interface ScoreBarProps {
  score: number;
  color: string;
}

const ScoreBar: React.FC<ScoreBarProps> = ({ score, color }) => {
  return (
    <div
      style={{
        position: 'relative',
        height: '32px',
        backgroundColor: '#F8F8FF',
        borderRadius: '8px',
        border: '1px solid #D9D9E8',
        overflow: 'hidden',
      }}
    >
      {/* 채워진 부분 */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: `${score}%`,
          backgroundColor: color,
          // radius 제거
        }}
      />

      {/* 50 지점 점선 */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          height: '100%',
          width: '1px',
          borderLeft: '2px dashed #D9D9E8',
          zIndex: 1,
        }}
      />

      {/* 좌측 점수 */}
      <div
        style={{
          position: 'absolute',
          left: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#FFFFFF',
          fontSize: '0.8rem',
          fontWeight: 600,
          zIndex: 2,
        }}
      >
        {score}
      </div>

      {/* 우측 점수 */}
      <div
        style={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#949FB0',
          fontSize: '0.8rem',
          fontWeight: 600,
        }}
      >
        {100 - score}
      </div>
    </div>
  );
};

export default ScoreBar; 