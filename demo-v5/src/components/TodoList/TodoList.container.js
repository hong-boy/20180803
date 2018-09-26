import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import TodoList from './TodoList'
import {ENUM_TODO_LIST_TYPE} from '../../store/actions'
import {filterTodoList} from './TodoList.selector'

/**
 * 配置要映射到展示组件上的state属性
 * @param {Object} state 等价于store.getState() 
 */
function mapStateToProps(state, {match}){
    return {
        // match.params代表路径参数
        list: filterTodoList(state, match.params.filter)
    };
}

/**
 * 配置要映射到展示组件上的动作函数
 * @param {Function} dispatch 等价于store.dispatch
 */
function mapDispatchToProps(dispatch){
    return {
        toggleTodoItem(id, done){
            // 切换待办事项完成状态
            return dispatch({
                type: ENUM_TODO_LIST_TYPE.TOGGLE_TODO_ITEM_STATE,
                payload:{id,done}
            });
        }
    };
}

/**
 * 返回容器组件 - TodoList
 * （用wrapRouter包裹，以响应路由地址改变事件）
 */
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TodoList)
);
