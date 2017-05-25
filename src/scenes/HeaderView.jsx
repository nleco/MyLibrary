import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            page : props.location.pathname === '/add' ? 'ADD' : props.page
        };
        
        this.handleClick.bind(this);
    }
    
    handleClick(page, handleChangePage) {
        this.setState({
            page : page
        });
        
        handleChangePage(page);
    }
    
    render () {
        return (
            <header className="app__header">
                <h1 className="app__header__title">
                    <i className="mdi mdi-library app__header__title__icon"></i> 
                    <span className="app__header__title__text">Awesome Library</span>
                </h1>
    
                <Link to="/" className={'link mod-header-nav u-mr-20' + (this.state.page === 'HOME' ? ' mod-current' : '')} onClick={() => {this.handleClick('HOME', this.props.handleChangePage)}}>Home</Link>
                <Link to="/add" className={'link mod-header-nav' + (this.state.page === 'ADD' ? ' mod-current' : '')} onClick={() => {this.handleClick('ADD', this.props.handleChangePage)}}>Add</Link>
            </header> 
        )
    }
}

