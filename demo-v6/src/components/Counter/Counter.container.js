import { connect } from 'react-redux';

import CounterUI from './Counter.ui';

function mapStateToProps(state) {
    return {
        ...state.Counter
    };
}

function mapDispatchToProps(dispatch){
    return {
        decrease(){
            dispatch({type:'COUNTER_DECREASE', payload:-1})
        },
        increase(){
            dispatch({type:'COUNTER_INCREASE', payload:1})
        },
    }
}


// 返回容器组件
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterUI);