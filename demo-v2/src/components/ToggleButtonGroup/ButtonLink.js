import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

export default class ButtonLink extends React.Component {
    static propTypes = {
        filter: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    };
    render(){
        let {filter, label} = this.props;
        return (
            <NavLink to={`/${filter}`}>
                <button>{label}</button>
            </NavLink>
        );
    }
}