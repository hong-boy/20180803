import React from 'react'
import styles from './ToggleButtonGroup.scss'
import ButtonItem from './ButtonItem.js'

export default class ToggleButtonGroup extends React.Component {
    render(){
        return (
            <div className={styles['btn-group']}>
                <ButtonItem label="全部" 
                    type="all" 
                    selected={this.props.selected === 'all'}/>
                <ButtonItem label="待办" 
                    type="todo" 
                    selected={this.props.selected === 'todo'}/>
                <ButtonItem label="完成" 
                    type="done" 
                    selected={this.props.selected === 'done'}/>
            </div>
        );
    }
}