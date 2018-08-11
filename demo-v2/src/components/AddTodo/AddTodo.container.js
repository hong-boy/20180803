import {connect} from 'react-redux'
import AddTodo from './AddTodo'
import TodoItemModel from '../../model/TodoItemModel'

// 配置要映射到属性的state
function mapStateToProps(state){
    return {
        value: state.AddTodo.value, // 代表当前用户输入值
    }
}

// 配置要映射到属性的方法
function mapDispatchToProps(dispatch){
    return {
        addTodoItem(label){
            dispatch({
                type: 'ADD_TODO_ITEM',
                payload: new TodoItemModel(label)
            });
            dispatch({
                type: 'CHANGE_STATE_VALUE',
                payload:''
            });
        },
        onChange(payload){
            return dispatch({
                type: 'CHANGE_STATE_VALUE',
                payload
            });
        }
    };
}

/**
 * 容器组件：实现数据获取和业务逻辑交互
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);