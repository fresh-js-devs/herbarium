import React from "react";

import styled from "@emotion/styled";

const Base = styled.div({
  margin: "auto",
  paddingTop: "10vh",
});

const Footer = styled.div({
  margin: "auto",
  minHeight: "10vh",
  display: "flex",
  justifyContent: "center",
  justifyItems: "center",
  alignContent: "center",
  alignItems: "center",
  backgroundColor: "#9ed166",
});

const Header = styled.div({
  margin: "auto",
  minHeight: "10vh",
  width: "100vw",
  zIndex : "5",
  top:"0",
  display: "flex",
  justifyContent: "center",
  justifyItems: "center",
  alignContent: "center",
  alignItems: "center",
  backgroundColor: "#9ed166",
  position: "fixed"
});

const TemplateView = ({ header, children }) => {
  return (
    <Base>
      <Header>
        <h1>{header}</h1>
      </Header>
      {children}
      <Footer>“Eat food. Not too much. Mostly plants.” - Michael Pollan</Footer>
    </Base>
  );
};

export default TemplateView;
