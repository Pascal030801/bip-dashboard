import React from 'react';
import * as ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = (props) => {

  const clickOutsideHandler = (e) => {
    console.log('click outisde');

    if(props.closeOnClickOutside){
      props.onClose(e);
    }
  };


  return ReactDOM.createPortal((
    <div className={classes.modal}>
      <div className={classes['modal-overlay']} onClick={clickOutsideHandler}>
      </div>
      <div className={classes['modal-wrapper']}>
        <div className={classes['modal-header']}>
          <h1>{props.title}</h1>
        </div>
        <div className={classes['modal-body']}>
            <p>{props.message}</p>
        </div>
        <div className={classes['modal-footer']}>
          <div className={classes['modal-btn-action']}>
            <div>
              <button className={`${classes['action-btn']} ${classes['cancel-btn']}`} onClick={(e) => props.onCancel(e)}>{props.cancelMsg}</button>
            </div>
            <div>
              <button className={`${classes['action-btn']} ${classes['confirm-btn']}`} onClick={(e) => props.onConfirm(e)}>{props.confirmMsg}</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    ), document.getElementById('modal-root'));
}

Modal.propTypes = {
  closeOnClickOutside: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  confirmMsg: PropTypes.string,
  cancelMsg: PropTypes.string
};

Modal.defaultProps = {
  closeOnClickOutside: true,
  confirmMsg: 'SETUJU',
  cancelMsg: 'BATAL',
  confirmBgColor: '#23bf00',
  cancelBgColor: '#96a5b9'
}


export default Modal

