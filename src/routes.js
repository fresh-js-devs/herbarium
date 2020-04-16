import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
/**
 * FEEDBACK: Oddelovat importy 3.strany s vlastnimi importy
 */
import MainPage from './pages/MainPage/MainPage';
import HerbDetail from './pages/HerbDetail/HerbDetail';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {MainPage}/>
            <Route path = '/herb/:id' component = {HerbDetail}/>
        </Switch>
    </BrowserRouter>
);