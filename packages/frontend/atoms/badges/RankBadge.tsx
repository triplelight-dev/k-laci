'use client';

import React from 'react';
import { categoryColors } from '@/constants/colors';

interface RankBadgeProps {
  rank: number;
}

const RankBadge: React.FC<RankBadgeProps> = ({ rank }) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        border: '2px solid #e9ecef',
        borderRadius: '50px',
        padding: '8px 16px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#495057',
      }}
    >
      <span>종합순위</span>
      <span style={{ color: categoryColors.인구성장력, marginLeft: '4px' }}>{rank}</span>
    </div>
  );
};

export default RankBadge;
