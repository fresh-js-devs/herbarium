import React from "react";
import styled from "@emotion/styled";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  min-height: calc(100vh - 260px);
`;
const PlantWrapper = styled.div`
  display: flex;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

const PlantImage = styled.div`
  width: 400px;
  background-size: cover;
  height: 400px;
  margin-right: auto;
  border-radius: 8px 0 0 8px;
  position: relative;
`;

const PlantDescription = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 50px;
`;

const PlantTitle = styled.h1`
  color: #5ab59f;
`;

const Span = styled.span`
  color: #d2e7a1;
  font-weight: bold;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  cursor: pointer;
`;

const PlantContent = ({
  img,
  commonName,
  familyName,
  scintificName,
  about,
  handleBackClick,
}) => {
  return (
    <Wrapper>
      <PlantWrapper>
        <PlantImage style={{ backgroundImage: `url(${img})` }}>
          <ArrowWrapper onClick={handleBackClick}>
            <ArrowBack color="secondary" />
          </ArrowWrapper>
        </PlantImage>
        <PlantDescription>
          <PlantTitle>{commonName}</PlantTitle>
          <p>
            <Span>Family name: {familyName}</Span>
          </p>
          <p>
            <Span>Scientific name: {scintificName}</Span>
          </p>
          <p>{about}</p>
        </PlantDescription>
      </PlantWrapper>
    </Wrapper>
  );
};

export default PlantContent;
