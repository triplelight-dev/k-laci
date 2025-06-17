import React from 'react';

const SummaryHeader: React.FC = () => {
  // 여기서 필요한 데이터를 직접 가져오거나 처리
  const title = '우리 마을 성장 일기'; // 실제 데이터로 대체
  const typeName = '포용·성장·공동체형'; // 실제 데이터로 대체
  const description =
    '인구가 점진적으로 증가하고 안전 수준도 높으며, 안정된 경제와 조용한 주거 환경 속에서 공동체적 가치를 증시하는 유형입니다. 안온한 성장을 추구합니다.'; // 실제 데이터로 대체

  return (
    <div
      className="flex max-w-2xl flex-col items-center gap-4"
      style={{ gap: '1.5rem', marginBottom: '5rem' }}
    >
      {/* 메인 타이틀 */}
      <div
        className="text-center text-3xl font-bold"
        style={{ fontSize: '2.5rem', fontWeight: 800 }}
      >
        {title}
      </div>

      <div
        style={{
          color: '#C8CDD4',
          fontSize: '1.5rem',
          fontWeight: 600,
        }}
      >
        {typeName}
      </div>

      {/* 구분선 */}
      <div
        style={{
          width: '70px',
          height: '3px',
          backgroundColor: 'black',
          marginBottom: '1rem',
          marginTop: '1rem',
        }}
      />

      {/* 설명 텍스트 */}
      <div
        className="text-center leading-relaxed text-gray-600"
        style={{ width: '85%', fontSize: '1.2rem', lineHeight: 1.5 }}
      >
        {description}
      </div>
    </div>
  );
};

export default SummaryHeader;
