'use client';

import React, { useState } from 'react';

import JewelRadarChart from '@/atoms/charts/RadarChart';

const JewelChartSection: React.FC = () => {
  const chartData = [85, 30, 80, 30, 25, 70, 40, 36];

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
