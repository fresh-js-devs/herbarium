import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import PostDetail from './pages/PostDetail/PostDetail';


export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/plant/:id" component={PostDetail} />
        </Switch>
    </BrowserRouter>
);
