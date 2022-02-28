
import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

import classes from './DasborLayout.module.css';
const DasborLayout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "1") {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    navigate("/login", { replace: true });

  }

  return (
    <div className={classes['dasbor-layout']}>
      {/* NavBar */}
      <nav className={classes.sidebar}>
        <div className={classes.logo}>
          <img src='/Logo.jpg' alt={'Banyuke Intan Permai Logo'} />
          <h1>{"BIP\nSistem Informasi"}</h1>
        </div>
        <hr className={classes.divider} />

        <ul className={classes['menu-list']}>
          <li className={classes.menu}>
            <NavLink className={classes.navlink} to={"cekIdBI"}>Cek ID BI</NavLink>
          </li>
          <hr className={classes.divider} />

          <li className={`${classes.menu}`}>
            <NavLink className={classes.navlink} to={"dokumenPengajuan"}>Dokumen Pengajuan</NavLink>
          </li>
          <hr className={classes.divider} />

          <li className={`${classes.menu}`}>
            <NavLink className={classes.navlink} to={"dokumenLanjutan"}>Dokumen Lanjutan</NavLink>
          </li>
          <hr className={classes.divider} />

          <li className={`${classes.menu}`}>
            <NavLink className={classes.navlink} to={"dokumenLaporanPersiapanAkad"}>Dokumen Laporan Persiapan Akad</NavLink>
          </li>
          <hr className={classes.divider} />

          <li className={`${classes.menu}`}>
            <NavLink className={classes.navlink} to={"dokumenKelengkapanAkad"}>Dokumen Kelengkapan Akad</NavLink>
          </li>
          <hr className={classes.divider} />

          <li className={`${classes.menu} ${classes.logout}`} onClick={logoutHandler}>
            <a href="/" className={classes.navlink}>KELUAR</a>
          </li>
        </ul>
      </nav>
      <div className={classes.content}>
        <div className={classes.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DasborLayout