const ENUM_ACTION_TYPES = {
    ADD_TODO_ITEM: 'ADD_TODO_ITEM',
    CHANGE_STATE_VALUE: 'CHANGE_STATE_VALUE',
};

const INITIAL_STATE = {value:""};

export {ENUM_ACTION_TYPES};

export default function(state=INITIAL_STATE, action){
    switch(action.type){
        case ENUM_ACTION_TYPES.CHANGE_STATE_VALUE: {
            return {
                ...state,
                value: action.payload
            };
        }
        default: {
            return state;
        }
    }
}