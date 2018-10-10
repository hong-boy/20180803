// 初始状态
const INIT_STATE = {
    counts: 0,
};

// 状态转换函数
export default function(state=INIT_STATE, {type, payload}){
    switch(type){
        case 'COUNTER_DECREASE': {
            return {
                ...state,
                counts: Math.max(0, state.counts + payload)
            };
        }
        case 'COUNTER_INCREASE': {
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