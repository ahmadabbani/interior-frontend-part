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
          <div className="col-12 col-md-6 col-xl-5 d-flex flex-column align-items-end service-box border border-primary">
            <img
              src={service1}
              className="mb-4 service-img service-img-first"
            />
            <div className="content">
              <h2>01. Furniture Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt ad mollitia, temporibus deleniti ab impedit. Iure
                voluptatum quam cumque. Exercitationem?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt ad mollitia, temporibus deleniti ab impedit. Iure
                voluptatum quam cumque. Exercitationem?
              </p>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <button>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="d-none d-xl-block col-xl-4 border border-primary">
            <img src={service3} className="third-service-img" />
          </div>
          <div className=" col-12 col-md-6 col-xl-3 third-service-box service-box">
            <h1 className="section-title">Our Services.</h1>
            <div className="content">
              <img
                src={service3mobile}
                className=" d-block d-xl-none mb-4 service-img "
              />
              <h2>03. Kitchen And More</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt ad mollitia, temporibus deleniti ab impedit. Iure
                voluptatum quam cumque. Exercitationem?
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
