import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';

const Login = (props) => {

    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        props.onLogin();
    }

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") === "1") {
            navigate("/", { replace: true })
        }
    })
    return (
        <div className={classes['login-card']}>
            <form onSubmit={submitHandler} className={classes.form}>
                <p>MASUK</p>
                <div className={classes['input-wrap']}>
                    <label htmlFor='email'>Alamat Email</label>
                    <input id='email' type='email' name='email' />
                </div>
                <div className={classes['input-wrap']}>
                    <label htmlFor='password'>Kata Sandi</label>
                    <input id='password' type='password' name='password' />
                </div>

                <button className={classes.loginbtn}>Masuk</button>
            </form>
        </div>


    )
}

export default Login