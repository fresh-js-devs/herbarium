import React from "react";
import { NavLink } from "react-router-dom";

import "./Logo.css";
/**
 * FEEDBACK: Zbytecny return a slozene zavorky
 */
const Logo = ({ onClick }) => {
  return (
    <div onClick={onClick} className="logo">
      <NavLink to="/">Herbal list</NavLink>
    </div>
  );
};

export default Logo;
