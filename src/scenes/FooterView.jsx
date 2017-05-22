import React, { Component } from 'react';

import './Footer.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
        
    render () {
        return (
            <footer className="app__footer">
                <p>SampleCompany 2017</p>
            </footer>
        );
    }
}

