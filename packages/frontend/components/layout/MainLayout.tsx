import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout; 