import {all} from 'redux-saga/effects';

import CounterSaga from '@components/CounterSaga/Counter.saga';

// sagas汇总
export default function*() {
  // console.log("hello saga");
  yield all([
      ...CounterSaga
  ])
}
