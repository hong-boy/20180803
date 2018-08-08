import React, {Component} from 'react'
import styles from './Root.css'
import AddTodo from './AddTodo/AddTodo.js'
import TodoList from './TodoList/TodoList.js'
import ToggleButtons from './ToggleButtons/ToggleButtons.js'

let id = 0;

const todos = [
    {
        id: id++,
        label: '学习React',
        done: false
    },
    {
        id: id++,
        label: '学习Vue',
        done: true
    },
];

/**
 * 根组件
 */
class Root extends Component {
    render(){
        return (
            <div className={styles.root}>
                <h2>代办事项</h2>
                <AddTodo/>
                <TodoList todos={todos}/>
                <ToggleButtons/>
            </div>
        );
    }
}

export default Root;