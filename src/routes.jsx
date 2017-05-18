import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Main from './scenes/Main';
import View from './scenes/View';
import Add from './scenes/Add';


modules.export = (
    <Route path="/" component={App}>
        <IndexRoute component={Main}/>
        <Route path="/view" component={View}/>
        <Route path="/add" component={Add}/>
    </Route>
);
