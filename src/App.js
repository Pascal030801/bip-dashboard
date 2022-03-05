import DasborLayout from './Components/DasborLayout/DasborLayout';
import Login from './Components/Login/Login';
import classes from './App.module.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CekIdBi from './Pages/CekIDBI/CekIdBi';
import InputCekIdBi from './Pages/CekIDBI/Add/InputCekIdBi';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate = useNavigate();
  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    navigate("/", { replace: true })
  }

  return (
    <div className={classes.app}>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login onLogin={loginHandler} />} />
        <Route path="/" element={<DasborLayout />}>
          <Route path="cekIdBI" element={<CekIdBi />} />
          <Route path="cekIdBI/tambah" element={<InputCekIdBi />} />
          <Route path="dokumenPengajuan" element={<div><h1>Dokumen Pengajuan</h1></div>} />
          <Route path="dokumenLanjutan" element={<div><h1>Dokumen Lanjutan</h1></div>} />
          <Route path="dokumenLaporanPersiapanAkad" element={<div><h1>Dokumen Laporan Persiapan Akad</h1></div>} />
          <Route path="dokumenKelengkapanAkad" element={<div><h1>Dokumen Kelengkapan Akad</h1></div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
