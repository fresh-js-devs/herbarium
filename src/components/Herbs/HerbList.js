import React from "react";

import { useHistory } from 'react-router-dom';

import styled from "@emotion/styled";

import HerbCard from "./HerbCard";

import plants from "../../data/plants.json";

/**
 * FEEDBACK: Tohle by mohla byt vlastni komponenta
 */
const Wrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
});

const HerbList = () => {

  const { push } = useHistory();

  const handleDetailClicked = id => push(`/herb/${id}`);

  const renderTiles = () =>
    plants &&
    plants.map((plant) => (
      <HerbCard
        key={plant.id}
        plant={plant} 
        handleDetailClicked={() => handleDetailClicked(plant.id)}
      />
    ));

  return <Wrapper>{renderTiles()}</Wrapper>;
};

export default HerbList;
