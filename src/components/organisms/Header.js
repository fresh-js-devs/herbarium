import React from "react";
import HeaderWrap from "../atoms/HeaderWrap";
import HeaderContent from "../molecules/HeaderContent";

/**
   * FEEDBACK: zbytecny return a slozene zavorky.
   */
const Header = () => {
  return (
    <HeaderWrap>
      <HeaderContent />
    </HeaderWrap>
  );
};

export default Header;
