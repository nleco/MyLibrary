import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.scss';

/**

use links:
import { Link } from 'react-router';
<Link to="/some/where">Click me</Link>

update browser url:
this.props.dispatch(push('/some/path'));

 */

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="app__header">
                    <p>Header</p>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/view">View</Link></li>
                        <li><Link to="/add">Add</Link></li>
                    </ul>
                </header>
                <main className="App-Main">
                    {this.props.children}
                </main>
                <footer className="app__footer">
                    <p>footer</p>
                </footer>
            </div>
        );
    }
}