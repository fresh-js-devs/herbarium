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
            {children}
        </div>

        <div className='footer'>
            
        </div>
    </div>
  );
};

export default Layout;
