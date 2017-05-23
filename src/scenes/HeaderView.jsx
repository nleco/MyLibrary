import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './HeaderView.scss';


const HeaderView = ({page, handleChangePage}) => (
    <header className="app__header">
        <h1 className="app__header__title">Awesome Library</h1>
    
        <Link to="/" className={'app__header__button' + (page === 'HOME' ? ' mod-current' : '')} onClick={(e) => {e.preventDefault(); handleChangePage('HOME')}}>Home</Link>
        <Link to="/add" className={'app__header__button' + (page === 'ADD' ? ' mod-current' : '')} onClick={(e) => {e.preventDefault(); handleChangePage('ADD')}}>Add</Link>
    </header> 
);

export default HeaderView;