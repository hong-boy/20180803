import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterUI extends Component {
    static propTypes = {
        counts: PropTypes.number,
        decrease: PropTypes.func,
        increase: PropTypes.func,
    };
    render() {
        const props = this.props;
        return (
            <div>
                <span>{props.counts}</span>
                <button onClick={()=>props.decrease()}>减少（-1）</button>
                <button onClick={()=>props.increase()}>增加（+1）</button>
            </div>
        );
    }
}

export default CounterUI;