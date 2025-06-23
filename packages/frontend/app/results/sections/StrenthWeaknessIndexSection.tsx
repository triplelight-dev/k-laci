'use client';

import React, { useState } from 'react';
import IndexModal from '@/app/atoms/modal/IndexModal';

// 색상 맵 정의
const colorMap: Record<string, string> = {
  생활역동형: '#874FFF',
  생활정주형: '#874FFF',
  안전복원형: '#24CB71',
  안전정진형: '#24CB71',
  인구정착형: '#FF3737',
  인구성장형: '#FF3737',
  경제정속형: '#FFA600',
  경제혁신형: '#FFA600',
};

// 지수 데이터 타입
interface IndexData {
  category: string;
  value: string;
}

// 지수 컴포넌트
const IndexItem: React.FC<{
  data: IndexData;
  onClick: (data: IndexData) => void;
}> = ({ data, onClick }) => {
  const categoryColor = colorMap[data.category] || '#874FFF';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '8px 12px',
        backgroundColor: 'white',
        border: '1px solid #D9D9E8',
        borderRadius: '12px',
        marginBottom: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onClick={() => onClick(data)}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#F5F5F5';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'white';
      }}
    >
      {/* 뱃지 */}
      <div
        style={{
          padding: '4px 8px',
          backgroundColor: 'white',
          border: `1px solid ${categoryColor}`,
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: '500',
          color: categoryColor,
          whiteSpace: 'nowrap',
        }}
      >
        {data.category}
      </div>

      {/* 값 */}
      <span
        style={{
          color: '#000000',
          fontSize: '18px',
          fontWeight: '400',
        }}
      >
        {data.value}
      </span>
    </div>
  );
};

// 지표 섹션 컴포넌트
const IndexSection: React.FC<{
  title: string;
  data: IndexData[];
  isStrength?: boolean;
  onItemClick: (data: IndexData) => void;
}> = ({ title, data, isStrength = true, onItemClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        {/* 타이틀 */}
        <div
          style={{
            color: '#949FB0',
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '4px',
          }}
        >
          {title}
        </div>

        {/* 순위 표시 */}
        <div
          style={{
            color: '#949FB0',
            fontSize: '14px',
            fontWeight: '400',
            marginBottom: '16px',
          }}
        >
          1위 - 50위 순
        </div>
      </div>

      {/* 지수 목록 */}
      <div
        style={{
          display: 'flex',
          flex: 2,
          flexDirection: 'column',
        }}
      >
        {data.map((item, index) => (
          <IndexItem key={index} data={item} onClick={onItemClick} />
        ))}
      </div>
    </div>
  );
};

const StrengthWeaknessIndexSection: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<IndexData | null>(null);

  const handleRecentSearchClick = (value: string) => {
    setSearchValue(value);
  };

  const handleItemClick = (data: IndexData) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  // 목업 데이터
  const strengthData: IndexData[] = [
    { category: '인구성장형', value: '청년인구수' },
    { category: '경제혁신형', value: '신생기업수' },
    { category: '생활정주형', value: '주거환경지수' },
    { category: '안전정진형', value: '안전지수' },
    { category: '생활역동형', value: '문화활동참여율' },
    { category: '경제정속형', value: '1인당 GRDP' },
    { category: '인구정착형', value: '출생률' },
    { category: '안전복원형', value: '재난대응속도' },
    { category: '생활정주형', value: '공원면적' },
    { category: '경제혁신형', value: '벤처기업수' },
  ];

  const weaknessData: IndexData[] = [
    { category: '경제정속형', value: '경제성장률' },
    { category: '인구정착형', value: '인구유입률' },
    { category: '생활역동형', value: '문화시설수' },
    { category: '안전복원형', value: '재난대응력' },
    { category: '생활정주형', value: '주거비용' },
    { category: '경제혁신형', value: '창업지원지수' },
    { category: '인구성장형', value: '고령화비율' },
    { category: '안전정진형', value: '범죄발생률' },
    { category: '생활역동형', value: '여가시간' },
    { category: '경제정속형', value: '실업률' },
  ];

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '50px',
          width: '100%',
        }}
      >
        {/* 강점지표 */}
        <IndexSection
          title="강점지표"
          data={strengthData}
          isStrength={true}
          onItemClick={handleItemClick}
        />

        {/* 약점지표 */}
        <IndexSection
          title="약점지표"
          data={weaknessData}
          isStrength={false}
          onItemClick={handleItemClick}
        />
      </div>

      {/* 모달 */}
      {selectedData && (
        <IndexModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          data={selectedData}
        />
      )}
    </>
  );
};

export default StrengthWeaknessIndexSection;
