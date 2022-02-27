import { useState } from 'react';
import DasborLayout from './Components/DasborLayout/DasborLayout';
import Login from './Components/Login/Login';
import classes from './App.module.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const loginHandler = () => {
    console.log('login');
    localStorage.setItem("isLoggedIn", 1);
    navigate("/", { replace: true })
  }

  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/login" element={<Login onLogin={loginHandler} />} />
        <Route path="/" element={<DasborLayout />}>
          <Route path="cekIdBI" element={<div><h1>Cek ID BI</h1></div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
