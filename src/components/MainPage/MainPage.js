import React from "react";
/**
 * FEEDBACK: Oddelovat importy 3.strany s vlastnimi importy
 */
import TemplateView from "../TemplateView/TemplateView";
import HerbList from "../Herbs/HerbList";

const MainPage = () => {
  return (
    <TemplateView header="Herbarium" hasBackButton={false}>
      <HerbList />
    </TemplateView>
  );
};
export default MainPage;
