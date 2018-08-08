import React from 'react'
import emitter from '../../util/EventBus.js'
import TodoItemModel from '../../model/TodoItemModel.js'

export default class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    }
    onkeydown(e){
        if(e.keyCode === 13){
            // Enter键按下
            emitter.emit('addTodo.todos', TodoItemModel.addTodo(this.state.value));
            this.setState({
                value: ''
            });
        }
    }
    onchange(e){
        this.setState({
            value: e.target.value
        });
    }
    render(){
        return (
            <input type="text"
                    value={this.state.value}
                    placeholder="请输入待办事项"
                    onChange={this.onchange.bind(this)}
                    onKeyDown={this.onkeydown.bind(this)}/>
        );
    }
}