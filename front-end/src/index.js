import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import CreateSagaMiddleware from 'redux-saga';
import forexReducer from './redux/reducers/forex';
import predictedForexReducer from './redux/reducers/predicted-forex';
import axios from 'axios';
import App from './App';
import {watchAuth} from './redux/saga/index';
import './index.css';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = 'http://localhost:3002';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const sagaMiddleware = CreateSagaMiddleware();

const rootReducer = combineReducers({
    forex: forexReducer,
    predicted_forex: predictedForexReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchAuth);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
