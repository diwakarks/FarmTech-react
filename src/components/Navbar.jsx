import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "/assets/images/Other/logo.png";
import "../styles/header.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <header>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Website Logo" />
      </div>

      {/* Search */}
      <div className="input">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="What are you looking for?"
          className="input_box"
        />
      </div>

      {/* Nav Items */}
      <div className="nav_items">
        {/* SHOW ONLY WHEN NOT LOGGED IN */}
        {!isLoggedIn && (
          <div className="login">
            <Link to="/login">
              <i className="fa-solid fa-user"></i>
              <span>Login</span>
            </Link>
          </div>
        )}

        {/* SHOW ONLY WHEN LOGGED IN */}
        {isLoggedIn && (
          <div className="profile">
            <Link to="/profile">
              <i className="fa-solid fa-user"></i>
              <span>Profile</span>
            </Link>
          </div>
        )}

        {/* Contact always visible */}
        <div className="contact">
          <Link to="/contact">
            <i className="fa-solid fa-phone"></i>
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
