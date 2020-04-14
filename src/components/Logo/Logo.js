import React from 'react';
import {NavLink} from 'react-router-dom';

import './Logo.css';

/**
 * FEEDBACK: Nevyuzita prop onClick ktera ti nechodi z Layout
 */
const Logo = ({ onClick }) => {
  return (
    <div onClick={onClick} className='logo'>
      <NavLink to="/">Herbarium App</NavLink>
      
    </div>
  );
};

export default Logo;
