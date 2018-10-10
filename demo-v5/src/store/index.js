import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga"
import * as reducers from './reducers'
import sagas from "../sagas"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);


/**
 * 返回全局唯一store实例
 */
export default store;