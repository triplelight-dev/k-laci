'use client';

import React, { useState } from 'react';

import JewelRadarChart from '@/atoms/charts/RadarChart';

const JewelChartSection: React.FC = () => {
  const chartData = [85, 60, 50, 60, 55, 43, 55, 66];

  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        width: '100%',
        justifyContent: 'center',
        padding: '20px',
        marginBottom: '250px',
      }}
    >
      <JewelRadarChart size={470} data={chartData} />
    </div>
  );
};

export default JewelChartSection;
