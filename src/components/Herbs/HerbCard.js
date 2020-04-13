import React from "react";

import { Card } from "react-bootstrap";
import { Button } from "../Atoms/Buttons";

const HerbCard = ({ plant }) => {
  return (
    <Card style={{ width: "30rem", marginBottom: "20px", marginTop: "20px" }}>
      <Card.Img variant="top" src={plant.img} style={{ height: "25rem" }} />
      <Card.Body>
        <Card.Title>{plant.familyName}</Card.Title>
        <Card.Text style={{ minHeight: "15rem" }}>{plant.about}</Card.Text>
        <Button variant="info">Detail</Button>
      </Card.Body>
    </Card>
  );
};

export default HerbCard;
