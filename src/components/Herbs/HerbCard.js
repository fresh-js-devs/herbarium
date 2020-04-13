import React from "react";

import { Card, Button } from "react-bootstrap";

const HerbCard = ({ plant }) => {
  return (
    <Card style={{ width: "30rem", marginBottom: "20px" , marginTop: "20px"}}>
      <Card.Img variant="top" src={plant.img} />
      <Card.Body>
        <Card.Title>{plant.familyName}</Card.Title>
        <Card.Text>{plant.about}</Card.Text>
        <Button variant="info">Detail</Button>
      </Card.Body>
    </Card>
  );
};

export default HerbCard;
