import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import { ENUM_ADD_TODO_TYPE, ENUM_TODO_LIST_TYPE } from "../../store/actions";

/**
 * 配置要映射到展示组件上的state属性
 * @param {Object} state 等价于store.getState()
 */
function mapStateToProps(state) {
  return {
    value: state.AddTodo.value
  };
}

/**
 * 配置要映射到展示组件上的动作函数
 * @param {Function} dispatch 等价于store.dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    addTodoItem(payload) {
      // 添加待办
      dispatch({
        type: ENUM_TODO_LIST_TYPE.ADD_TODO_ITEM_ASYNC,
        payload
      });
    },
    updateValue(payload) {
      // 更新value
      return dispatch({
        type: ENUM_ADD_TODO_TYPE.UPDATE_VALUE,
        payload
      });
    }
  };
}

/**
 * 返回容器组件 - AddTodo
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
