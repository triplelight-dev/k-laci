import SearchInput from '@/components/atoms/SearchInput';
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  showSearch?: boolean;
  searchPlaceholder?: string;
  hasTopMargin?: boolean; // 상단 여백 제어 옵션 추가
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  searchTerm,
  onSearchChange,
  showSearch = true,
  searchPlaceholder = '지역 검색',
  hasTopMargin = true, // 기본값 true
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '0 40px',
        paddingTop: hasTopMargin ? '40px' : '0', // 상단 여백 조건부 적용
        marginBottom: '30px',
      }}
    >
      {/* 좌측: 제목과 안내 문구 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            margin: 0,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <span
            style={{
              fontSize: '15px',
              color: '#000',
              fontWeight: 'normal',
            }}
          >
            {subtitle}
          </span>
        )}
      </div>

      {/* 우측: 검색창 */}
      {showSearch && (
        <SearchInput
          value={searchTerm}
          onChange={onSearchChange}
          placeholder={searchPlaceholder}
        />
      )}
    </div>
  );
};

export default SectionHeader; 