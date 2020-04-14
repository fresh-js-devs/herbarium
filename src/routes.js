import React from "react";
/**
 * FEEDBACK: Zbytecny Router
 */
import { Switch, Router, BrowserRouter, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import PlantDetail from "./pages/PlantDetail";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/plant/:id" component={PlantDetail} />
    </Switch>
  </BrowserRouter>
);