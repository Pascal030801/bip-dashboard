
import React, { useEffect } from 'react'
import { NavLink, Outlet, Route, useNavigate } from 'react-router-dom'

import classes from './DasborLayout.module.css';
const DasborLayout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "1") {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <div>
      <nav className={classes.navbar}>
        {/* NavBar */}
        <h1>Logo</h1>
        <ul>
          <li>
            <NavLink className={classes.navlink} to={"cekIdBI"}>Cek ID BI</NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default DasborLayout