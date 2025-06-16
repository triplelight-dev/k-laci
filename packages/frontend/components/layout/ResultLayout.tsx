import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
          margin: '50px auto',
          gap: '100px',
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ResultLayout;
