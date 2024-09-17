import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section id="about"></section>
      <section className="about-content">
        <h2 className="section-title">About Us</h2>
        <p className="about-p">
          With years of experience, we have built a reputation for excellence
          and reliability. Our dedicated team works hard to deliver top-quality
          service, focusing on your needs with care and attention. We are
          committed to ensuring everything we create reflects our passion for
          detail and our drive to offer personalized solutions that suit your
          style and preferences. By staying true to our values, we aim to
          continue providing exceptional experiences for all our clients,
          ensuring satisfaction in every piece we design.
        </p>
        <Link to="/aboutUs" style={{ textDecoration: "none" }}>
          <button className="btn">Read More</button>
        </Link>
      </section>
    </>
  );
}

export default About;
