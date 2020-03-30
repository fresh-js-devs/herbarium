import React from "react";
import { useLocation } from "react-router-dom";
import Heading from "../atoms/Heading";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  let isDetail = pathname === "/";

  return (
    <div className="App">
      <div className="container">
        {isDetail ? (
          <Heading>Herbarium</Heading>
        ) : (
          <Heading>Herb Detail</Heading>
        )}
        {children}
      </div>
    </div>
  );
};

export default Layout;
