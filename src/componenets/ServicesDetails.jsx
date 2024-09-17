import React, { useEffect } from "react";
import furnuture from "../assets/images/services1.jpg";
import interior from "../assets/images/services2.jpg";
import home from "../assets/images/services3.jpg";
function ServicesDetails() {
  //scroll top when visit the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="whatweoffer">
      <div className="container">
        <div className="row">
          <div className="col-12 services-title">
            <h1 className="">What We Offer</h1>
            <p>
              Our services are designed to bring comfort, style, and quality to
              your living spaces. We're committed to delivering solutions that
              meet your unique needs.
            </p>
          </div>
        </div>
        <div className="row mb-4 mb-xl-5">
          <div className="col-1 col-lg-2">
            <h3>01. Custom Furniture Design</h3>
          </div>
          <div className="col-12 col-md-5 col-lg-6  p-0 service-img">
            <img src={furnuture} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-xl-5 p-3">
            <p>
              Our Custom Furniture Design service is dedicated to creating
              unique, handcrafted furniture that fits perfectly into your space.
              Whether you need a statement piece or furniture to solve specific
              spatial challenges, we work with you to design and craft pieces
              that enhance both style and function. Every item is tailored to
              your preferences, ensuring that it complements your home’s
              aesthetics while adding a personal touch.
            </p>
          </div>
        </div>
        <div className="row mb-4 mb-xl-5">
          <div className="col-1 col-lg-2">
            <h3>02. Full Interior Design</h3>
          </div>
          <div className="col-12 col-md-5 col-lg-6 p-0 service-img">
            <img src={interior} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-xl-5 p-3">
            <p>
              Our Full Interior Design service offers a comprehensive approach
              to transforming your entire home or individual rooms. We handle
              everything from layout planning to selecting materials, colors,
              and furnishings. Whether you’re starting from scratch or
              redesigning an existing space, our goal is to create environments
              that are both beautiful and practical, reflecting your personal
              style while optimizing comfort and functionality.
            </p>
          </div>
        </div>
        <div className="row mb-4 mb-xl-5">
          <div className="col-1 col-lg-2">
            <h3>03. Room-Specific Designs</h3>
          </div>
          <div className="col-12 col-md-5 col-lg-6 p-0 service-img">
            <img src={home} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-xl-5 p-3">
            <p>
              Our Home Spaces Design service focuses on crafting specialized
              designs for key areas in your home. Whether it’s creating a
              modern, functional kitchen, a cozy and serene bedroom, or a
              stylish living room for gatherings, we offer tailored solutions
              that bring out the best in every space. We also design productive
              and inspiring offices, elegant dining rooms, and inviting
              entryways. Each area is thoughtfully crafted to enhance both
              aesthetics and usability, ensuring every corner of your home
              reflects your lifestyle and taste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesDetails;
