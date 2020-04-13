import React from "react";
import "./App.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from './MainPage';
import CardDetail from './components/card/DetailCard';

function App() {  
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/herb/:id' component={CardDetail} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
