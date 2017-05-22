import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Routes/>
        </App>
    </BrowserRouter>,
    document.getElementById('root')
);
