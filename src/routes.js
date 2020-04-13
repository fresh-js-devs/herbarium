import React, { Component } from 'react';
import {Switch, Route, BrowseRouted, BrowserRouter} from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage'
import HerbariumDetail from './pages/HerbariumDetail/HerbariumDetail'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/herbariumDetail/:id' component={HerbariumDetail} />
        </Switch>
    </BrowserRouter>
)