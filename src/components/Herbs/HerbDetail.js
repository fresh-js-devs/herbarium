import React from "react";
import TemplateView from "../TemplateView/TemplateView";

import { useParams } from "react-router-dom";

import styled from "@emotion/styled";

import { Row, Col } from "react-bootstrap";
import plants from "../../data/plants.json";

const AboutCard = styled.div({
  marginLeft: "10vw",
  marginRight: "10vw",
  paddingTop: "5vh",
  paddingBottom: "5vh",
});

const HerbDetail = () => {
  const { id } = useParams();
  const plant = plants.find((plant) => plant.id === parseInt(id));

  console.log(plant);
  return (
    <TemplateView header={plant.familyName}>
      <div style={{ height: "80vh" }}>
        <AboutCard>
          <Row>
            <Col>
              <img
                src={plant.img}
                alt={plant.id}
                style={{
                  boxSizing: "border-box",
                  objectFit: "cover",
                  display: "block",
                  margin: "auto",
                  width : "100%",
                  height : "100%"
                }}
              ></img>
            </Col>
            <Col>
              <h1>Family name: {plant.commonName}</h1>
              <h2>Scientific name: {plant.scintificName}</h2>
              <br></br>
              <p>About: {plant.about}</p>
            </Col>
          </Row>
        </AboutCard>
      </div>
    </TemplateView>
  );
};

export default HerbDetail;
