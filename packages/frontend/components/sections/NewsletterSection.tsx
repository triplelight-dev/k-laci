import NewsletterForm from '@/components/atoms/NewsletterForm';

const NewsletterSection = () => (
  <div className="flex-[1.5] flex flex-col items-start" style={{ width: '100%', gap: '1rem' }}>
    <div className="flex flex-col items-start" style={{ gap: '0px' }}>
      <div
        className="mb-2 text-lg font-semibold"
        style={{ fontSize: '1.2rem', lineHeight: '1.4rem', fontWeight: 600 }}
      >
        임팩트와 이슈의 최신 트렌드와 전문적인 인사이트를 매월 마지막 날
      </div>
      <div
        className="mb-2 text-lg font-semibold"
        style={{ fontSize: '1.2rem', lineHeight: '1.4rem', fontWeight: 600 }}
      >
        트리플라잇 뉴스레터로 만나보세요
      </div>
    </div>
    <NewsletterForm />
  </div>
);

export default NewsletterSection; 