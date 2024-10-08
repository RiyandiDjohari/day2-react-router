import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer className='bg-[#F6F9FC]'>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
