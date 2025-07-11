import Header from '@/components/Header/Header';
import React from 'react';

const ResultLayout = ({ children }: { children: React.ReactNode }) => {
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
    </div>
  );
};

export default ResultLayout;
