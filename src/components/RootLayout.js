import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="fixed top-0 w-full z-50" />
      <div className="flex-grow ">
        <Outlet />
      </div>
      <Footer className="w-full" />
    </div>
  );
};

export default RootLayout;
