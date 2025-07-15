import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import HomePreRegistrationSection from '@/components/sections/HomePreRegistrationSection';
import { DARK_MODE_COLORS } from '@/utils/colors';


const HomeLayout = ({ children }: { children: React.ReactNode }) => {
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
      <Header isBlackTheme={true} />
      {children}
      <HomePreRegistrationSection />
      <Footer />
    </div>
  );
};

export default HomeLayout;
