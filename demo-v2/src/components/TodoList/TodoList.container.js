import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import TodoList from './TodoList.js'
import filterTodoList from './TodoList.selector'


function mapStateToProps(state, {match}){
    console.log(match.params.filter)
    return {
        list: filterTodoList(state, match.params.filter)
    };
}

function mapDispatchToProps(dispatch){
    return {
        toggleTodoItem(payload){
            return dispatch({
                type: 'TOGGLE_TODO_ITEM',
                payload
            });
        }
    };
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TodoList)
);