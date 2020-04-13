import React from "react";

import styled from "@emotion/styled";

const Base = styled.div({
  margin: "auto",
});

const Footer = styled.div({
  margin: "auto",
  minHeight: "100px",
  display: "flex",
  justifyContent: "center",
  justifyItems: "center",
  alignContent: "center",
  alignItems: "center",
  backgroundColor: "#9ed166",
});

const Header = styled.div({
  margin: "auto",
  minHeight: "100px",
  display: "flex",
  justifyContent: "center",
  justifyItems: "center",
  alignContent: "center",
  alignItems: "center",
  backgroundColor: "#9ed166",
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
