import React from 'react'
import classes from './SelectInput.module.css';
import PropTypes from 'prop-types';

function  selectInputPropsAreEqual(prevSelectInput, nextSelectInput) {
    return prevSelectInput.value === nextSelectInput.value 
    && prevSelectInput.errorMsg === nextSelectInput.errorMsg 
    && prevSelectInput.hasError === nextSelectInput.hasError
    && prevSelectInput.options === nextSelectInput.options
    && prevSelectInput.placeholderText === nextSelectInput.placeholderText;
}

const SelectInput = (props) => {
  return (
    <div className={`${classes.inputWrap} ${props.className}`} key={props.id}>
        <label htmlFor={props.id}>{props.label}</label>
        <div className={classes.selectInputCom}>
            <select 
                id={props.id} 
                name={props.id} 
                disabled={props.disabled} 
                value={props.value} 
                onBlur={props.onBlur} 
                onChange={props.onChange}
            >
                {props.isUsingPlaceHolder && <option value={'placeholder'} disabled hidden>{props.placeholderText}</option>}
                {props.options}
            </select>
            {props.errorMsg !== '' && <span style={{color: 'red'}}>{props.errorMsg}</span>}
        </div>
    </div>
  )
}

SelectInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    isUsingPlaceHolder: PropTypes.bool,
    placeholderText: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.element),
    errorMsg: PropTypes.string,
    hasError: PropTypes.bool,
    disabled: PropTypes.bool
};

SelectInput.defaultValue = {
    errorMsg: '',
    hasError: false,
    isUsingPlaceHolder: true,
    placeholderText: `Pilih Salah Satu`,
    disabled: false

}

export default React.memo(SelectInput, selectInputPropsAreEqual);