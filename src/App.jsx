import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './containers/Header';
import FooterView from './scenes/FooterView';

import './scss/App.scss';

import { updatePage } from './actions'

import Home from './containers/Home';
import Add from './containers/Add';

const App = () => (
    <BrowserRouter>
        <div className="app">
            <Header/>
            <main className="app__main">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/add" component={Add}/>
                </Switch>
            </main>
            <FooterView/>
        </div>
    </BrowserRouter>
);

export default App;