'use client';

import React, { useState } from 'react';
import RecentSearches from './RecentSearches';

interface SearchTextInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  recentSearches?: string[];
  onRecentSearchClick?: (value: string) => void;
}

const SearchTextInput: React.FC<SearchTextInputProps> = ({
  placeholder = '검색어를 입력하세요',
  onSearch,
  className = '',
  value: controlledValue,
  onChange,
  recentSearches = [],
  onRecentSearchClick,
}) => {
  const [internalValue, setInternalValue] = useState('');

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const setValue = onChange || setInternalValue;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && onSearch) {
      onSearch(value.trim());
    }
  };

  const handleClearAll = () => {
    // 최근 검색 기록을 모두 지우는 로직
    console.log('Clear all recent searches');
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1 rounded-l-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-r-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
        >
          검색
        </button>
      </form>

      {recentSearches.length > 0 && onRecentSearchClick && (
        <RecentSearches
          searches={recentSearches}
          onSearchClick={onRecentSearchClick}
          onClearAll={handleClearAll}
        />
      )}
    </div>
  );
};

export default SearchTextInput;
