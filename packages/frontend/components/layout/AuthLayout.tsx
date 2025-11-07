import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div
      style={{
        width: '100%',
        // minWidth: '1500px',
        minHeight: '100vh',
        backgroundColor: '#F4F4F4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
      }}
    >
      <Header isBlackTheme={false} />
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
