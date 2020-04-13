import React from "react";
import { NavLink } from "react-router-dom";

import "./Logo.css";
import "./logo.png";

const Logo = ({ onClick }) => {
  return (
    <div onClick={onClick} className="logo">
      <NavLink to="/">
        <img src={require("./logo.png")} alt="logo"></img>
      </NavLink>
    </div>
  );
};

export default Logo;
