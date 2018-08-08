import React from 'react'
import styles from './TodoList.scss'
import TodoItem from './TodoItem'
import TodoItemModel from '../../model/TodoItemModel'
import {ENUM_TODO_ITEM_TYPES} from '../../util/ConstantBean'
import emitter from '../../util/EventBus'

/**
 * 待办列表
 */
export default class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                TodoItemModel.addTodo('学习Vuejs', true),
                TodoItemModel.addTodo('学习Reactjs', false)
            ],
            filteredTodos: []
        };
    }
    initFilterTodoEvent(){
        // 定义事件 - filterTodo.todos
        emitter.on('filterTodo.todos', function(type){
            let filteredTodos = [];
            switch(type){
                case ENUM_TODO_ITEM_TYPES.TODO: {
                    filteredTodos = this.state.todos.filter(inner=>!inner.done);
                    break;
                }
                case ENUM_TODO_ITEM_TYPES.DONE: {
                    filteredTodos = this.state.todos.filter(inner=>inner.done);
                    break;
                }
                default : {
                    filteredTodos = [].concat(this.state.todos);
                    break;
                }
            }
            // 更新全局中的TodoType
            emitter.emit('setTodoType.root', type);
            this.setState({
                filteredTodos
            });
        }.bind(this));
    }
    initAddTodoEvent(){
        // 定义事件 - 添加待办
        emitter.on('addTodo.todos', function(item){
            this.setState({
                todos: [
                    ...this.state.todos,
                    item
                ]
            });
            // 更新filteredTodos
            setTimeout(function(){
                emitter.emit('filterTodo.todos', this.props.type);
            }.bind(this));
        }.bind(this));
    }
    initToggleTodoEvent(){
        // 切换待办事项状态
        emitter.on('toggleTodo.todos', function({id, flag}){
            let todos = this.state.todos.map(item=>{
                if(item.id === id){
                    item.done = flag;
                }
                return item;
            });
            this.setState({
                todos
            });
            // 更新filteredTodos
            setTimeout(function(){
                emitter.emit('filterTodo.todos', this.props.type);
            }.bind(this));
        }.bind(this));
    }
    componentWillMount(){
        // 定义事件
        this.initFilterTodoEvent();
        this.initAddTodoEvent();
        this.initToggleTodoEvent();
        emitter.emit('filterTodo.todos', this.props.type);
    }
    render(){
        return (
            <ul className={styles['todo-list']}>
                {
                    this.state.filteredTodos.map(function(item){
                        return <TodoItem key={item.id} id={item.id} done={item.done} label={item.label}/>;
                    })
                }
            </ul>
        );
    }
}