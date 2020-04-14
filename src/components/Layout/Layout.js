import React from "react";
import { useLocation } from "react-router-dom";
import Heading from "../atoms/Heading";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  /**
   * FEEDBACK: heading bych dal do promenne, zbavil by ses tak ternary vyrazu
   * isDetail by mel byt const protoze ho nemenis, je lepsi vzdy zacit s const a pripadne zmenit na let
   */
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
