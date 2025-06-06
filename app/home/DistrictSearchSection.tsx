'use client';

import React from 'react';
import { Search } from 'lucide-react';

// 텍스트 상수 정의
const SECTION_CONTENT = {
  title: '229개 지자체 중 우리 지역 찾아보기',
  description: `K-LACI 229는 혁신적인 디자인과 최첨단 기술이 만나 탄생한 새로운
  컬렉션입니다. 이번 컬렉션에서는 지속가능한 소재와 현대적인 실루엣을
  결합하여, 일상에서도 특별함을 느낄 수 있는 아이템들을 선보입니다..`,
  searchPlaceholder: '지자체 검색',
} as const;

// 스타일 상수 정의
const STYLES = {
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '12rem',
    paddingBottom: '12rem',
    background: 'white',
    color: 'black',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  description: {
    width: '45%',
    fontSize: '1rem',
    lineHeight: '1.3rem',
    marginBottom: '2rem',
  },
  searchContainer: {
    width: '50%',
    position: 'relative' as const,
  },
  searchIcon: {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#666',
  },
  searchInput: {
    width: '100%',
    padding: '1rem 1rem 1rem 3rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '0.5rem',
    outline: 'none',
  },
} as const;

const DistrictSearchSection = () => {
  return (
    <div style={STYLES.container}>
      <section className="flex w-full flex-col items-center py-20">
        {/* 타이틀 */}
        <div style={STYLES.title}>{SECTION_CONTENT.title}</div>

        {/* 설명 텍스트 */}
        <div style={STYLES.description}>{SECTION_CONTENT.description}</div>

        {/* 검색 입력창 */}
        <div style={STYLES.searchContainer}>
          <div style={STYLES.searchIcon}>
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder={SECTION_CONTENT.searchPlaceholder}
            style={STYLES.searchInput}
          />
        </div>
      </section>
    </div>
  );
};

export default DistrictSearchSection;
