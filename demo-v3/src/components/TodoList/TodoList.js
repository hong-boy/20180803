import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
    static propTypes = {
        list: PropTypes.array.isRequired,
        toggleTodoItem: PropTypes.func.isRequired
    };
    render(){
        let {list, toggleTodoItem} = this.props;
        return (
            <ul>
                {
                    list.map(item=>{
                        let {id, label, done} = item;
                        return (<TodoItem id={id} 
                                label={label} 
                                done={done} 
                                toggleTodoItem={toggleTodoItem}/>);
                    })
                }
            </ul>
        );
    }
}