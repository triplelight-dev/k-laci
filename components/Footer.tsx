import NewsletterForm from '../atoms/NewsletterForm';

const companyInfo = [
  { text: '대표: 이은화, 정유진' },
  { text: '사업자등록번호: 525-88-01428' },
];

const contactInfo = [
  { text: '02-706-8818' },
  { text: 'impact@triplelight.co', underline: true },
];

const locationInfo = [
  {
    text: '04315 서울특별시 용산구 원효로90길 11, 용산더프라임 208호',
    underline: true,
  },
];

const Footer = () => {
  return (
    <footer
      className="bg-black px-6 py-8 text-white"
      style={{
        background: 'black',
        color: 'white',
        padding: '3%',
        paddingTop: '5%',
        paddingBottom: '5%',
      }}
    >
      <div className="container mx-auto">
        {/* Top Section: Logo and Newsletter */}
        <div
          className="flex items-start gap-8 pb-8"
          style={{ paddingBottom: '6%' }}
        >
          {/* Logo Placeholder */}
          <div className="flex-1 text-xl font-bold">
            <img
              src="/triple_logo.png"
              alt="K-LACI Logo"
              style={{ width: '50%' }}
            />
          </div>

          {/* Newsletter Form Placeholder */}
          <div
            className="flex flex-[1.5] flex-col items-start"
            style={{ width: '100%', gap: '1rem' }}
          >
            <div className="flex flex-col items-start" style={{ gap: '0px' }}>
              <div
                className="mb-2 text-lg font-semibold"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.4rem',
                  fontWeight: 600,
                }}
              >
                임팩트와 이슈의 최신 트렌드와 전문적인 인사이트를 매월 마지막 날
              </div>
              <div
                className="mb-2 text-lg font-semibold"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.4rem',
                  fontWeight: 600,
                }}
              >
                트리플라잇 뉴스레터로 만나보세요
              </div>
            </div>
            <NewsletterForm />
          </div>
        </div>

        {/* Separator */}
        <div className="my-40 border-t border-gray-700"></div>

        {/* Bottom Section: Company, Contact, Location */}
        <div
          className="flex items-start gap-12"
          style={{ gap: '3rem', paddingTop: '3rem' }}
        >
          {/* Company Info */}
          <div className="p-4 text-sm">
            <div
              className="mb-2 font-semibold"
              style={{ paddingBottom: '1rem' }}
            >
              트리플라잇(주)
            </div>
            {companyInfo.map((item, idx) => (
              <div key={idx}>{item.text}</div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="p-4 text-sm">
            <div
              className="mb-2 font-semibold"
              style={{ paddingBottom: '1rem' }}
            >
              Contact
            </div>
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className={item.underline ? 'underline' : undefined}
              >
                {item.text}
              </div>
            ))}
          </div>

          {/* Location Info */}
          <div className="p-4 text-sm">
            <div
              className="mb-2 font-semibold"
              style={{ paddingBottom: '1rem' }}
            >
              {' '}
              Location
            </div>
            {locationInfo.map((item, idx) => (
              <div
                key={idx}
                className={item.underline ? 'underline' : undefined}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
