import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

import CounterUI from "./Counter.ui";
import * as Actions from './Counter.actions';


function mapStateToProps(state) {
  return {
    ...state.CounterThunk
  };
}


// dispatch这里考虑出现异步的情况
// 这里假设每次增加或减少都需要发送一个请求到后端去验证，若验证通过则只需操作，否则不执行
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

// 返回容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterUI);
