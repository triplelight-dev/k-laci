import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import { DARK_MODE_COLORS } from '@/utils/colors';
import React from 'react';

const SummaryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{
      width: '100%',
      minWidth: '1500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: DARK_MODE_COLORS.background,
    }}>
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
