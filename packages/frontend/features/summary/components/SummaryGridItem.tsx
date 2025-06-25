'use client';

import React from 'react';

interface SummaryGridItemProps {
  title: string;
  value: string | number;
  description?: string;
  color?: string;
}

const SummaryGridItem: React.FC<SummaryGridItemProps> = ({
  title,
  value,
  description,
  color = '#3B82F6'
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="text-sm text-gray-600 mb-2">{title}</div>
      <div 
        className="text-2xl font-bold mb-2"
        style={{ color }}
      >
        {value}
      </div>
      {description && (
        <div className="text-xs text-gray-500">{description}</div>
      )}
    </div>
  );
};

export default SummaryGridItem; 