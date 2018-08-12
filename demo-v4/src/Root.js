import React from 'react'
import {Row, Col, Layout} from 'antd'
import 'antd/dist/antd.css'
import './assets/style/common.css'
import AddTodoContainer from './components/AddTodo/AddTodo.container'
import TodoListContainer from './components/TodoList/TodoList.container'
import ButtonLinkGroup from './components/ButtonLinkGroup/ButtonLinkGroup'


export default class Root extends React.Component {
    render(){
        return (
            <Row type="flex" align="middle" justify="center">
                <Col style={{width:"400px"}}>
                    <h2 className="text-center">待办事项</h2>
                    <AddTodoContainer/>
                    <TodoListContainer/>
                    <ButtonLinkGroup/>
                </Col>
            </Row>
        );
    }
}