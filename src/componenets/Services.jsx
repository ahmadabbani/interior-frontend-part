import React from "react";
import service1 from "../assets/images/chair.jpg";
import service2 from "../assets/images/v2.jpg";
import service3 from "../assets/images/service3.jpg";
import service3mobile from "../assets/images/services03.jpg";
import { Link } from "react-router-dom";
function Services() {
  return (
    <section id="services">
      <h1 className="section-title d-block d-md-none">Our Services.</h1>
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-6 col-xl-5 d-flex flex-column align-items-end service-box">
            <img
              src={service1}
              className="mb-4 service-img service-img-first"
            />
            <div className="content">
              <h2>01. Furniture Design</h2>
              <p>
                We create custom furniture that combines beauty and comfort. Our
                goal is to design pieces that fit your style and needs, bringing
                a perfect balance of looks and function to your space.
              </p>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <button>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div>
            <img src={service2} className="mb-4 service-img" />
            <div className="content">
              <h2>02. Interior Design</h2>
              <p>
                We offer personalized interior design services to transform your
                space. Our approach focuses on understanding your vision and
                creating a cohesive, stylish environment that enhances both
                comfort and aesthetics
              </p>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <button>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="d-none d-xl-block col-xl-4">
            <img src={service3} className="third-service-img" />
          </div>
          <div className=" col-12 col-md-6 col-xl-3 third-service-box service-box">
            <h1 className="section-title">Our Services.</h1>
            <div className="content">
              <img
                src={service3mobile}
                className=" d-block d-xl-none mb-4 service-img "
              />
              <h2>03. Focused Rooms</h2>
              <p>
                We offer specialized design services for individual rooms like
                kitchens, bedrooms, and offices, focusing on their unique
                furniture and layout needs.
              </p>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <button>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
