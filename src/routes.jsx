import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './scenes/Main';
import View from './scenes/View';
import Add from './scenes/Add';


export default class Routes extends Component {
    constructor(props) {
        super(props);
    }
    
    
    render () {
        return (
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/view" component={View}/>
                <Route path="/add" component={Add}/>
            </Switch>
        );
    }
}
