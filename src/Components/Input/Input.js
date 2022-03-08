import React from 'react'
import classes from './Input.module.css';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <div>
            <div className={classes.inputWrap}>
                <label className={classes.inputLabel} htmlFor={props.id}>{props.label}</label>
                <input 
                    required={props.required} 
                    type={props.type} 
                    id={props.id} 
                    name={props.id} 
                    onChange={props.onChange} 
                    onKeyPress={(e) => {
                        return e.key === 'Enter' && e.preventDefault(); 
                    }} 
                />
            </div>
            {props.errorMsg !== '' && <p style={{color: 'red'}}>{props.errorMsg}</p>}
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    errorMsg: PropTypes.string
};

Input.defaultValue = {
    required: false,
    errorMsg: ''
}

export default Input