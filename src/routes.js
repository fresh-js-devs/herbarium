import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import HerbDetail from "./pages/HerbDetail/HerbDetail";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/herb/:id" component={HerbDetail} />
    </Switch>
  </BrowserRouter>
);
