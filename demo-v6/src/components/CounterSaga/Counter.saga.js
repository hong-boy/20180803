import { take, call, fork, put } from "redux-saga/effects";

function fakeRequest() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(200);
      }, 1000);
    });
  }

// 监听COUNTER_SAGA_DECREASE
function* watchDecrease() {
  while(true){
    const action = yield take("COUNTER_SAGA_DECREASE_EVENT");
    // 1.发起验证请求
    yield put({ type: "COUNTER_SAGA_DECREASE_REQUESTING", payload: true });
    const res = yield call(fakeRequest, action);
    // 2.获取验证结果
    yield put({ type: "COUNTER_SAGA_DECREASE_REQUESTING", payload: false });
    // 3.执行操作
    if(res === 200){
        yield put({ type: "COUNTER_SAGA_DECREASE", payload: action.payload });
    }
  }
}

function* watchIncrease(){
    while(true){
        const action = yield take("COUNTER_SAGA_INCREASE_EVENT");
        // 1.发起验证请求
        yield put({ type: "COUNTER_SAGA_DECREASE_REQUESTING", payload: true });
        const res = yield call(fakeRequest, action);
        // 2.获取验证结果
        yield put({ type: "COUNTER_SAGA_DECREASE_REQUESTING", payload: false });
        // 3.执行操作
        if(res === 200){
            yield put({ type: "COUNTER_SAGA_INCREASE", payload: action.payload });
        }
      }
}

export default [
    fork(watchDecrease),
    fork(watchIncrease),
]
