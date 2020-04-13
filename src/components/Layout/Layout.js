import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
