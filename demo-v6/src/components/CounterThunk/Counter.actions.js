function fakeRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(200);
    }, 1000);
  });
}

function decrease() {
  return function(dispatch, getState) {
    // 1.发起验证请求
    dispatch({ type: "COUNTER_THUNK_DECREASE_REQUESTING", payload: true });
    // 2.获取验证结果
    fakeRequest().then(res => {
      dispatch({ type: "COUNTER_THUNK_DECREASE_REQUESTING", payload: false });
      if (res === 200) {
        // 3.执行操作
        dispatch({ type: "COUNTER_THUNK_DECREASE", payload: -1 });
      }
    });
  };
}

function increase() {
  return function(dispatch, getState) {
    // 1.发起验证请求
    dispatch({ type: "COUNTER_THUNK_DECREASE_REQUESTING", payload: true });
    // 2.获取验证结果
    fakeRequest().then(res => {
      dispatch({ type: "COUNTER_THUNK_DECREASE_REQUESTING", payload: false });
      if (res === 200) {
        // 3.执行操作
        dispatch({ type: "COUNTER_THUNK_INCREASE", payload: 1 });
      }
    });
  };
}

export { decrease, increase };
