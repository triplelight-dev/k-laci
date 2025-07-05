'use client';

import React from 'react';

interface District {
  id: number;
  name: string;
  rank: number;
  score: number;
  category: string;
}

interface DistrictCardProps {
  district: District;
  onClick?: () => void;
}

export const DistrictCard: React.FC<DistrictCardProps> = ({ district, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{district.name}</h3>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
          {district.category}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">순위</span>
          <span className="font-semibold text-gray-800">{district.rank}위</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">점수</span>
          <span className="font-semibold text-blue-600">{district.score.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${district.score}%` }}
          />
        </div>
      </div>
    </div>
  );
}; 