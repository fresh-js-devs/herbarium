import React from 'react';
import { NavLink } from 'react-router-dom';

import './Logo.css';

import plantImg from '../../plant.png'

/**
 * FEEDBACK: Zbytecny onClick kdyz uz mas NavLink
 */
const Logo = ({ onClick }) => {
  return (
    <div onClick={onClick} className='logo'>
      <NavLink to='/'>Herbarium</NavLink>
      <div>
        <img className="plantLogo" onClick={onClick}
          src={plantImg}
          alt='Random plant'
        />
      </div>
    </div>
  );
};

export default Logo;