import React from "react";

import styled from "@emotion/styled";

import HerbCard from "./HerbCard";

import plants from "../../data/plants.json";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
});

const HerbList = () => {
  const renderTiles = () =>
    plants &&
    plants.map((plant) => (
      <HerbCard
        key={plant.id}
        plant={plant}
        // onDetailClicked={doneClicked}
      />
    ));

  return <Wrapper>{renderTiles()}</Wrapper>;
};

export default HerbList;
