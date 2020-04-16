import React from 'react';
import {NavLink} from 'react-router-dom';
/**
 * FEEDBACK: Oddelovat importy 3.strany s vlastnimi importy
 */
import './Logo.css';

const Logo = ({onClick}) =>{
    /**
     * FEEDBACK: Pokud komponenta nema children tak by mela byt self closing <NavLink to="/" />
     */
    return(
        <div onClick = {onClick} className = 'logo'>
            <NavLink to = '/'></NavLink>
        </div>
    );
    
};

export default Logo;