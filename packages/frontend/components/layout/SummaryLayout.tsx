import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SummaryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ width: '100%' }}>
      <Header />
      <div
        style={{
          width: '100%',
          backgroundColor: '#F4F4F4',
          display: 'flex',
          flexDirection: 'column',
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

export default SummaryLayout;
