import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Add from './containers/Add';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/add" component={Add}/>
    </Switch>
);

export default Routes;