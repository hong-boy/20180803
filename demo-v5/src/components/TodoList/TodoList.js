import React from 'react'
import { List } from 'antd'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import styles from './TodoList.scss'

export default class TodoList extends React.Component {
    static propTypes = {
        list: PropTypes.array.isRequired,
        toggleTodoItem: PropTypes.func.isRequired
    };
    render(){
        let {list, toggleTodoItem} = this.props;
        return (
            <div className={styles['wrap']}>
                <List bordered
                    size="small"
                    dataSource={list}
                    renderItem={item => {
                        let {id, label, done} = item;
                        return (
                            <List.Item>
                                <TodoItem id={id} 
                                    key={id}
                                    label={label} 
                                    done={done} 
                                    toggleTodoItem={toggleTodoItem}/>
                            </List.Item>
                        );
                    }}/>
            </div>
        );
    }
}