import React from 'react';
import Header from './header'; // Make sure the import path is correct
import Footer from './footer'; // Make sure the import path is correct

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='container mx-auto'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;