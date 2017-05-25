import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const renderBooks = (books) => (
    <ul className="books__list">
        <li>one book</li>
        <li>two book</li>
    </ul>
);

const renderAddBook = (handleChangePage) => (
    <p>
        <Link to='/add' className="link" onClick={()=>{handleChangePage('ADD')}}>
            <i className="mdi mdi-book"></i> Add a book!
        </Link>
    </p>
);

const renderHaveBooks = () => (
    <span>Check out your books! <i className="mdi mdi-emoticon-cool"></i></span>
);

const renderDontHaveBooks = () => (
    <span>You have no books. <i className="mdi mdi-emoticon-sad"></i></span>
);

const MainView = ({ books, handleChangePage, handleRemoveBook }) => (
    <div className="books">
        <h1 className="app__main__header">My Books</h1>
        <p className="app__main__subheader">
            {books.length ? renderHaveBooks() : renderDontHaveBooks()}
        </p>
        
        {books.length > 0 ? renderBooks(books) : renderAddBook(handleChangePage)}            
    </div>
);

export default MainView;