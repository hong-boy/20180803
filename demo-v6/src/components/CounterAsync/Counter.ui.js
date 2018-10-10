import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterUI extends Component {
    static propTypes = {
        isFetching: PropTypes.bool,
        counts: PropTypes.number,
        decrease: PropTypes.func,
        increase: PropTypes.func,
    };
    render() {
        const props = this.props;
        return (
            <div>
                <div>{props.counts}</div>
                <button onClick={()=>props.decrease()}>减少（-1）</button>
                <button onClick={()=>props.increase()}>增加（+1）</button>
                {props.isFetching ? <div>正在验证操作...</div>:null}
            </div>
        );
    }
}

export default CounterUI;