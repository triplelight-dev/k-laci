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
          width: '80%',
          margin: '50px auto',
          border: '1px solid blue',
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ResultLayout;
