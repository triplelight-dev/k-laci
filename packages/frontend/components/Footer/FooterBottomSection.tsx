const FooterBottomSection = () => {
  const currentYear = new Date().getFullYear();

  const mockTexts = [
    '본 웹사이트에서 제공하는 모든 자료는 저작권법에 의하여 보호받는 저작물로서',
    '사전 합의되지 않은 상업적 목적의 무단 복제 및 배포를 금합니다.',
  ];

  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '70px',
      }}
    >
      {/* 좌측: 저작권 */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          color: 'white',
          fontSize: '14px',
        }}
      >
        <div style={{ margin: 0 }}>
          &copy; {currentYear} 트리플라잇 주식회사
        </div>
      </div>

      {/* 우측: 목업 텍스트 */}
      <div
        style={{
          color: '#9A9EA3',
          fontSize: '14px',
          textAlign: 'left',
          flex: 1,
        }}
      >
        {mockTexts.map((text, index) => (
          <div key={index} style={{ margin: 0, lineHeight: '1.4' }}>
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterBottomSection;
