import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gradientHeight = 15;

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: `
          linear-gradient(to bottom, black, #001e6c, #357ded, white ${gradientHeight}%, white 100%)
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        backgroundColor: 'white',
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;