import React from 'react'
import styles from './Root.scss'
import AddTodoContainer from './components/AddTodo/AddTodo.container'
import TodoListContainer from './components/TodoList/TodoList.container'
import ToggleButtonGroup from './components/ToggleButtonGroup/ToggleButtonGroup'

export default class Root extends React.Component {
    render(){
        return (
            <div className={styles.wrap}>
                <h2>待办事项</h2>
                <AddTodoContainer/>
                <TodoListContainer/>
                <ToggleButtonGroup/>
            </div>
        );
    }
}