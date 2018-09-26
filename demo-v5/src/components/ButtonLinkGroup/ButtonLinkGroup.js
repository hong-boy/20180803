import React from 'react'
import PropTypes from 'prop-types'
import {Radio} from 'antd'
import ButtonLink from './ButtonLink'

export default class ButtonLinkGroup extends React.Component {
    static propTypes = {
        selectedItem: PropTypes.string.isRequired
    };
    render(){
        return (
            <div className="text-center">
                <Radio.Group value={this.props.selectedItem}>
                    <Radio.Button value="all">
                        <ButtonLink filter="all" label="全部"/>
                    </Radio.Button>
                    <Radio.Button  value="todo">
                        <ButtonLink filter="todo" label="待办"/>
                    </Radio.Button>
                    <Radio.Button  value="done">
                        <ButtonLink filter="done" label="完成"/>
                    </Radio.Button>
                </Radio.Group>
            </div>
        );
    }
}