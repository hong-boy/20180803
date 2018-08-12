import {createStore, combineReducers} from 'redux'
import * as reducers from './reducers'

/**
 * 返回全局唯一store实例
 */
export default createStore(
    combineReducers(reducers)
)