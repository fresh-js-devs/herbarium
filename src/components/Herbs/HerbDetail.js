import React from "react";
import TemplateView from "../TemplateView/TemplateView";

import { useParams } from "react-router-dom";

import styled from "@emotion/styled";

import { Row, Col } from "react-bootstrap";
import plants from "../../data/plants.json";

/**
 * FEEDBACK: Tohle by melo byt ve vlastnim souboru
 */
const AboutCard = styled.div({
  marginLeft: "10vw",
  marginRight: "10vw",
  paddingTop: "5vh",
  paddingBottom: "5vh",
  overflow: "hidden",
});

/**
 * FEEDBACK: Moc bych nekombinoval styled components s internim stylem...jako napr v img
 */
const HerbDetail = () => {
  const { id } = useParams();
  const plant = plants.find((plant) => plant.id === parseInt(id));

  return (
    <TemplateView header={plant.familyName} hasBackButton={true}>
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
                  width: "400px",
                  height: "auto",
                  overflow: "hidden",
                  clip: "border-box",
                }}
              ></img>
            </Col>
            {/**
             * FEEDBACK: Tohle by mohla byt vlastni komponenta
             */}
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
