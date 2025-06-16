'use client';

import React from 'react';

type RankBadgeProps = {
  rank: number;
};

const RankBadge: React.FC<RankBadgeProps> = ({ rank }) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        padding: '12px 20px',
        borderRadius: '100px',
        border: '1px solid #E7E8EA',
        backgroundColor: 'white',
        marginTop: '16px',
        fontWeight: 'bold',
      }}
    >
      <span style={{ color: '#000000' }}>종합순위 </span>
      <span style={{ color: '#F56542', marginLeft: '4px' }}>{rank}</span>
      <span style={{ color: '#000000' }}>위 </span>
    </div>
  );
};

export default RankBadge;
