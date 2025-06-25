'use client';

import React from 'react';
import { CategoryScore } from '@/features/results/types/category';

interface CategoryDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: CategoryScore | null;
  color: string;
}

const CategoryDetailModal: React.FC<CategoryDetailModalProps> = ({
  isOpen,
  onClose,
  score,
  color,
}) => {
  if (!isOpen || !score) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{score.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-600">점수</div>
            <div 
              className="text-3xl font-bold"
              style={{ color }}
            >
              {score.value}
            </div>
          </div>
          
          <div>
            <div className="text-sm text-gray-600">순위</div>
            <div className="text-lg font-semibold">
              {score.rank}위 / {score.totalRank}개
            </div>
          </div>
          
          {score.description && (
            <div>
              <div className="text-sm text-gray-600">설명</div>
              <div className="text-sm">{score.description}</div>
            </div>
          )}
        </div>
        
        <button
          onClick={onClose}
          className="w-full mt-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default CategoryDetailModal; 