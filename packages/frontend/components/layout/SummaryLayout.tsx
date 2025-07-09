import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

import HomePreRegistrationSection from '@/components/sections/HomePreRegistrationSection';

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '93%',
            maxWidth: '1600px',
            gap: '40px',
          }}
        >
          {children}
        </div>
      </div>
      <HomePreRegistrationSection />
      <Footer />
    </div>
  );
};

export default SummaryLayout;
