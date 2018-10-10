import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Checkbox } from "antd";
import styles from "./TodoList.scss";

export default class TodoItem extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    toggleTodoItem: PropTypes.func.isRequired
  };
  onchange(id, e) {
    this.props.toggleTodoItem(id, e.target.checked);
  }
  render() {
    let { id, label, done } = this.props;
    return (
      <li className={classNames({ [styles["done"]]: done })}>
        <Checkbox onChange={this.onchange.bind(this, id)} checked={done}>
          {label}
        </Checkbox>
      </li>
    );
  }
}
