import React from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        done: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        onchange: PropTypes.func.isRequired
    };
    onchange(id, e){
        this.props.onchange(id, e.target.checked);
    }
    render(){
        let {id, label, done} = this.props;
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