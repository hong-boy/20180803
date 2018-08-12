import React from 'react'
import {Row, Col, Layout} from 'antd'
import 'antd/dist/antd.css'
import './assets/style/common.css'
import AddTodoContainer from './components/AddTodo/AddTodo.container'
import TodoListContainer from './components/TodoList/TodoList.container'
import ButtonLinkGroupContainer from './components/ButtonLinkGroup/ButtonLinkGroup.container'


export default class Root extends React.Component {
    render(){
        return (
            <Row type="flex" align="middle" justify="center">
                <Col className="dashboard">
                    <h2 className="text-center">待办事项</h2>
                    <AddTodoContainer/>
                    <TodoListContainer/>
                    <ButtonLinkGroupContainer/>
                </Col>
            </Row>
        );
    }
}