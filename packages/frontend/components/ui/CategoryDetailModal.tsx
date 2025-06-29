'use client';

import { TOTAL_RANK } from '@/constants/data';
import { CategoryRank } from '@/types/category';
import React from 'react';

interface CategoryDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  rank: CategoryRank | null;
  color: string;
}

const CategoryDetailModal: React.FC<CategoryDetailModalProps> = ({
  isOpen,
  onClose,
  rank,
  color,
}) => {
  if (!isOpen || !rank) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold">{rank.name}</h3>
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
            <div className="text-3xl font-bold" style={{ color }}>
              {rank.value}
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-600">순위</div>
            <div className="text-lg font-semibold">
              {rank?.rank}위 / {TOTAL_RANK}개
            </div>
          </div>

          {rank?.description && (
            <div>
              <div className="text-sm text-gray-600">설명</div>
              <div className="text-sm">{rank.description}</div>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-gray-200 py-2 text-gray-800 transition-colors hover:bg-gray-300"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default CategoryDetailModal;
