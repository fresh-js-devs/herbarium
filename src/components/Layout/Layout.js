import React from 'react';

/**
 * FEEDBACK: Zbytecny return a slozene zavorky
 */
const Layout = ({ children }) => {

  return (
    <div className='App'>      
      <div className='container'>        
        {children}
      </div>
    </div>
  );
};

export default Layout;
