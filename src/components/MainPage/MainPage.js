import React from "react";
import TemplateView from "../TemplateView/TemplateView";
import HerbList from "../Herbs/HerbList";

const MainPage = () => {
  return (
    <TemplateView header="Herbarium">
      <HerbList />
    </TemplateView>
  );
};
export default MainPage;
