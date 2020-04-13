import React from "react";

import { Card } from "react-bootstrap";
import { Button } from "../Atoms/Buttons";

const HerbCard = ({ plant, handleDetailClicked }) => {
  return (
    <Card style={{ width: "30rem", marginBottom: "20px", marginTop: "20px" }} onClick={handleDetailClicked}>
      <Card.Img variant="top" src={plant.img} style={{ height: "25rem" }} />
      <Card.Body>
        <Card.Title style ={{color: "#526e35"}}>{plant.familyName}</Card.Title>
        <Card.Text style={{ minHeight: "15rem" }}>{plant.about}</Card.Text>
        <Button variant="info" onClick={handleDetailClicked}>
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
};

export default HerbCard;
