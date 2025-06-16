import React from 'react';
import Image from 'next/image';

interface SearchTextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchTextInput: React.FC<SearchTextInputProps> = ({
  value,
  onChange,
  placeholder = '지자체 검색',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50px',
        backgroundColor: 'white',
        padding: '10px 20px',
        gap: '10px',
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
          fontSize: '1.2rem',
          color: 'black',
          border: 'none',
          outline: 'none',
        }}
      />
    </div>
  );
};

export default SearchTextInput;
