import React from 'react'
import classes from './Input.module.css';
import PropTypes from 'prop-types';

function  inputPropsAreEqual(prevInput, nextInput) {
    return prevInput.value === nextInput.value 
    && prevInput.errorMsg === nextInput.errorMsg 
    && prevInput.hasError === nextInput.hasError;
}

const Input = (props) => {
    return (
        <div className={`${classes.inputWrap} ${props.className}`} key={props.id}>
            <label className={classes.inputLabel} htmlFor={props.id}>{props.label}</label>
            <div className={classes.inputCom}>
                <input
                    type={props.type} 
                    id={props.id} 
                    name={props.id} 
                    onChange={props.onChange} 
                    onKeyPress={(e) => {
                        return e.key === 'Enter' && e.preventDefault(); 
                    }} 
                    onBlur={props.onBlur}
                    value={props.value}
                />
                {props.errorMsg !== '' && <span style={{color: 'red'}}>{props.errorMsg}</span>}
            </div>
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errorMsg: PropTypes.string
};

Input.defaultValue = {
    errorMsg: ''
}

export default React.memo(Input, inputPropsAreEqual);