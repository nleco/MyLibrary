import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import Header from './containers/Header';
import FooterView from './scenes/FooterView';

import './App.scss';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                    <main className="app__main">
                        {this.props.children}
                    </main>
                <FooterView/>
            </div>
        );
    }
}