import {ENUM_TODO_LIST_TYPE} from '../../store/actions'
import TodoItemModel from '../../model/TodoItemModel'

// 定义状态数据模型，并赋予初始值
const INITIAL_STATE = {
    list: [
        new TodoItemModel('学习react', true),
        new TodoItemModel('学习redux', false),
    ],
};

/**
 * 返回AddTodo的reducer函数
 */
export default function(state=INITIAL_STATE, action){
    switch(action.type){
        case ENUM_TODO_LIST_TYPE.ADD_TODO_ITEM: {
            return {
                ...state,
                list: [
                    ...state.list,
                    new TodoItemModel(action.payload, false)
                ]
            };
        }
        case ENUM_TODO_LIST_TYPE.TOGGLE_TODO_ITEM_STATE: {
            let list = [...state.list];
            let target = list.find(item=>item.id === action.payload.id);
            target.done = action.payload.done;

            return {
                ...state,
                list
            };
        }
        default:{
            return state;
        }
    }
}