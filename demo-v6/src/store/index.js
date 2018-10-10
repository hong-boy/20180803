import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

export default createStore(
    combineReducers(reducers),
    applyMiddleware(thunk, logger)
);
