import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './MainView.scss';

export default class MainView extends Component {
    renderSingleBook(book) {
        return (
            <li className="books__list__book">
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.description}</p>
            </li>
        );
    }
        
    render () {    
        return (
            <div className="books">
                <h1 className="app__main__header">My Books</h1>
                <p className="app__main__subheader">Here you can see all of your books. Try it out!</p>
                <ul className="books__list">
                    
                </ul>
            </div>
        )
    }
}