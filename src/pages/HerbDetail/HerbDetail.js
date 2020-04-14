import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Header from "../../components/organisms/Header";
import HerbCard from "../../components/organisms/HerbCard";
import Form from "../../components/atoms/Form";

import Herbs from "../../mocks/cards.json";

const HerbDetails = () => {
  const { id } = useParams();
  const { location } = useHistory();

  /**
   * FEEDBACK: zbytecny return a slozene zavorky.
   */
  const handleIsInRoot = () => {
    return location.pathname === "/";
  };

  const isInRoot = handleIsInRoot();

  const herb = Herbs.find((herb) => herb.id === parseInt(id));
  const { name, description, imgName, kingdom, family } = herb;

  return (
    <div>
      <Header />
      <Form>
        <HerbCard
          key={id}
          name={name}
          description={description}
          imgName={imgName}
          isInRoot={isInRoot}
          kingdom={kingdom}
          family={family}
        />
      </Form>
    </div>
  );
};

export default HerbDetails;
