import DasborLayout from './Components/DasborLayout/DasborLayout';
import Login from './Components/Login/Login';
import classes from './App.module.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CekIdBi from './Pages/CekIDBI/CekIdBi';
import InputCekIdBi from './Pages/CekIDBI/Add/InputCekIdBi';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import DokumenPengajuan from './Pages/DokumenPengajuan/DokumenPengajuan';
import InputDokumenPengajuan from './Pages/DokumenPengajuan/Add/InputDokumenPengajuan';
import DokumenLanjutan from './Pages/DokumenLanjutan/DokumenLanjutan';
import InputDokumenLanjutan from './Pages/DokumenLanjutan/Add/InputDokumenLanjutan';
import DokumenKelengkapanAkad from './Pages/DokumenKelengkapanAkad/DokumenKelengkapanAkad';
import InputDokumenKelengkapanAkad from './Pages/DokumenKelengkapanAkad/Add/InputDokumenKelengkapanAkad';
import DokumenPersiapanAkad from './Pages/DokumenPersiapanAkad/DokumenPersiapanAkad';
import InputDokumenPersiapanAkad from './Pages/DokumenPersiapanAkad/Add/InputDokumenPersiapanAkad';

library.add(fas)

function App() {
  const navigate = useNavigate();
  const loginHandler = (response) => {
    localStorage.setItem("token", response.token);
    localStorage.setItem("fullName", response.name);
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
          <Route path="cekIdBI/update/:id" element={<InputCekIdBi />} />
          <Route path="dokumenPengajuan" element={<DokumenPengajuan />} />
          <Route path="dokumenPengajuan/update/:id" element={<InputDokumenPengajuan />} />
          <Route path="dokumenLanjutan" element={<DokumenLanjutan />} />
          <Route path="dokumenLanjutan/update/:id" element={<InputDokumenLanjutan />} />
          <Route path="dokumenKelengkapanAkad" element={<DokumenKelengkapanAkad />} />
          <Route path="dokumenKelengkapanAkad/update/:id" element={<InputDokumenKelengkapanAkad />} />
          <Route path="dokumenPersiapanAkad" element={<DokumenPersiapanAkad />} />
          <Route path="dokumenPersiapanAkad/update/:id" element={<InputDokumenPersiapanAkad />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
