import {ENUM_ADD_TODO_TYPE} from '../../store/actions'

// 定义状态数据模型，并赋予初始值
const INITIAL_STATE = {
    value: ''
};

/**
 * 返回AddTodo的reducer函数
 */
export default function(state=INITIAL_STATE, action){
    switch(action.type){
        case ENUM_ADD_TODO_TYPE.UPDATE_VALUE: {
            return {
                ...state,
                value: action.payload
            };
        }
        default:{
            return state;
        }
    }
}