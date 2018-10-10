import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import CreateSaga from 'redux-saga';

import rootSaga from './sagas';

import reducers from './reducers';

const saga = CreateSaga();

export default createStore(
    combineReducers(reducers),
    // applyMiddleware(thunk, logger),
    applyMiddleware(saga, logger)
);

// 启动saga
saga.run(rootSaga);

