import React from "react";
import { Card } from "antd";
import './PlantCard.css'

const PlantCard = ({ commonName, image, onGoToPlantDetail }) => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      className="responsive-image"
      cover={<img alt="Plant" src={image} />}
      onClick={onGoToPlantDetail}
    >
      <Meta title={commonName} />
    </Card>
  );
};
export default PlantCard;
