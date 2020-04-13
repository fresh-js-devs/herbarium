import React, { useState } from "react";
import PlantCard from "../components/PlantCard";
import Plants from "../data/plants.json";
import Grid from "@material-ui/core/Grid";

import { useHistory } from "react-router-dom";

const MainPage = () => {
  const [plants, setPlants] = useState(Plants);
  const { push } = useHistory();
  const handleGoToPlantDetail = (id) => push(`/plant/${id}`);
  const renderPlants = () =>
    plants.map(({ id, familyName, commonName, img }) => (
      <PlantCard
        key={id}
        familyName={familyName}
        commonName={commonName}
        id={id}
        img={img}
        goToPlantDetatil={() => handleGoToPlantDetail(id)}
      />
    ));

  return (
    <Grid container spacing={3}>
      {renderPlants()}
    </Grid>
  );
};
export default MainPage;
