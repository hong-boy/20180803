import { connect } from "react-redux";

import CounterUI from "./Counter.ui";


function mapStateToProps(state) {
  return {
    ...state.CounterSaga
  };
}


// dispatch这里考虑出现异步的情况
// 这里假设每次增加或减少都需要发送一个请求到后端去验证，若验证通过则只需操作，否则不执行
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      decrease(){
        // 这里感觉有点像EventEmitter模块的模型
        dispatch({ type: "COUNTER_SAGA_DECREASE_EVENT", payload: -1 });
      },
      increase(){
        dispatch({ type: "COUNTER_SAGA_INCREASE_EVENT", payload: 1 });
      },
    }
  };
}

// 返回容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterUI);
