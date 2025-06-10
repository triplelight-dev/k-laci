import NewsletterSection from '@/components/sections/NewsletterSection';
import CompanyInfoSection from '@/components/sections/CompanyInfoSection';
import ContactSection from '@/components/sections/ContactSection';
import LocationSection from '@/components/sections/LocationSection';

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
        <div
          className="flex items-start gap-8 pb-8"
          style={{ paddingBottom: '6%' }}
        >
          <div className="flex-1 text-xl font-bold">
            <img
              src="/triple_logo.png"
              alt="K-LACI Logo"
              style={{ width: '50%' }}
            />
          </div>
          <NewsletterSection />
        </div>
        <div className="my-40 border-t border-gray-700"></div>
        <div
          className="flex items-start gap-12"
          style={{ gap: '3rem', paddingTop: '3rem' }}
        >
          <CompanyInfoSection />
          <ContactSection />
          <LocationSection />
        </div>
      </div>
    </footer>
  );
};

export default Footer; 