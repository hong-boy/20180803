import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
    static propTypes = {
        list: PropTypes.array.isRequired
    };
    toggleTodoItem(id, done){
        this.props.toggleTodoItem({id,done});
    }
    render(){
        return (
            <ul>
                {
                    this.props.list.map(item=>{
                        return (
                            <TodoItem key={item.id} 
                                onchange={this.toggleTodoItem.bind(this)}
                                id={item.id} 
                                done={item.done} 
                                label={item.label}/>
                        );
                    })
                }
            </ul>
        );
    }
}