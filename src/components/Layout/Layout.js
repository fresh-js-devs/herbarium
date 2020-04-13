import React from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './Layout.css'

const Layout = ({ children }) => {

    const { pathname } = useLocation();

  return (
    <div className='App'>
        <div className='header'>
            <Logo />
        </div>

      
      
      <div className='container'>
        {pathname === '/' ? <h1>Main page</h1> : <h1>Post</h1>}
        {children}
      </div>
    </div>
  );
};

export default Layout;
