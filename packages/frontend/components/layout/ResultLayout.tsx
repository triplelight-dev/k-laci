import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LoginSuggestionSection from '@/features/results/sections/LoginSuggestionSectino';
import { useIsLoggedIn } from '@/store';
import React from 'react';

const ResultLayout = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useIsLoggedIn();
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
      {!isLoggedIn && <LoginSuggestionSection />}

      {isLoggedIn && <Footer />}
    </div>
  );
};

export default ResultLayout;
