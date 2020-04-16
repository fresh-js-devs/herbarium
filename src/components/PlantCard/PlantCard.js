import React from "react";
import { Card } from "antd";
/**
 * FEEDBACK: Oddelovat importy 3.strany s vlastnimi importy
 */
import './PlantCard.css'

/**
 * FEEDBACK: alt u img by mel byt vic genericky
 */
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
