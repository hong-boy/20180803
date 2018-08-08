import React from 'react'
import styles from './Root.scss'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import ToggleButtonGroup from './components/ToggleButtonGroup/ToggleButtonGroup'
import emitter from './util/EventBus'
import {ENUM_TODO_ITEM_TYPES} from './util/ConstantBean'

export default class Root extends React.Component {
    constructor(){
        super();
        // 败笔 - 需要在外层父组件处维护一个状态字段：type
        this.state = {
            type: ENUM_TODO_ITEM_TYPES.ALL
        };
    }
    componentWillMount(){
        emitter.on('setTodoType.root', (type)=>{
            this.setState({
                type
            });
        })
    }
    render(){
        return (
            <div className={styles['root']}>
                <AddTodo/>
                <TodoList type={this.state.type}/>
                <ToggleButtonGroup selected={this.state.type}/>
            </div>
        );
    }
}