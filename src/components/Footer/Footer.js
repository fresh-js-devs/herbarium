import React from "react";
import styled from "@emotion/styled";
const MyFooter = styled.div`
  display: flex;
  margin-top: 50px;
  background-image: linear-gradient(
    to right,
    #007a94,
    #25989d,
    #5ab59f,
    #93d09e,
    #d2e7a1
  );
`;
const Autor = styled.p`
  margin: auto;
  padding: 20px;
  font-weight: bold;
  color: white;
`;
const Footer = () => (
  <MyFooter>
    <Autor>Melánie Ležáková</Autor>
  </MyFooter>
);

export default Footer;
