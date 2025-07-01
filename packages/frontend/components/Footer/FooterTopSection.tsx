'use client';

import Image from 'next/image';

const FooterTopSection = () => {
  const sitemapData = {
    personal: {
      title: '개인정보',
      links: [
        { name: '회원가입', href: '/signup' },
        { name: '회원정보', href: '/profile' },
        { name: '개인정보 처리방침', href: '/privacy' },
        { name: '이용약관', href: '/terms' },
      ],
    },
    paid: {
      title: '유료상품',
      links: [
        { name: '웨비나', href: '/webinar' },
        { name: '세미나', href: '/seminar' },
        { name: '리포트', href: '/report' },
      ],
    },
    contact: {
      title: 'Contact',
      links: [
        { name: '프로젝트 문의', href: '/project-inquiry' },
        { name: '기관 소개', href: '/about' },
      ],
    },
  };

  const LOGO_SRC = '/klaci_logo_white.png';
  const LOGO_ALT = 'K-LACI Logo';
  const TITLE_KR = '지역자산역량지수';
  const TITLE_EN_1 = 'Korea Local Asset';
  const TITLE_EN_2 = 'Competency Index';

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#ffffff';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#D1D5DB';
  };

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
                height: '45px',
                width: 'auto',
              }}
            />
          </div>
          <div
            style={{
              color: '#D1D5DB',
              fontSize: '16px',
            }}
          >
            <div style={{ fontWeight: 'bold', lineHeight: 2 }}>{TITLE_KR}</div>
            <div style={{ fontWeight: 'bold' }}>{TITLE_EN_1}</div>
            <div style={{ fontWeight: 'bold' }}>{TITLE_EN_2}</div>
          </div>
        </div>

        {/* 우측: 기존 TopSection 요소들 */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            gap: '70px',
          }}
        >
          {/* 개인정보 섹션 */}
          <div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '24px',
                color: '#ffffff',
              }}
            >
              {sitemapData.personal.title}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {sitemapData.personal.links.map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href={link.href}
                    style={{
                      color: '#D1D5DB',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 유료상품 섹션 */}
          <div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '24px',
                color: '#ffffff',
              }}
            >
              {sitemapData.paid.title}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {sitemapData.paid.links.map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href={link.href}
                    style={{
                      color: '#D1D5DB',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact 섹션 */}
          <div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '24px',
                color: '#ffffff',
              }}
            >
              {sitemapData.contact.title}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {sitemapData.contact.links.map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <a
                    href={link.href}
                    style={{
                      color: '#D1D5DB',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterTopSection;
