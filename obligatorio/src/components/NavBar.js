import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Css/NavBar.css";
import { ImageAvatars } from "./Avatar"

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Pescetto Viajes
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/paginaUsers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/usuario"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Usuario
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            <ImageAvatars></ImageAvatars>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
