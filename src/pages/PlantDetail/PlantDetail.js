import React from "react";
/**
 * FEEDBACK: Oddelovat importy 3.strany s vlastnimi importy
 */
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import plants from "../../data/plants.json";

import "./PlantDetail.css";

/**
 * FEEDBACK: Malo komponentujes
 */
const PlantDetail = () => {
  const { id } = useParams();
  const { goBack } = useHistory();
  const plant = plants.find((plant) => plant.id === parseInt(id));
  const { familyName, scintificName, commonName, about, img } = plant;

  return (
    <Layout>
      <div className="plant-detail">
        <div className="plant-detail__header">
          <img src={img} alt="plant" />
        </div>
        <div className="plant_content">
          <div className="plant-detail__header-name">
            <strong>{commonName}</strong>
            <br></br>
            <span>{scintificName}</span>
            <br></br>
            <span>{familyName}</span>
          </div>

          <div className="plant-detail__content">
            <div className="plant__message">{about}</div>
          </div>
          <div className="backIcon">
            <ArrowBackIcon onClick={() => goBack()}></ArrowBackIcon>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlantDetail;
