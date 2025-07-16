'use client';

import { EXTERNAL_LINKS } from '@/constants/links';

const FooterTopSection = () => {
  const LOGO_SRC = '/klaci_logo_footer_white.svg';
  const LOGO_ALT = 'K-LACI Logo';

  // 저작권 텍스트를 배열로 정의
  const COPYRIGHT_TEXT = [
    '본 웹사이트에서 제공하는 모든 자료는 저작권법에 의하여 보호받는 저작물로서 사전 합의되지 않은 상업적 목적의 무단 복제 및 배포를 금합니다.',
    '본 웹사이트에 수록된 자료는 일반 정보 제공용이며 당사는 자료 이용에 따른 어떤 법적 책임도 부담하지 않습니다.',
    '자세한 내용은 ',
    '면책 고지 전문',
    '을 확인해 주시기 바랍니다.',
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
            <img
              src={LOGO_SRC}
              alt={LOGO_ALT}
              style={{
                height: '100px',
                width: 'auto',
              }}
            />
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
            {COPYRIGHT_TEXT.map((line, index) => {
              if (line === '면책 고지 전문') {
                return (
                  <a
                    key={index}
                    href={EXTERNAL_LINKS.DISCLAIMER}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#D1D5DB',
                      textDecoration: 'underline',
                      textDecorationColor: '#D1D5DB',
                      textDecorationThickness: '1px',
                      cursor: 'pointer',
                      textAlign: 'justify',
                    }}
                  >
                    {line}
                  </a>
                );
              }
              return <span key={index}>{line}</span>;
            })}
          </div>

          {/* 정책 링크들 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px',
              gap: '24px',
            }}
          >
            <a
              href={EXTERNAL_LINKS.PRIVACY_POLICY}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#D1D5DB',
                fontSize: '14px',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              개인정보 처리방침
            </a>
            <a
              href={EXTERNAL_LINKS.TERMS_OF_SERVICE}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#D1D5DB',
                fontSize: '14px',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              서비스 이용약관
            </a>
            <a
              href={EXTERNAL_LINKS.MARKETING_CONSENT}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#D1D5DB',
                fontSize: '14px',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              마케팅 정보 수신
            </a>
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
              <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterTopSection;
