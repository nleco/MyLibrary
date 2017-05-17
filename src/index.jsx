import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory as history } from 'react-router';
import routes from './routes';

ReactDOM.render(
    <Routes routes={routes} history={history}/>,
    document.getElementById('root')
);
