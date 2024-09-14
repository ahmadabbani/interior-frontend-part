import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Header = ({ categories, loading, error }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <section className="header" id="header">
      <div className="header-container">
        <img src={logo} />
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <i className="bi bi-list" style={{ fontSize: "2rem" }}></i>
        </button>
        <nav className={`nav ${isNavOpen ? "nav-open" : ""}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/aboutUs" className="nav-link">
            About Us
          </Link>
          {/* Dropdown Link for Our Works */}
          <div className="dropdown">
            <span className="nav-link">
              Our Works{" "}
              <i
                className="bi bi-caret-down-fill"
                style={{ fontSize: "0.7rem" }}
              ></i>
            </span>
            <div className="dropdown-content">
              {loading ? (
                <p className="header-loading">Loading...</p>
              ) : error ? (
                <p className="header-loading">Error: {error.message}</p>
              ) : categories.length > 0 ? (
                categories.map((cat, index) => (
                  <Link
                    style={{ textDecoration: "none" }}
                    key={index}
                    to={`/category/${encodeURIComponent(cat.attributes.title)}`}
                    className="dropdown-link"
                  >
                    {cat.attributes.title}
                    <i className="bi bi-arrow-right-short"></i>
                  </Link>
                ))
              ) : (
                <p className="header-loading">No categories found</p>
              )}
            </div>
          </div>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/contactUs" className="nav-link">
            Contact Us
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Header;
