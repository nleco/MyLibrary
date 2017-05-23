import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const renderBooks = (books) => (
    <ul className="books__list">
        <li>one book</li>
        <li>two book</li>
    </ul>
);

const MainView = ({ books, handleChangePage, handleRemoveBook }) => (
    <div className="books">
        <h1 className="app__main__header">My Books</h1>
        <p className="app__main__subheader">{books.length ? "Check out your books!" : 'You have no books. :('}</p>
        
        {books.length > 0 ? renderBooks(books) : (<p><Link to='/add' onClick={()=>{handleChangePage('ADD')}}>Add a book!</Link></p>)}            
    </div>
);

export default MainView;