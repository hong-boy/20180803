import React from 'react'
import classNames from 'classnames'
import styles from './TodoList.css'
import emitter from '../../util/events.js'

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: this.props.todos,
            filteredTodos: [],
            type: 'all'
        };
    }
    componentDidMount(){
        // 添加
        emitter.on('addTodo.todos', function(item){
            this.setState({
                todos: [
                    ...this.state.todos,
                    item
                ]
            });
        }.bind(this));
        // 过滤待办    
        emitter.on('filterTodo.todos', function(type){
            let filteredTodos = this.state.todos.filter(item=>{
                let flag = true;
                type = type || this.state.type;
                switch(type){
                    case 'todo': {
                        flag = !item.done;
                        break;
                    }
                    case 'done': {
                        flag = item.done;
                        break;
                    }
                    default: {
                        flag = true;
                        break;
                    }
                }
                return flag;
            });
            this.setState({
                filteredTodos,
                type,
            });
        }.bind(this));
    }
    componentWillUnMount(){
        emitter.off('.todos');
    }
    onChange(e){
        let id = parseInt(e.target.value, 10);
        let checked = e.target.checked;
        let todos = this.state.todos.map(function(item){
            if(item.id === id){
                item.done = checked;
            }
            return item;    
        });
        this.setState({todos});
        emitter.emit('filterTodo.todos', this.state.type);
    }
    render(){
        return (
            <ul className={styles['todo-list']}>
                {this.state.filteredTodos.map(item=>(
                    <li className={styles['todo-item']} key={item.id}>
                        <input type="checkbox" value={item.id} checked={item.done} onChange={this.onChange.bind(this)}/>
                        <span className={classNames({[styles['line-through']]:item.done})}>{item.label}</span>
                    </li>
                ))}
            </ul>
        );
    }
}

export default TodoList;