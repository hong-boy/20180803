import React from 'react'
import classNames from 'classnames'
import styles from './ToggleButtons.css'
import emitter from '../../util/events.js'

const ENUM_TOGGLE_TYPES = {
    ALL: 'all',
    TODO: 'todo',
    DONE: 'done'
};


class ToggleButtons extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: ENUM_TOGGLE_TYPES.ALL
        };
    }
    toggleTodos(type){
        this.setState({selected:type});
        emitter.emit('filterTodo.todos', type);
    }
    componentDidMount(){
        this.toggleTodos(ENUM_TOGGLE_TYPES.DONE);
    }
    render(){
        return (
            <div className={styles['btn-group']}>
                <span className={classNames({[styles['item']]:true, [styles['selected']]:this.state.selected===ENUM_TOGGLE_TYPES.ALL})} 
                    onClick={this.toggleTodos.bind(this, ENUM_TOGGLE_TYPES.ALL)}>全部</span>
                <span className={classNames({[styles['item']]:true, [styles['selected']]:this.state.selected===ENUM_TOGGLE_TYPES.TODO})}
                    onClick={this.toggleTodos.bind(this, ENUM_TOGGLE_TYPES.TODO)}>待办</span>
                <span className={classNames({[styles['item']]:true, [styles['selected']]:this.state.selected===ENUM_TOGGLE_TYPES.DONE})}
                    onClick={this.toggleTodos.bind(this, ENUM_TOGGLE_TYPES.DONE)}>完成</span>
            </div>
        );
    }
}

export  default ToggleButtons;