import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  width?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = '검색',
  width = '280px',
}) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        src="/search_icon.png"
        alt="검색"
        style={{
          position: 'absolute',
          left: '12px',
          width: '12px',
          height: '12px',
          marginLeft: '4px',
          zIndex: 1,
        }}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width,
          height: '36px',
          padding: '8px 12px 8px 36px',
          border: '1px solid #ddd',
          borderRadius: '12px',
          fontSize: '14px',
          outline: 'none',
          backgroundColor: 'white',
        }}
      />
    </div>
  );
};

export default SearchInput;
