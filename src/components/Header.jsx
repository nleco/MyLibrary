import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Header.scss';

const PAGE_HOME = 'home';
const PAGE_ADD = 'add';
const PAGE_VIEW = 'view';

export default class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            page : PAGE_HOME
        };
        
        this.handleChangePage = this.handleChangePage.bind(this); 
    }
        
    handleChangePage(page) {
        this.setState({
            page : page
        });
    }
    
    //TODO: set up propagation?
    render () {
        return (
            <header className="app__header">
                <h1 className="app__header__title">Awesome Library</h1>
            
                <Link to="/" className={'app__header__button' + (this.state.page === PAGE_HOME ? ' mod-current' : '')} onClick={() => this.handleChangePage(PAGE_HOME)}>Home</Link>
                <Link to="/add" className={'app__header__button' + (this.state.page === PAGE_ADD ? ' mod-current' : '')} onClick={() => this.handleChangePage(PAGE_ADD)}>Add</Link>
            </header>  
        );
    }
}