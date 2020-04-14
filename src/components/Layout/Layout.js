import React from "react";
import Header from "../Header/Header";
import { Container } from "@material-ui/core";
import Footer from "../Footer/Footer";
/**
 * FEEDBACK: Chybela mezera mezi importy a komponenty
 */
const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <Container maxWidth="md">{children}</Container>
    <Footer />
  </div>
);

export default Layout;
