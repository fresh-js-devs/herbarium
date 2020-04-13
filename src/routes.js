import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import DetailPage from './pages/DetailPage/DetailPage';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} /> 
        <Route path='/plant/:id' component={DetailPage} />
      </Switch>
    </BrowserRouter>
  );
};