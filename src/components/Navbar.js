import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let token = localStorage.getItem("token");

  useEffect(() => {
    console.log(location.pathname);
    // eslint-disable-next-line
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <nav>
        <div className="navbar flex container">
          <Link className="navbar-title" to="/">
            iNotebook
          </Link>
          <div className="flex navbar-content">
            <ul className="flex navbar-menu">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/mynotes" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/mynotes"
                >
                  My Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <form className="navbar-form flex">
              {token ? (
                <Link
                  className="btn nav-btn"
                  to="/login"
                  role="button"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              ) : (
                <>
                  <Link className="btn nav-btn" to="/login" role="button">
                    Login
                  </Link>
                  <Link
                    className="btn nav-btn signup-btn"
                    to="/signup"
                    role="button"
                  >
                    Signup
                  </Link>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
