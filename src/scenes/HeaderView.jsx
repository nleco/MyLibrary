import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const HeaderView = ({page, handleChangePage}) => (
    <header className="app__header">
        <h1 className="app__header__title">Awesome Library</h1>
    
        <Link to="/" className={'app__header__button' + (page === 'HOME' ? ' mod-current' : '')} onClick={() => {handleChangePage('HOME')}}>Home</Link>
        <Link to="/add" className={'app__header__button' + (page === 'ADD' ? ' mod-current' : '')} onClick={() => {handleChangePage('ADD')}}>Add</Link>
    </header> 
);

export default HeaderView;