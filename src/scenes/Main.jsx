import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './Main.scss';

export default class Main extends Component {
    
    render () {
        return (
            <div className="books">
                <h1 className="app__main__header">My Books</h1>
                <h2 className="app__main__subheader">Here you can see all of your books. Why don&apos;t you try it out!</h2>
                <ul className="books__list">
                    
                </ul>
            </div>
        )
    }
}