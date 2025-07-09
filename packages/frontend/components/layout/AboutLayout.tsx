import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';

import { DARK_MODE_COLORS } from '@/utils/colors';
import HomePreRegistrationSection from '../sections/HomePreRegistrationSection';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: '100%',
        minWidth: '1500px',
        minHeight: '100vh',
        backgroundColor: DARK_MODE_COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      {children}
      <HomePreRegistrationSection />
      <Footer />
    </div>
  );
};

export default AboutLayout;
