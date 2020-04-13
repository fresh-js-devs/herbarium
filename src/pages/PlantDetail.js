import React from "react";
import { useParams } from "react-router-dom";
import plants from "../data/plants.json";
import PlantContent from "../components/PlantContent/PlantContent";
import { useHistory } from "react-router-dom";

const PlantDetail = () => {
  const { id } = useParams();

  const plant = plants.find((plants) => plants.id === parseInt(id));
  const history = useHistory();
  const handleBackClick = () => history.goBack();

  return (
    <>
      <PlantContent
        commonName={plant.commonName}
        familyName={plant.familyName}
        scintificName={plant.scintificName}
        about={plant.about}
        img={plant.img}
        handleBackClick={handleBackClick}
      />
    </>
  );
};

export default PlantDetail;
