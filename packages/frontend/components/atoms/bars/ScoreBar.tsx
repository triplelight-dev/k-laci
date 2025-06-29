import React from 'react';

interface ScoreBarProps {
  score: number;
  color: string;
  leftItem: string; // 좌측 항목명
  rightItem: string; // 우측 항목명
  isBold: 'left' | 'right' | 'none';
}

const ScoreBar: React.FC<ScoreBarProps> = ({
  score,
  color,
  leftItem = '',
  rightItem = '',
  isBold = 'none',
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
      {/* 좌측 항목명 */}
      <div
        style={{
          color: isBold === 'left' ? '#000000' : '#949FB0',
          fontSize: '1rem',
          fontWeight: isBold === 'left' ? 800 : 600,
          minWidth: 'fit-content',
        }}
      >
        {leftItem}
      </div>

      {/* 바 컴포넌트 */}
      <div
        style={{
          position: 'relative',
          height: '26px',
          backgroundColor: '#F8F8FF',
          borderRadius: '8px',
          border: '1px solid #D9D9E8',
          overflow: 'hidden',
          flex: 1,
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
          }}
        />

        {/* 50 지점 점선 - 50% 초과일 때만 표시 */}
        {score > 50 && (
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
        )}

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

      {/* 우측 항목명 */}
      <div
        style={{
          color: isBold === 'right' ? '#000000' : '#949FB0',
          fontSize: '1rem',
          fontWeight: isBold === 'right' ? 800 : 600,
          minWidth: 'fit-content',
        }}
      >
        {rightItem}
      </div>
    </div>
  );
};

export default ScoreBar;
