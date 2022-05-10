import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import PropTypes from 'prop-types';


const BASE_PATH_API = process.env.REACT_APP_API_URL;

const Login = (props) => {
    const [inputtedEmail, setInputtedEmail] = useState('');
    const [inputtedPassword, setInputtedPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        axios.post(`${BASE_PATH_API}/login`, {
            email: inputtedEmail,
            password: inputtedPassword,
        }).then((response) => {
            props.onLogin(response.data);
        }).catch((error) => {
            console.log(error)
            setIsError(true)
        });
    }

    const emailHandler = (e) => {
        setInputtedEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setInputtedPassword(e.target.value)
    }

    useEffect(() => {
        console.log(localStorage.getItem('token'))
        if (localStorage.getItem("token") !== null) {
            navigate("/", { replace: true });
        }
    }, [])
    return (
        <div className={classes['login-card']}>
            <form onSubmit={submitHandler} className={classes.form}>
                <p>MASUK</p>
                {isError && <p style={{color: 'red', fontSize: '1.8em'}}>Email atau Password salah</p>}
                <div className={classes['input-wrap']}>
                    <label htmlFor='email'>Alamat Email</label>
                    <input id='email' type='email' name='email' onChange={emailHandler} />
                </div>
                <div className={classes['input-wrap']}>
                    <label htmlFor='password'>Kata Sandi</label>
                    <input id='password' type='password' name='password' onChange={passwordHandler} />
                </div>

                <button className={classes.loginbtn}>Masuk</button>
            </form>
        </div>


    )
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default Login