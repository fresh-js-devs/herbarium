import React from "react";
import styled from "@emotion/styled";
import { FilterVintage } from "@material-ui/icons";
const Herbarium = styled.div`
  display: flex;
  margin-bottom: 50px;
  background-image: linear-gradient(
    to right,
    #007a94,
    #25989d,
    #5ab59f,
    #93d09e,
    #d2e7a1
  );
`;

const Title = styled.h1`
  margin: auto;
  color: white;
  padding: 20px;
`;
const Header = () => (
  <Herbarium>
    <Title>
      <FilterVintage />
      Herbarium
      <FilterVintage />
    </Title>
  </Herbarium>
);

export default Header;
