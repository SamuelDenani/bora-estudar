import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Subscribe from './pages/Register';
import Study from './pages/Study';

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Subscribe} />
                <Route path="/study" component={Study} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;