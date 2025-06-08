import React from 'react';

const SummaryHeader: React.FC = () => {
  // 여기서 필요한 데이터를 직접 가져오거나 처리
  const typeName = '생활·안전·강화형'; // 실제 데이터로 대체
  const title = '우리 동네 안전 지킴이'; // 실제 데이터로 대체
  const description =
    '인구와 경제는 안정적이나 생활은 활기찬 반면, 안전 및 복지 시스템 개선이 필요한 유형입니다.점진적 발전과 안전 강화가 요구됩니다.'; // 실제 데이터로 대체

  return (
    <div
      className="flex max-w-2xl flex-col items-center gap-4"
      style={{ gap: '1.5rem', marginBottom: '5rem' }}
    >
      {/* 유형명 뱃지 */}
      <div
        className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600"
        style={{
          padding: '0.5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          border: '1px solid #CCCCCC',
        }}
      >
        {typeName}
      </div>

      {/* 메인 타이틀 */}
      <div
        className="text-center text-3xl font-bold"
        style={{ fontSize: '2.5rem', fontWeight: 800 }}
      >
        {title}
      </div>

      {/* 구분선 */}
      <div
        style={{
          width: '10%',
          height: '3px',
          backgroundColor: 'black',
          marginBottom: '1rem',
          marginTop: '1rem',
        }}
      />

      {/* 설명 텍스트 */}
      <div
        className="text-center leading-relaxed text-gray-600"
        style={{ fontSize: '1.2rem', lineHeight: '1.5' }}
      >
        {description}
      </div>
    </div>
  );
};

export default SummaryHeader;
