'use client';

import { categoryColors } from '@/constants/colors';
import { useAuth } from '@/store';
import React from 'react';

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
}> = ({ title, data, icon, isLoggedIn }) => {
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
              opacity: isLoggedIn ? 1 : Math.max(0.3, 1 - index * 0.15),
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
  // useAuth 훅을 통해 로그인 상태 가져오기
  const { isLoggedIn } = useAuth();

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
