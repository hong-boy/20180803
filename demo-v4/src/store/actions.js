/**
 * 定义action动作类型
 */

 // AddTodo组件
const ENUM_ADD_TODO_TYPE = {
    UPDATE_VALUE: 'UPDATE_VALUE', // value改变动作
};

// TodoList组件
const ENUM_TODO_LIST_TYPE = {
    ADD_TODO_ITEM: 'ADD_TODO_ITEM', // 添加新待办
    TOGGLE_TODO_ITEM_STATE: 'TOGGLE_TODO_ITEM_STATE', // 切换状态
};

export {
    ENUM_ADD_TODO_TYPE,
    ENUM_TODO_LIST_TYPE
};