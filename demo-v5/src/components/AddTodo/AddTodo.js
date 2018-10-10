import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import styles from "./AddTodo.scss";


/**
 * AddTodo - 展示组件（所有依赖都通过props传入，不做具体的业务逻辑实现，只专注于UI结构）
 */
export default class AddTodo extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    addTodoItem: PropTypes.func.isRequired,
    updateValue: PropTypes.func.isRequired
  };
  onkeydown(e) {
    if (e.keyCode === 13) {
      this.props.addTodoItem(e.target.value);
    }
  }
  onchange(e) {
    this.props.updateValue(e.target.value);
  }
  render() {
    let { value } = this.props;
    return (
      <Input
        type="text"
        className={styles["input"]}
        placeholder="请输入待办事项"
        onChange={this.onchange.bind(this)}
        onKeyDown={this.onkeydown.bind(this)}
        value={value}
      />
    );
  }
}
