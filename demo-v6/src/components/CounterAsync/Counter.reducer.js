// 初始状态
const INIT_STATE = {
    counts: 0,
    isFetching: false,
};

// 状态转换函数
export default function(state=INIT_STATE, {type, payload}){
    switch(type){
        case 'COUNTER_ASYNC_DECREASE_REQUESTING': {
            return {
                ...state,
                isFetching: payload
            };
        }
        case 'COUNTER_ASYNC_DECREASE': {
            return {
                ...state,
                counts: Math.max(0, state.counts + payload)
            };
        }
        case 'COUNTER_ASYNC_INCREASE': {
            return {
                ...state,
                counts: state.counts + payload
            };
        }
        default: {
            return state;
        }
    }
}