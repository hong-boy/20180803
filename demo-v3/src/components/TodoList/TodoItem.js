import React from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        toggleTodoItem: PropTypes.func.isRequired
    };
    onchange(id, e){
        this.props.toggleTodoItem(id, e.target.checked);
    }
    render(){
        let {id, label, done, toggleTodoItem} = this.props;
        return (
            <li>
                <input type="checkbox"
                    id={id}
                    onChange={this.onchange.bind(this, id)}
                    checked={done}/>
                <label htmlFor={id}>{label}</label>
            </li>
        );
    }
}