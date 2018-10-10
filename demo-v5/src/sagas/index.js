import { put, call } from "redux-saga/effects";
import { takeEvery, takeLatest, delay } from "redux-saga";

import { ENUM_TODO_LIST_TYPE, ENUM_ADD_TODO_TYPE } from "../store/actions";

function* addTodoItem(args) {
    yield delay(100);
    yield put({type:ENUM_TODO_LIST_TYPE.ADD_TODO_ITEM, payload: args});
    yield put({type:ENUM_ADD_TODO_TYPE.UPDATE_VALUE, payload: ""});
    console.log("接收到参数：", args);
}

export default function* saga() {
  yield takeEvery(ENUM_TODO_LIST_TYPE.ADD_TODO_ITEM_ASYNC, addTodoItem);
}
