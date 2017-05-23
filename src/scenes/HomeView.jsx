import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './HomeView.scss';

const MainView = () => (
    <div className="books">
        <h1 className="app__main__header">My Books</h1>
        <p className="app__main__subheader">Here you can see all of your books. Try it out!</p>
        <ul className="books__list">
            <li>one book</li>
            <li>two book</li>
        </ul>
    </div>
);

export default MainView;