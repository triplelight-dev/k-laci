const FooterBottomSection = () => {
  const LOGO_SRC = '/klaci_logo_white.png';
  const LOGO_ALT = 'K-LACI Logo';
  const TITLE_KR = '지역자산역량지수';
  const TITLE_EN_1 = 'Korea Local Asset';
  const TITLE_EN_2 = 'Competency Index';
  const currentYear = new Date().getFullYear();

  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '70px',
      }}
    >
      {/* 좌측: 로고 및 텍스트 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <img
            src={LOGO_SRC}
            alt={LOGO_ALT}
            style={{
              height: '32px',
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

      {/* 우측: 저작권 */}
      <div
        style={{
          color: '#9CA3AF',
          fontSize: '14px',
        }}
      >
        <div style={{ margin: 0 }}>
          &copy; {currentYear} K-LACI. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default FooterBottomSection;
