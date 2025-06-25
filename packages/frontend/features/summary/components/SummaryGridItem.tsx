'use client';

import React from 'react';
import Link from 'next/link';
import { SummaryItem } from '@/types/summary';

interface SummaryGridItemProps {
  item: SummaryItem;
  color?: string;
}

const SummaryGridItem: React.FC<SummaryGridItemProps> = ({
  item,
  color = '#3B82F6'
}) => {
  return (
    <Link href={item.link} className="block">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
        <div className="text-sm text-gray-600 mb-2">{item.keyName}</div>
        <div 
          className="text-2xl font-bold mb-2"
          style={{ color }}
        >
          {item.rankName}
        </div>
      </div>
    </Link>
  );
};

export default SummaryGridItem; 