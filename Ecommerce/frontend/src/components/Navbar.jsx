// src/components/Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import authService from "../service/authService";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";


function Navbar() {
  const { user } = useContext(UserContext);
  console.log("logged User", user);

  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    user.name = "";
    // setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ECommerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-item  d-flex align-items-center mr-2"></li>
                <li className="nav-item  d-flex align-items-center mr-2">
                  {user.role == "admin" ? (
                    <span className="nav-link">{user.name}</span>
                  ) : (
                    <>
                      <FaCartShopping />{" "}
                      <span className="nav-link">{user.name}</span>
                    </>
                  )}
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;