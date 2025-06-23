import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// 지자체 데이터 타입 정의
interface RegionData {
  name: string;
  icon: string;
}

interface SearchTextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  recentSearches?: string[];
  onRecentSearchClick?: (value: string) => void;
  regionData?: RegionData[]; // 지자체 데이터 추가
}

// 지자체별 아이콘 매핑 (예시 데이터)
const getRegionIcon = (regionName: string): string => {
  const iconMap: { [key: string]: string } = {
    서울특별시: '/icons/seoul.svg',
    부산광역시: '/icons/busan.svg',
    대구광역시: '/icons/daegu.svg',
    인천광역시: '/icons/incheon.svg',
    광주광역시: '/icons/gwangju.svg',
    대전광역시: '/icons/daejeon.svg',
    울산광역시: '/icons/ulsan.svg',
    세종특별자치시: '/icons/sejong.svg',
    제주특별자치도: '/icons/jeju.svg',
    서귀포시: '/icons/jeju.svg',
    제주시: '/icons/jeju.svg',
  };

  // 정확한 매칭 시도
  if (iconMap[regionName]) {
    return iconMap[regionName];
  }

  // 부분 매칭 시도
  for (const [key, icon] of Object.entries(iconMap)) {
    if (regionName.includes(key) || key.includes(regionName)) {
      return icon;
    }
  }

  // 기본 아이콘
  return '/districts/sample_dist_icon.png';
};

const SearchTextInput: React.FC<SearchTextInputProps> = ({
  value,
  onChange,
  placeholder = '제주 서귀포시',
  recentSearches = [],
  onRecentSearchClick,
  regionData = [],
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
        prev < filteredSearches.length - 1 ? prev + 1 : 0,
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredSearches.length - 1,
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
    <div
      style={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '10px',
          backgroundColor: 'white',
          padding: '18px',
          gap: '10px',
          background: '#1638B1',
          marginBottom: recentSearches.length > 0 ? '25px' : '0',
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
            border: '1px solid transparent',
            color: 'white',
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
            padding: '3px', // 박스 모서리에 흰색 여백을 위한 패딩
            maxHeight: '180px',
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              background: '#F8F9FA', // 리스트 배경색
              borderRadius: '13px', // 부모보다 작은 radius
              overflow: 'hidden',
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
                onMouseEnter={() => setHighlightedIndex(idx)}
                onMouseLeave={() => setHighlightedIndex(-1)}
                style={{
                  padding: '12px 24px',
                  cursor: 'pointer',
                  background:
                    idx === highlightedIndex ? '#D9D9E8' : 'transparent',
                  color: '#222',
                  fontSize: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'background-color 0.2s ease',
                  userSelect: 'none',
                }}
              >
                {/* 지자체 아이콘 */}
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={getRegionIcon(search)}
                    alt={`${search} 아이콘`}
                    width={20}
                    height={20}
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {/* 지자체명 */}
                <div
                  style={{
                    flex: 1,
                    fontWeight: idx === highlightedIndex ? '500' : '400',
                  }}
                >
                  {search}
                </div>
              </div>
            ))}
          </div>
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
          }}
        >
          <div
            style={{
              fontSize: '14px',
              color: 'white',
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
              gap: '15px',
              flexWrap: 'wrap',
            }}
          >
            {recentSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => onRecentSearchClick?.(search)}
                style={{
                  fontSize: '14px',
                  color: 'white',
                  cursor: 'pointer',
                  background: 'transparent',
                  border: '1px solid white',
                  borderRadius: '10px',
                  padding: '6px 12px',
                }}
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchTextInput;
