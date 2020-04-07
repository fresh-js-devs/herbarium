import React from "react";

import HeadingMain from "../atoms/HeadingMain";
import HeaderWrapContent from "../atoms/HeaderWrapContent";

import { useHistory } from "react-router-dom";

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
