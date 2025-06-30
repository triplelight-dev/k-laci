import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#F4F4F4',
      }}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
