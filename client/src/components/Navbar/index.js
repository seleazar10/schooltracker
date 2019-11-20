// index.js for Navbar

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/login">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <Link
              to="/auth"
              className={
                window.location.pathname === "/auth"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Authenticate
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="/login"
              className={
                window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/parent/profile"
              className={
                window.location.pathname === "/parent"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Parent
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/teacher/profile"
              className={
                window.location.pathname === "/teacher"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Teacher
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin"
              className={
                window.location.pathname === "/admin"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="name-box">
        <h4>
          {" "}
          Welcome Back!{" "}
          <span className="badge badge-pill badge-secondary">{props.name}</span>
        </h4>
      </div>
    </nav>
  );
}

export default Navbar;
