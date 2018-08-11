import {createStore, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers'

/**
 * 返回全局唯一的state对象
 */
export default createStore(combineReducers(reducers), composeWithDevTools());