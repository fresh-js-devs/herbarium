import React from "react";

import HeadingMain from "../atoms/HeadingMain";
import HeaderWrapContent from "../atoms/HeaderWrapContent";

/**
   * FEEDBACK: Presunout import nad vlastni importy.
   */
import { useHistory } from "react-router-dom";

/**
   * FEEDBACK: logika by mela byt az v pages/ v ramci atomic designu.
   */
const HeaderContent = () => {
  const { push } = useHistory();
  const handlePopToRoot = () => push("/");
  return (
    <HeaderWrapContent onClick={handlePopToRoot}>
      <HeadingMain>Herbarium</HeadingMain>
    </HeaderWrapContent>
  );
};

export default HeaderContent;
