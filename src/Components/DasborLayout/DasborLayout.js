
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

import classes from './DasborLayout.module.css';
const DasborLayout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login", { replace: true });

  }

  return (
    <div className={classes['dasbor-layout']}>
      <nav className={classes.sidebar}>
        <div>
          <img src='/LogoHD.jpg' className={classes.logo} />
        </div>
        <hr className={classes.divider} />
        <ul>
          <li>
            <NavLink className={classes.navlink} to={"cekIdBI"}><span><FontAwesomeIcon icon="fa-solid fa-money-check-dollar" /></span><span>Cek ID BI</span></NavLink>
          </li>
          <hr className={classes.divider} />

          <li>
            <NavLink className={classes.navlink} to={"dokumenPengajuan"}><span><FontAwesomeIcon icon="fa-solid fa-file-export" /></span><span>Dokumen Pengajuan</span></NavLink>
          </li>
          <hr className={classes.divider} />

          <li>
            <NavLink className={classes.navlink} to={"dokumenLanjutan"}><span><FontAwesomeIcon icon="fa-solid fa-file-lines" /></span><span>Dokumen Lanjutan</span></NavLink>
          </li>
          <hr className={classes.divider} />

          <li>
            <NavLink className={classes.navlink} to={"dokumenLaporanPersiapanAkad"}><span><FontAwesomeIcon icon="fa-solid fa-file-contract" /></span><span>Dokumen Laporan Persiapan Akad</span></NavLink>
          </li>
          <hr className={classes.divider} />

          <li>
            <NavLink className={classes.navlink} to={"dokumenKelengkapanAkad"}><span><FontAwesomeIcon icon="fa-solid fa-file-signature" /></span><span>Dokumen Kelengkapan Akad</span></NavLink>
          </li>
          <hr className={classes.divider} />

        </ul>
      </nav>

      <div className={classes['main-content']}>
        <header>
          <div className={classes['header-content']}>
            <div className={classes['profile-wrap']}>
              <span>Ersapta Aristo</span>
              <img src='/avatar-2.jpg' className={classes.profile} />
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <p>Copyright @Banyuke Intan Permai 2022</p>   
        </footer>
      </div>
    </div>
  )
}

export default DasborLayout