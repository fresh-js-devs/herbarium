import React from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';


const Layout = ({ children }) => {
  const { pathname } = useLocation();
    return (
      <div className='layout'>
        <Logo />
        <div className='container'>
          {pathname === '/' ? <h1>Main page</h1> : <h1>Detail page</h1>}
          
          {children}
        </div>
      </div>
    );
  };
  
  export default Layout;