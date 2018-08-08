import React from 'react'
import classNames from 'classnames'
import styles from './ToggleButtonGroup.scss'
import emitter from '../../util/EventBus'

/**
 * 按钮组件
 */
export default class ButtonItem extends React.Component {
    onclick(e){
        console.log(this.props.type);
        emitter.emit('filterTodo.todos', this.props.type);
    }
    render(){
        return (
            <span 
                onClick={this.onclick.bind(this)}
                className={classNames({
                    [styles['item']]:true,
                    [styles['selected']]:this.props.selected
                })}>{this.props.label}</span>
        );
    }
}