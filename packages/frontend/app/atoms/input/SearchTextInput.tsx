import React from 'react';
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
  return (
    <div style={{ width: '100%' }}>
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
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            fontSize: '1rem',
            color: 'black',
            border: 'none',
            outline: 'none',
          }}
        />
      </div>

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
