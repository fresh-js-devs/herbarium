import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Form from "../../components/atoms/Form";

import Header from "../../components/organisms/Header";
import HerbCard from "../../components/organisms/HerbCard";

import Herbs from "../../mocks/cards.json";

const MainPage = () => {
  /**
   * FEEDBACK: zbytecny setter.
   */
  const [herbs, setHerbs] = useState(Herbs);

  const { push, location } = useHistory();

  /**
   * FEEDBACK: zbytecny return a slozene zavorky.
   */
  const handleIsInRoot = () => {
    return location.pathname === "/";
  };

  const isInRoot = handleIsInRoot();

  const handleGoToHerbDetails = (id) => push(`/herb/${id}`);

  /**
   * FEEDBACK: zbytecny description.
   */
  const renderHerbsCards = () =>
    herbs &&
    herbs.map(({ id, name, description, imgName, shortDescription }) => (
      <HerbCard
        key={id}
        name={name}
        shortDescription={shortDescription}
        imgName={imgName}
        isInRoot={isInRoot}
        onGoToHerbDetails={() => handleGoToHerbDetails(id)}
      />
    ));

  return (
    <div>
      <Header />
      <Form>{renderHerbsCards()}</Form>
    </div>
  );
};

export default MainPage;
