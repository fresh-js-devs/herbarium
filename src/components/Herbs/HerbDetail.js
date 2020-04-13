import React from "react";
import TemplateView from "../TemplateView/TemplateView";

import { useParams } from "react-router-dom";

import plants from '../../data/plants.json'

const HerbDetail = () => {

  const { id } = useParams();
  const plant = plants.find(plant => plant.id === parseInt(id));

  console.log(plant);
  return (
    <TemplateView header={plant.familyName}>
        <div style={{height: "80vh"}}>

        </div>
    </TemplateView>
  );
};

export default HerbDetail;
