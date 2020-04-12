import React from 'react';
import {useLocation} from 'react-router-dom';
import Logo from '../Logo/Logo';

const Layout = ({children}) => {
    const {pathname} = useLocation();

    return(
        <div className = 'App'>
            <Logo></Logo>
            <div className = 'wrapper'>
                {pathname === '/' ? <h1>All herbs</h1> : <h1>Herb</h1>}
                <div className = 'container'>                
                    {children}
                </div>
            </div>
            
        </div>
    );
};

export default Layout;