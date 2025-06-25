import React from 'react';

interface RecentSearchesProps {
  searches: string[];
  onSearchClick: (value: string) => void;
}

const RecentSearches: React.FC<RecentSearchesProps> = ({
  searches,
  onSearchClick,
}) => {
  return (
    <div style={{ width: '100%', maxWidth: '600px' }}>
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
          {searches.map((search, index) => (
            <button
              key={index}
              onClick={() => onSearchClick(search)}
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
              {index < searches.length - 1 ? ', ' : ''}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentSearches;
