import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

export default class ButtonLinkGroup extends React.Component {
    static propTypes = {
        filter: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    };
    render(){
        let {filter, label} = this.props;
        return (
            <NavLink to={`/${filter}`}>
                <span>{label}</span>
            </NavLink>
        );
    }
}