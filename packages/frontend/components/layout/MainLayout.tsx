import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const gradientHeight = 15;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: '100%',
        minWidth: '1500px',
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

export default MainLayout;
