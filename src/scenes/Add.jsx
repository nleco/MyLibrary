import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './Add.scss';

export default class Add extends Component {
    render () {
        return (
            <div className="add">
                <h1 className="app__main__header">Add A Book</h1>
                <h2 className="app__main__subheader">Bought a new book? Let&apos;s make sure to add it to our library! </h2>
                <form>
                    
                </form>
            </div>
        )
    }
}