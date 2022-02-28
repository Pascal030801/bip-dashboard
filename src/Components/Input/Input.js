import React from 'react'
import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.inputWrap}>
            <label className={classes.inputLabel} htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} />
        </div>
    )
}

export default Input