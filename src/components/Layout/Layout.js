import React from "react";
import { useLocation } from "react-router-dom";

import Logo from "../Logo/Logo";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Logo />
      <div className="container">
        {pathname === "/" ? <h1>Menu</h1> : <h1>Detail</h1>}
        {children}
      </div>
    </div>
  );
};

export default Layout;
