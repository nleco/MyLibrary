import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './App.scss';
import Header from './components/Header'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <main className="app__main">
                    {this.props.children}
                </main>
                <footer className="app__footer">
                    <p>SampleCompany 2017</p>
                </footer>
            </div>
        );
    }
}