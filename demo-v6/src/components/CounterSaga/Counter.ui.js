import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterUI extends Component {
    static propTypes = {
        isFetching: PropTypes.bool,
        counts: PropTypes.number,
        actions: PropTypes.object,
    };
    render() {
        const props = this.props;
        return (
            <div>
                <div>{props.counts}</div>
                <button onClick={()=>props.actions.decrease()}>减少（-1）</button>
                <button onClick={()=>props.actions.increase()}>增加（+1）</button>
                {props.isFetching ? <div>正在验证操作...</div>:null}
            </div>
        );
    }
}

export default CounterUI;