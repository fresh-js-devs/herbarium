import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import HerbDetail from './pages/HerbDetail';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} /> 
        <Route path='/herb/:id' component={HerbDetail} />
      </Switch>
    </BrowserRouter>
  );
};
