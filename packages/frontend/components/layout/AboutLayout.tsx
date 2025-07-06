import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { DARK_MODE_COLORS } from '@/utils/colors';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: DARK_MODE_COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80%',
          maxWidth: '1000px',
          gap: '100px',
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AboutLayout; 