import TodoItemModel from '../../model/TodoItemModel'

const ENUM_ACTION_TYPES = {
    ADD_TODO_ITEM: 'ADD_TODO_ITEM',
    TOGGLE_TODO_ITEM: 'TOGGLE_TODO_ITEM'
};

const INITIAL_STATE = {
    list: [
        new TodoItemModel('学习react'),
        new TodoItemModel('学习redux', true)
    ]
};

export {ENUM_ACTION_TYPES};

export default function(state=INITIAL_STATE, action){
    switch(action.type){
        case ENUM_ACTION_TYPES.ADD_TODO_ITEM: {
            return {
                list: [
                    ...state.list,
                    action.payload
                ]
            };
        }
        case ENUM_ACTION_TYPES.TOGGLE_TODO_ITEM: {
            let list = [...state.list];
            let {id, done} = action.payload;
            let target = list.find(item=>item.id === id);
            target.done = done;
            return {
                ...state,
                list: list
            };
        }
        default: {
            return state;
        }
    }
}