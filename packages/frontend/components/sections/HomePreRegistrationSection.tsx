'use client';

import Image from 'next/image';
import Link from 'next/link';

const HomePreRegistrationSection = () => {
  // 타이틀 텍스트를 배열로 정의
  const MAIN_TITLE = ['균형발전 전략의 시작,', 'KLACI 인사이트 리포트'];

  // 설명 텍스트를 배열로 정의
  const DESCRIPTION_TEXTS = [
    '지역자산역량지수 프레임워크 해설과 활용법,',
    '그리고 각 지자체의 데이터 인사이트를 한 권의 책으로 받아보세요.',
  ];

  return (
    <section
      style={{
        width: '100%',
        padding: '80px 120px',
        backgroundColor: '#14161D',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '80px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* 좌측: 기존 내용 */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* 메인 타이틀 */}
          <div
            style={{
              fontSize: '34px',
              fontWeight: '600',
              textAlign: 'left',
              marginBottom: '24px',
              lineHeight: '1.4',
            }}
          >
            {MAIN_TITLE.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>

          {/* 설명 텍스트들 */}
          <div
            style={{
              marginBottom: '32px',
              textAlign: 'left',
            }}
          >
            {DESCRIPTION_TEXTS.map((text, index) => (
              <div
                key={index}
                style={{
                  fontSize: '16px',
                  color: '#D1D5DB',
                  lineHeight: '1.6',
                }}
              >
                {text}
              </div>
            ))}
          </div>

          {/* 사전예약 바로가기 버튼 */}
          <Link href="/pre-registration">
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 36px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid #ffffff',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              사전예약 바로가기
              <Image
                src="/arrow_button_icon_white.png"
                alt="화살표 아이콘"
                width={10}
                height={10}
              />
            </button>
          </Link>
        </div>

        {/* 우측: 이미지 */}
        <div
          style={{
            flex: '1.5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="/report_banner.png"
            alt="KLACI 인사이트 리포트"
            style={{
              maxWidth: '550px',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePreRegistrationSection;
