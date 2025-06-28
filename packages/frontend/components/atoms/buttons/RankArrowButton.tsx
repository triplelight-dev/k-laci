'use client';

import Image from 'next/image';
import React from 'react';

interface RankArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const RankArrowButton: React.FC<RankArrowButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'white',
        border: '1px solid transparent',
        cursor: 'pointer',
        padding: '12px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#D9D9E8';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'transparent';
      }}
    >
      <Image
        src={`/rank_arrow_${direction}.png`}
        alt={`${direction === 'left' ? '이전' : '다음'} 지자체로 이동`}
        width={12}
        height={12}
      />
    </button>
  );
};

export default RankArrowButton; 