import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section id="contact">
      <div className="container contact">
        <div className="row first-row">
          <div className="col-sm-6 contact-left">
            <h2>Dont Miss Any Opportunity</h2>
            <p>There are many variations of passages</p>
          </div>
          <div className="col-sm-6 contact-right">
            <div className="form">
              <input type="email" placeholder="Enter your email adresse" />
              <button type="submit">
                <i class="bi bi-send"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row second-row">
          <div className="col-md-3 d-flex align-items-center">
            <div className="text">
              <img src={logo} />
            </div>
          </div>
          <div className="col-md-3 contact-list">
            <h3>Quick Links</h3>
            <ul>
              <Link to="/aboutUs" style={{ textDecoration: "none" }}>
                <li>About Us</li>
              </Link>
              <Link to="/contactUs" style={{ textDecoration: "none" }}>
                <li>Contact Us</li>{" "}
              </Link>
              <Link to="/allProducts" style={{ textDecoration: "none" }}>
                <li>Our Works</li>{" "}
              </Link>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <li>Services</li>{" "}
              </Link>
            </ul>
          </div>
          <div className="col-md-3 contact-list">
            <h3>
              Get In Touch <i className="bi bi-arrow-right-short"></i>
            </h3>
            <ul>
              <li>
                <strong>Address: </strong>Elm Street, Mystic Falls, Beirut.
              </li>
              <li>
                <strong>Phone: </strong>+999 111555
              </li>
              <li>
                <strong>Email: </strong>info@email.com
              </li>
            </ul>
          </div>
          <div className="col-md-3 contact-list">
            <h3>Working Hours</h3>
            <p className="m-0 p-0">Monday - Friday 09.00 - 23.00</p>
            <p>Sunday 09.00 - 16.00</p>
          </div>
        </div>
        <div className="row third-row">
          <div className="col">
            <div className="content">
              <div className="copyright">
                <p>&copy; 2024 Warner & Spencer</p>
              </div>
              <div className="social">
                <a>
                  <i className="bi bi-instagram"></i>
                </a>
                <a>
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a>
                  <i className="bi bi-youtube"></i>
                </a>
                <a>
                  <i className="bi bi-pinterest"></i>
                </a>
                <a>
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
