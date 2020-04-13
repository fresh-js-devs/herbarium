import React, { useState } from "react";
import { Container } from "@material-ui/core";
import PlantCard from "../components/PlantCard";
import Plants from "../data/plants.json";
import Grid from "@material-ui/core/Grid";

import { useHistory } from "react-router-dom";

const MainPage = () => {
  const [plants, setPlants] = useState(Plants);
  const renderPlants = () =>
    plants.map(({ id, familyName, commonName, img }) => (
      <PlantCard
        key={id}
        familyName={familyName}
        commonName={commonName}
        id={id}
        img={img}
      />
    ));

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {renderPlants()}
      </Grid>
    </Container>
  );
};
export default MainPage;
