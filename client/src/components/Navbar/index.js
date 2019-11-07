// index.js for Navbar

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/auth"
              className={
                window.location.pathname === "/auth" ? "nav-link active" : "nav-link"}
            >
              Authenticate
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/parent"
              className={window.location.pathname === "/parent" ? "nav-link active" : "nav-link"}
            >
              Parent
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/teacher"
              className={window.location.pathname === "/teacher" ? "nav-link active" : "nav-link"}
            >
              Teacher
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/chat"
              className={window.location.pathname === "/chat" ? "nav-link active" : "nav-link"}
            >
              Message
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;