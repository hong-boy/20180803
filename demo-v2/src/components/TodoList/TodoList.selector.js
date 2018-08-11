/**
 * redux选择器（用于过滤state.TodoList.list）
 */
export default function(state, filter){
    switch(filter){
        case 'todo': {
            return state.TodoList.list.filter(item=>!item.done);
        }
        case 'done': {
            return state.TodoList.list.filter(item=>item.done);
        }
        default: {
            return state.TodoList.list;
        }
    }
}