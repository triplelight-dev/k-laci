import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const ResultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ResultLayout;
