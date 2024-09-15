import React, { useEffect } from "react";
import ourstory from "../assets/images/v3.jpg";
import ourvalues from "../assets/images/deconovo-uKBSq6O1BMw-unsplash.jpg";
import ourpocess from "../assets/images/process.jpg";
function AboutUs() {
  //scroll top when visit the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="aboutus">
      <div className="container">
        <div className="row">
          <div className="col-12 aboutus-title">
            <h1 className="">About Us</h1>
          </div>
        </div>
        <div className="row mb-xl-0 mb-5">
          <div className="col-12 col-xl-6 p-0">
            <div className="ourstory ">
              <h2>
                Our Vision <i className="bi bi-arrow-right"></i>
              </h2>
              <p>
                Our vision is to redefine modern living by creating innovative,
                functional spaces that enhance comfort and aesthetics. We aim to
                lead the industry in sustainable design practices, combining
                cutting-edge technology with timeless craftsmanship to deliver
                interiors that reflect our clients' unique style and needs. We
                strive to push the boundaries of creativity while ensuring
                durability and efficiency in every project. Our goal is to be a
                trusted partner for clients, providing solutions that elevate
                their everyday living experience.
              </p>
            </div>
          </div>
          <div className="col-12 col-xl-6 p-0">
            <div className="ourstory-img">
              <img src={ourstory} />
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-xl-6 p-0">
            <div className="ourvision-img">
              <img src={ourvalues} />
            </div>
          </div>
          <div className="col-12 col-xl-6 p-0">
            <div className=" ourvision ">
              <h2>
                Our Values <i className="bi bi-arrow-right"></i>
              </h2>
              <ul>
                <li>
                  Quality craftsmanship in every product.<span>01</span>
                </li>
                <li>
                  Durable design for long-term comfort.
                  <span>02</span>
                </li>
                <li>
                  Sustainable materials for eco-friendly solutions.
                  <span>03</span>
                </li>
                <li>
                  Collaborative approach to meet client expectations.
                  <span>04</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <div className=" ourprocess ">
              <h2>
                Our Process <i className="bi bi-arrow-right"></i>
              </h2>
              <p>
                Our process begins with sourcing high-quality, sustainable
                materials from trusted suppliers. These materials are carefully
                inspected and stored in optimal conditions to maintain their
                integrity. Once selected, our team uses precise techniques and
                advanced machinery to craft each piece, ensuring durability and
                accuracy. Every step, from cutting to assembly, is carefully
                managed to meet our rigorous quality standards before final
                delivery and installation.
              </p>
            </div>
          </div>
          <div className="col-12 p-0">
            <div className="ourprocess-img">
              <img src={ourpocess} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
