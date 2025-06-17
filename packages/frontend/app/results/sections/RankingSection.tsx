'use client';

import React from 'react';

// 항목별 색상 매핑 (프로젝트에서 찾은 색상 정보 기반)
const categoryColors = {
  안전회복력: '#74BF9E',
  인구성장력: '#F56542',
  경제활동력: '#F2BA5D',
  생활기반력: '#C2BDF3',
  생활역동형: '#ACAAE8',
  안전복원형: '#74BF9E',
  인구정착형: '#F56542',
  경제정속형: '#F4B04D',
  생활정주형: '#ACAAE8',
  안전정진형: '#74BF9E',
  인구성장형: '#F56542',
  경제혁신형: '#F4B04D',
};

// 랭킹 데이터 타입
interface RankingItem {
  rank: number;
  category: string;
  detail: string;
}

// TOP 10 데이터
const top10Data: RankingItem[] = [
  { rank: 1, category: '안전회복력', detail: '의료 접근성 우수' },
  { rank: 2, category: '인구성장력', detail: '청년 인구 유입 증가' },
  { rank: 3, category: '경제활동력', detail: '고용률 상승' },
  { rank: 4, category: '생활기반력', detail: '교통 편의성 향상' },
  { rank: 5, category: '안전회복력', detail: '범죄율 감소' },
  { rank: 6, category: '인구성장력', detail: '출산율 개선' },
  { rank: 7, category: '경제활동력', detail: '소득 수준 향상' },
  { rank: 8, category: '생활기반력', detail: '문화시설 확충' },
  { rank: 9, category: '안전회복력', detail: '재난 대응 체계 강화' },
  { rank: 10, category: '인구성장력', detail: '외국인 주민 증가' },
];

// LOW 10 데이터
const low10Data: RankingItem[] = [
  { rank: 220, category: '경제활동력', detail: '고용률 하락' },
  { rank: 221, category: '생활기반력', detail: '교통 불편' },
  { rank: 222, category: '안전회복력', detail: '의료 접근성 부족' },
  { rank: 223, category: '인구성장력', detail: '인구 유출 증가' },
  { rank: 224, category: '경제활동력', detail: '소득 수준 감소' },
  { rank: 225, category: '생활기반력', detail: '문화시설 부족' },
  { rank: 226, category: '안전회복력', detail: '범죄율 증가' },
  { rank: 227, category: '인구성장력', detail: '출산율 감소' },
  { rank: 228, category: '경제활동력', detail: '사업체 수 감소' },
  { rank: 229, category: '생활기반력', detail: '주거 환경 악화' },
];

// 랭킹 컴포넌트
const RankingList: React.FC<{
  title: string;
  data: RankingItem[];
  icon: string;
  isLoggedIn: boolean;
}> = ({ title, data, icon, isLoggedIn = false }) => {
  return (
    <div style={{ flex: 1, maxWidth: '45%', position: 'relative' }}>
      {/* 타이틀 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'left',
          }}
        >
          {title}
        </div>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#BCBEC0',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: 'white',
          }}
        >
          {icon}
        </div>
      </div>

      {/* 구분선 */}
      <div
        style={{
          borderBottom: '2px solid #BCBEC0',
          marginBottom: '20px',
        }}
      />

      {/* 랭킹 리스트 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '8px 0',
              opacity: isLoggedIn ? 1 : Math.max(0.3, 1 - index * 0.15), // 로그인하지 않았을 때 아래로 갈수록 투명해짐
            }}
          >
            {/* 순위 */}
            <div
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#000000',
                minWidth: '40px',
              }}
            >
              {item.rank}위
            </div>

            {/* 항목 */}
            <div
              style={{
                fontSize: '14px',
                fontWeight: '500',
                color:
                  categoryColors[
                    item.category as keyof typeof categoryColors
                  ] || '#666666',
                minWidth: '80px',
              }}
            >
              {item.category}
            </div>

            {/* 항목 세부 */}
            <div
              style={{
                fontSize: '14px',
                color: '#000000',
                flex: 1,
              }}
            >
              {item.detail}
            </div>
          </div>
        ))}
      </div>

      {/* 로그인하지 않았을 때 그라데이션 오버레이 */}
      {!isLoggedIn && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to bottom, transparent, white)',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
};

// 로그인 유도 컴포넌트
const LoginPrompt: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#EAEAEA',
        borderRadius: '10px',
        padding: '40px',
        textAlign: 'center',
        marginTop: '40px',
        maxWidth: '800px',
        margin: '40px auto 0 auto',
      }}
    >
      <div
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: '#000000',
        }}
      >
        이 지역의 숨겨진 역량, 지금 확인해보세요.
      </div>
      <div
        style={{
          fontSize: '16px',
          marginBottom: '24px',
          color: '#666666',
          lineHeight: '1.5',
        }}
      >
        55개 상세 지표를 통해 지역의 진짜 모습을 확인할 수 있습니다.
      </div>
      <button
        style={{
          backgroundColor: '#000000',
          color: '#ffffff',
          border: 'none',
          padding: '16px 32px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          cursor: 'pointer',
          minWidth: '280px',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#333333';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#000000';
        }}
      >
        로그인하고 인사이트 더 보기
      </button>
    </div>
  );
};

const RankingSection: React.FC = () => {
  // 임시로 로그인 상태 설정 (실제로는 props나 상태 관리에서 받아올 수 있음)
  const isLoggedIn = false; // true로 변경하면 로그인된 상태로 볼 수 있음
  console.log('isLoggedIn', isLoggedIn);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        padding: '40px 20px',
        marginBottom: '250px',
        maxWidth: '1200px',
        margin: '0 auto 250px auto',
      }}
    >
      {/* 랭킹 차트 컨테이너 */}
      <div
        style={{
          display: 'flex',
          gap: '40px',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {/* TOP 10 */}
        <RankingList
          title="TOP 10"
          data={top10Data}
          icon="↑"
          isLoggedIn={isLoggedIn}
        />

        {/* LOW 10 */}
        <RankingList
          title="LOW 10"
          data={low10Data}
          icon="↓"
          isLoggedIn={isLoggedIn}
        />
      </div>

      {/* 로그인하지 않았을 때만 로그인 유도 컴포넌트 표시 */}
      {!isLoggedIn && <LoginPrompt />}
    </div>
  );
};

export default RankingSection;
