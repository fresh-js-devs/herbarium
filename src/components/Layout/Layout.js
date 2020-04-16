import React from 'react';
import {useLocation} from 'react-router-dom';
/**
 * FEEDBACK: Oddelovat importy 3.strany s vlastnimi importy
 */
import Logo from '../Logo/Logo';

const Layout = ({children}) => {
    const {pathname} = useLocation();
    /**
     * FEEDBACK: Logo by melo by self closing: <Logo />
     * a opet nedelat mezery mezi znamenkem rovna se v props
     */
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