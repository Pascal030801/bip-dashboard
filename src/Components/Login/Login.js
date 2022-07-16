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
        if (localStorage.getItem("token") !== null) {
            navigate("/", { replace: true });
        }
    }, [])

    return (
        <div>
            <div className={classes['login-card']}>
                <form onSubmit={submitHandler} className={classes.form}>
                    
                    <h1 style={{textAlign:'center'}}>LOGIN</h1>

                    {isError && 
                        <h7 className={classes.lineUp} style={{color: 'red', fontSize: '1rem', textAlign:'center'}}>
                            Email atau Password salah, <br></br>Silahkan coba lagi !
                        </h7>}

                    <div className={classes['input-wrap']}>
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='email' name='email' placeholder='Masukan Email' onChange={emailHandler} />
                    </div>

                    <div className={classes['input-wrap']}>
                        <label htmlFor='password'>Kata Sandi</label>
                        <input id='password' type='password' name='password' placeholder='Masukan Password' onChange={passwordHandler} />
                    </div>

                    <div style={{textAlign:'center'}}>
                        <button className={classes.loginbtn}><b>Login</b></button>
                    </div>
                </form>
            </div>
            <img src='/ElementLogin.png' className={classes.GambarFooter} />  
        </div>

    )
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default Login