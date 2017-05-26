import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderView = () => (
    <header className="app__header">
        <h1 className="app__header__title">
            <i className="mdi mdi-library app__header__title__icon"></i> 
            <span className="app__header__title__text">Awesome Library</span>
        </h1>

        <NavLink to="/" exact className={'link mod-header-nav u-mr-20'} activeClassName='mod-current'>Home</NavLink>
        <NavLink to="/add" className={'link mod-header-nav'} activeClassName='mod-current'>Add</NavLink>
    </header> 
);

export default HeaderView;