import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
// import View from './components/View';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        {/*<Route path="/view" component={View}/>*/}
    </Switch>
);

export default Routes;