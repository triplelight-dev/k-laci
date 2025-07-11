import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import LoginSuggestionSection from '@/features/results/sections/LoginSuggestionSectino';
import { useIsLoggedIn } from '@/store';
import React from 'react';
import HomePreRegistrationSection from '../sections/HomePreRegistrationSection';

const ResultLayout = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: '1500px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
      }}
    >
      <Header />
      {children}
      {!isLoggedIn && <><LoginSuggestionSection /></>}
      {isLoggedIn && <><HomePreRegistrationSection height='650px' /><Footer /></>}
    </div>
  );
};

export default ResultLayout;
