import React from 'react'
import PropTypes from 'prop-types'

/**
 * (pure component: 纯组件，只通过props接收参数（对props以外的数据是零依赖），只专注于UI结构的呈现)
 */
class AddTodo extends React.Component {
    static propTypes = { // 声明需要传入的参数
        value: PropTypes.string.isRequired, // 当前输入值
        addTodoItem: PropTypes.func.isRequired, // 添加新待办事项
        onChange: PropTypes.func.isRequired, // 更新props.value
    };
    onkeydown(e){
        if(e.keyCode === 13){
            this.props.addTodoItem(e.target.value)
        }
    }
    onchange(e){
        // 不做具体实现
        this.props.onChange(e.target.value);
    }
    render(){
        return (
            <div>
                <input type="text"
                    placeholder="请输入待办事项"
                    onChange={this.onchange.bind(this)}
                    onKeyDown={this.onkeydown.bind(this)}
                    value={this.props.value}/>
            </div>
        );
    }
}



export default AddTodo;