'use client';

import React from 'react';

interface RecentSearchesProps {
  searches: string[];
  onSearchClick: (search: string) => void;
  onClearAll: () => void;
}

const RecentSearches: React.FC<RecentSearchesProps> = ({
  searches,
  onSearchClick,
  onClearAll,
}) => {
  if (searches.length === 0) return null;

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-medium text-gray-700">최근 검색</h4>
        <button
          onClick={onClearAll}
          className="text-xs text-gray-500 hover:text-gray-700"
        >
          모두 지우기
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {searches.map((search, index) => (
          <button
            key={index}
            onClick={() => onSearchClick(search)}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches; 