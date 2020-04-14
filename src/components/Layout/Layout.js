import React from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';
import PageHeader from '../../components/atoms/Nadpis.js'
/**
 * FEEDBACK: Zbytecne id
*/
const Layout = ({ children, id}) => {
  const { pathname } = useLocation();
  
  return (
    <div className='App'>
      {/* <Logo /> */}
      <div className='container'>
      <Logo />
        {pathname === '/' ? <PageHeader>Main page</PageHeader> : <PageHeader>Detail page</PageHeader>}   {/* according to pathname(url) will be render 'Main page' or 'Detail page' */}
        {children}
      </div>
    </div>
  );
};

export default Layout;