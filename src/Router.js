import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Description from './Description';
import App from './App';


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={App} path="/" exact />
                <Route component={Description} path="/receipe/:id" exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
