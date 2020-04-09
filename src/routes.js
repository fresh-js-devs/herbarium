import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={MainPage} />
        </Switch>
    </BrowserRouter>
);