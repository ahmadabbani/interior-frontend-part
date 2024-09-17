import React, { useEffect } from "react";

function ContactUs() {
  //scroll top when visit the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="contactUs">
      <div className="container">
        <div className="row">
          <div className="col-12 contactus-title">
            <h1 className="">Contact Us</h1>
            <p>
              Feel free to contact us for any inquiries or support. We're
              dedicated to helping you find the perfect solutions to enhance
              your space.
            </p>
          </div>
        </div>
        <div className="row ps-5 pe-5 align-items-center g-5">
          <div className="col-12 col-lg-7">
            <div className="form-container">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="newsletter">
              <h3>Our Newsletters</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus magni ad doloribus nemo laborum. Distinctio! Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <form>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <button type="submit" className="subscribe-btn">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row infos ps-5 pe-5  justify-content-center g-4 align-items-center">
          <div className="col-12 d-flex justify-content-between info-container">
            <div className=" info me-4">
              <p>
                <i className="bi bi-telephone"></i>+961 79 187 561
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi, porro.
              </p>
            </div>
            <div className=" info me-4">
              <p>
                <i className="bi bi-envelope"></i>info@analytics-expertise.com
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi, porro.
              </p>
            </div>
            <div className=" info ">
              <p>
                <i className="bi bi-geo-alt"></i>Maten-Dekweneh, Beirut
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi, porro.
              </p>
            </div>
          </div>
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.647399410386!2d35.4993588753382!3d33.89873376664141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f16e6436961d3%3A0x7fa33f675cb5e821!2sBeirut%20Souks!5e0!3m2!1sen!2slb!4v1725824979737!5m2!1sen!2slb"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
