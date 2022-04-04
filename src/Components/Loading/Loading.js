import React from 'react'
import * as ReactDOM from 'react-dom';
import classes from './Loading.module.css';

const Loading = () => {
    return ReactDOM.createPortal((
        <div className={classes.loading}>
            <h1>Loading...</h1>
        </div>
    ), document.getElementById('loading-root'));
}

export default Loading