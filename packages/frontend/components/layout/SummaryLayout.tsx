import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import { DARK_MODE_COLORS } from '@/utils/colors';
import React from 'react';
import HomePreRegistrationSection from '../sections/HomePreRegistrationSection';

const SummaryLayout = ({ children, isBlackTheme }: { children: React.ReactNode, isBlackTheme: boolean }) => {
  return (
    <div style={{
      width: '100%',
      minWidth: '1500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isBlackTheme ? DARK_MODE_COLORS.background : '#F4F4F4',
    }}>
      <Header isBlackTheme={isBlackTheme} />
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
