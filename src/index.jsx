import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import library from './reducers';
import App from './App';
import Routes from './Routes';

let store = createStore(library);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Routes/>
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
