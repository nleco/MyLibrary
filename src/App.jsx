import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { libraryApp } from './reducers';
import Header from './Header';
import FooterView from './FooterView'

import './App.scss';

let store = createStore(libraryApp);

export default class App extends Component
    
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <Header/>
                    <main className="app__main">
                        {this.props.children}
                    </main>
                    <FooterView/>
                </div>
            </Provider>
        );
    }
}