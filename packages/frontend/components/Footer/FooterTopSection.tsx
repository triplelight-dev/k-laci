'use client';

import Image from 'next/image';

const FooterTopSection = () => {
  const LOGO_SRC = '/klaci_logo_white_prod.png';
  const LOGO_ALT = 'K-LACI Logo';
  const TITLE_KR = '지역자산역량지수';
  const TITLE_EN_1 = 'Korea Local Asset';
  const TITLE_EN_2 = 'Competency Index';

  // 저작권 텍스트를 배열로 정의
  const COPYRIGHT_TEXT = [
    '본 웹사이트에서 제공하는 모든 자료는 저작권법에 의하여 보호받는 저작물로써',
    '사전 합의되지 않은 상업적 목적의 무단 복제 및 배포를 금합니다.'
  ];

  const COMPANY_NAME = '트리플라잇 주식회사';
  const EMAIL_ADDRESS = 'klaci@triplelight.co';

  const currentYear = new Date().getFullYear();

  return (
    <section
      style={{
        width: '100%',
        paddingTop: '48px',
        backgroundColor: '#000000',
        color: '#ffffff',
        marginBottom: '70px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {/* 좌측: 로고 및 텍스트 */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ marginBottom: '16px' }}>
            <Image
              src={LOGO_SRC}
              alt={LOGO_ALT}
              width={120}
              height={45}
              style={{
                height: '35px',
                width: 'auto',
              }}
            />
          </div>
          <div
            style={{
              color: '#D1D5DB',
              fontSize: '16px',
              textAlign: 'left',
            }}
          >
            <div style={{ fontWeight: 'bold', lineHeight: 2 }}>{TITLE_KR}</div>
            <div style={{ fontWeight: 'bold' }}>{TITLE_EN_1}</div>
            <div style={{ fontWeight: 'bold' }}>{TITLE_EN_2}</div>
          </div>
        </div>

        {/* 우측: 저작권 및 회사 정보 */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* 저작권 텍스트 */}
          <div
            style={{
              color: '#D1D5DB',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '24px',
              textAlign: 'left',
              maxWidth: '100%',
            }}
          >
            {COPYRIGHT_TEXT.map((line, index) => (
              <div key={index}>
                {line}
              </div>
            ))}
          </div>

          {/* 회사 정보 및 이메일 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {/* 회사명 */}
            <div
              style={{
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 'bold',
                marginRight: '24px',
              }}
            >
              &copy; {currentYear} {COMPANY_NAME}
            </div>

            {/* 이메일 */}
            <div
              style={{
                color: '#D1D5DB',
                fontSize: '14px',
              }}
            >
              {EMAIL_ADDRESS}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterTopSection;
