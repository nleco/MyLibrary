import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const renderBooks = (books, handleRemoveBook) => (
    <table className="table">
        <tbody>
            <tr className="table__row">
                <th className="table__row__header">Title</th>
                <th className="table__row__header">Author</th>
                <th className="table__row__header" colSpan="2">Description</th>
            </tr>
            {books.map((book) => (
                <tr className="table__row" key={book.id}>
                    <td className="table__row__cell">{book.title}</td>
                    <td className="table__row__cell">{book.author}</td>
                    <td className="table__row__cell">{book.description}</td>
                    <td className="table__row__cell">
                        <span className="link" title="delete" onClick={() => {handleRemoveBook(book.id)}}><i className="mdi mdi-delete"></i></span>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

const renderAddBook = (handleChangePage) => (
    <p>
        <Link to='/add' className="link">
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
        
        {books.length > 0 ? renderBooks(books, handleRemoveBook) : renderAddBook(handleChangePage)}            
    </div>
);

export default MainView;