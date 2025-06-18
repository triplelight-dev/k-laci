import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface SearchTextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  recentSearches?: string[];
  onRecentSearchClick?: (value: string) => void;
}

const SearchTextInput: React.FC<SearchTextInputProps> = ({
  value,
  onChange,
  placeholder = '지자체 검색',
  recentSearches = [],
  onRecentSearchClick,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  // 입력값에 따라 최근 검색어 필터링
  const filteredSearches = value
    ? recentSearches.filter((search) => search.includes(value))
    : recentSearches;

  // 인풋 포커스/블러 처리
  const handleFocus = () => {
    if (filteredSearches.length > 0) setShowDropdown(true);
  };
  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 100); // 버튼 클릭 허용
  };

  // 키보드 네비게이션
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || filteredSearches.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredSearches.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredSearches.length - 1
      );
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      e.preventDefault();
      const selected = filteredSearches[highlightedIndex];
      onChange(selected);
      onRecentSearchClick?.(selected);
      setShowDropdown(false);
      inputRef.current?.blur();
    }
  };

  // 입력값 바뀌면 하이라이트 초기화
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [value]);

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '50px',
          backgroundColor: 'white',
          padding: '18px',
          gap: '10px',
          boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: recentSearches.length > 0 ? '20px' : '0',
        }}
      >
        <div className="mr-3 flex-shrink-0">
          <Image src="/textinput_icon.png" alt="검색" width={15} height={15} />
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            fontSize: '1rem',
            color: 'black',
            border: 'none',
            outline: 'none',
          }}
          autoComplete="off"
        />
      </div>

      {/* AutoComplete Dropdown */}
      {showDropdown && filteredSearches.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: 0,
            right: 0,
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            zIndex: 10,
            padding: '8px 0',
            maxHeight: '180px',
            overflowY: 'auto',
          }}
        >
          {filteredSearches.map((search, idx) => (
            <div
              key={idx}
              onMouseDown={() => {
                onChange(search);
                onRecentSearchClick?.(search);
                setShowDropdown(false);
              }}
              style={{
                padding: '10px 24px',
                cursor: 'pointer',
                background: idx === highlightedIndex ? '#F0F2F5' : 'white',
                color: '#222',
                fontSize: '15px',
              }}
            >
              {search}
            </div>
          ))}
        </div>
      )}

      {/* 기존 최근 검색어 라벨은 그대로 */}
      {recentSearches.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
            marginTop: showDropdown ? '70px' : '0', // 드롭다운과 겹치지 않게
          }}
        >
          <div
            style={{
              fontSize: '14px',
              color: '#B0B3BA',
              background: 'transparent',
              marginRight: '20px',
            }}
          >
            최근 검색어
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '4px',
              flexWrap: 'wrap',
            }}
          >
            {recentSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => onRecentSearchClick?.(search)}
                style={{
                  fontSize: '14px',
                  color: '#000000',
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                }}
              >
                {search}
                {index < recentSearches.length - 1 ? ', ' : ''}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchTextInput;
