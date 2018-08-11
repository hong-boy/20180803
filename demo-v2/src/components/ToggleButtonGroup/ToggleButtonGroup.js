import React from 'react'
import ButtonLink from './ButtonLink'

export default class ToggleButtonGroup extends React.Component {
    onclick(){}
    render(){
        return (
            <div>
                <ButtonLink label="全部" filter="all"/>
                <ButtonLink label="待办" filter="todo"/>
                <ButtonLink label="完成" filter="done"/>
            </div>
        );
    }
}