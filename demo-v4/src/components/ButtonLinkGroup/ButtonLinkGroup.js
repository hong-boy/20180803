import React from 'react'
import ButtonLink from './ButtonLink'

export default class ButtonLinkGroup extends React.Component {
    render(){
        return (
            <div>
                <ButtonLink filter="all" label="全部"/>
                <ButtonLink filter="todo" label="待办"/>
                <ButtonLink filter="done" label="完成"/>
            </div>
        );
    }
}