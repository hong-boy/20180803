import React from 'react'
import AddTodoContainer from './components/AddTodo/AddTodo.container'
import TodoListContainer from './components/TodoList/TodoList.container'
import ButtonLinkGroup from './components/ButtonLinkGroup/ButtonLinkGroup'

export default class Root extends React.Component {
    render(){
        return (
            <div>
                <h2>待办事项</h2>
                <AddTodoContainer/>
                <TodoListContainer/>
                <ButtonLinkGroup/>
            </div>
        );
    }
}