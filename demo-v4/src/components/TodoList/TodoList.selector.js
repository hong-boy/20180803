/**
 * 定义reducer的选择器（本质上就是一个普通函数，纯函数） - 用于过滤TodoList
 * @param {Object} state 等价于store.getState()
 * @param {String} filter 自定义的过滤条件（这里主要指待办事项的完成状态）
 */
export function filterTodoList(state, filter){
    switch (filter) {
        case 'todo': {
            return state.TodoList.list.filter(item=>!item.done);
        }
        case 'done': {
            return state.TodoList.list.filter(item=>item.done);
        }
        default: {
            return [...state.TodoList.list];
        }
    }
}