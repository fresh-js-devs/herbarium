import React from 'react';
import{Switch,Route,BrowserRouter} from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import PlantDetail from './pages/PlantDetail/PlantDetail';

const Routes=()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/plant/:id' component={PlantDetail}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;