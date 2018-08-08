import React from 'react'
import styles from './AddTodo.css'
import emitter from '../../util/events.js'

/**
 * 添加todo事项
 */
class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
        this.onChangeVaule = this.onChangeVaule.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(e){
        if(e.keyCode === 13){
            // 回车键
            emitter.emit('addTodo.todos', {
                id: Date.now(),
                label: this.state.value,
                done: false
            });
            setTimeout(function(){
                emitter.emit('filterTodo.todos');
            }, 100);
            this.setState({value:''});
        }
    }

    onChangeVaule(e){
        this.setState({value:e.target.value});
    }

    render(){
        return (
            <input type="text" 
                placeholder="请输入新的代办事项"
                value={this.state.value}
                onKeyDown={this.onKeyDown}
                onChange={this.onChangeVaule}
                className={styles.input}/>
        );
    }
}

export default AddTodo;