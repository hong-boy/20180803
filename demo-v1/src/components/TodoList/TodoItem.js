import React from 'react'
import styles from './TodoList.scss'
import classNames from 'classnames'
import emitter from '../../util/EventBus'

/**
 * 待办列表项
 */
export default class TodoItem extends React.Component {
    onchange(e){
        emitter.emit('toggleTodo.todos', {
            id: this.props.id,
            flag: e.target.checked
        });
    }
    render(){
        return (
            <li className={classNames({
                [styles['item']]: true,
                [styles['done']]: this.props.done,
            })}>
                <input type="checkbox" 
                    id={this.props.id} 
                    checked={this.props.done} 
                    onChange={this.onchange.bind(this)}/>
                <label htmlFor={this.props.id}>{this.props.label}</label>
            </li>
        );
    }
}