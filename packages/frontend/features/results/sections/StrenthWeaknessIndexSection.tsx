'use client';

import IndexModal from '@/components/atoms/modal/IndexModal';
import { useDistrict } from '@/store';
import React, { useMemo, useState } from 'react';

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
  score?: number;
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
        backgroundColor: '#F1F1F1',
        borderRadius: '12px',
        marginBottom: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        paddingTop: '12px',
        paddingBottom: '12px',
      }}
      onClick={() => onClick(data)}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `white`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#F1F1F1';
      }}
    >
      {/* 뱃지 */}
      <div
        style={{
          padding: '4px 8px',
          backgroundColor: 'white',
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
}> = ({ title, data, onItemClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        color: '#000000',
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
          gap: '10px',
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<IndexData | null>(null);

  // Zustand store에서 선택된 지역 정보 가져오기
  const { selectedDistrict } = useDistrict();

  const handleItemClick = (data: IndexData) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  // selectedDistrict를 바탕으로 동적으로 데이터 생성
  const { strengthData, weaknessData } = useMemo(() => {
    if (!selectedDistrict) {
      // 기본값 반환
      return {
        strengthData: [
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
        ],
        weaknessData: [
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
        ],
      };
    }

    const {
      growth_score = 50,
      economy_score = 50,
      living_score = 50,
      safety_score = 50,
    } = selectedDistrict;

    // 점수 기반으로 강점/약점 분류
    const allIndicators = [
      { category: '인구성장형', value: '청년인구수', score: growth_score },
      { category: '인구정착형', value: '출생률', score: 100 - growth_score },
      { category: '경제혁신형', value: '신생기업수', score: economy_score },
      {
        category: '경제정속형',
        value: '1인당 GRDP',
        score: 100 - economy_score,
      },
      { category: '생활역동형', value: '문화활동참여율', score: living_score },
      {
        category: '생활정주형',
        value: '주거환경지수',
        score: 100 - living_score,
      },
      { category: '안전복원형', value: '재난대응속도', score: safety_score },
      { category: '안전정진형', value: '안전지수', score: 100 - safety_score },
      { category: '경제혁신형', value: '벤처기업수', score: economy_score },
      { category: '생활정주형', value: '공원면적', score: 100 - living_score },
    ];

    // 점수 기준으로 정렬 (높은 점수가 강점, 낮은 점수가 약점)
    const sortedIndicators = allIndicators.sort(
      (a, b) => (b.score || 0) - (a.score || 0),
    );

    // 상위 10개를 강점, 하위 10개를 약점으로 분류
    const strengthData = sortedIndicators.slice(0, 10).map((item) => ({
      category: item.category,
      value: item.value,
      score: item.score,
    }));

    const weaknessData = sortedIndicators
      .slice(-10)
      .reverse()
      .map((item) => ({
        category: item.category,
        value: item.value,
        score: item.score,
      }));

    return { strengthData, weaknessData };
  }, [selectedDistrict]);

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
          isStrength={true}
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
