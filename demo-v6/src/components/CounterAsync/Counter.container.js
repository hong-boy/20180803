import { connect } from "react-redux";

import CounterUI from "./Counter.ui";

function fakeRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(200);
    }, 2000);
  });
}

function mapStateToProps(state) {
  return {
    ...state.CounterAsync
  };
}


// dispatch这里考虑出现异步的情况
// 这里假设每次增加或减少都需要发送一个请求到后端去验证，若验证通过则只需操作，否则不执行
function mapDispatchToProps(dispatch) {
  return {
    decrease() {
      // 1.发起验证请求
      dispatch({ type: "COUNTER_ASYNC_DECREASE_REQUESTING", payload: true });
      // 2.获取验证结果
      fakeRequest().then(res => {
        dispatch({ type: "COUNTER_ASYNC_DECREASE_REQUESTING", payload: false });
        if (res === 200) {
          // 3.执行操作
          dispatch({ type: "COUNTER_ASYNC_DECREASE", payload: -1 });
        }
      });
    },
    increase() {
      // 1.发起验证请求
      dispatch({ type: "COUNTER_ASYNC_DECREASE_REQUESTING", payload: true });
      // 2.获取验证结果
      fakeRequest().then(res => {
        dispatch({ type: "COUNTER_ASYNC_DECREASE_REQUESTING", payload: false });
        if (res === 200) {
          // 3.执行操作
          dispatch({ type: "COUNTER_ASYNC_INCREASE", payload: 1 });
        }
      });
    }
  };
}

// 返回容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterUI);
