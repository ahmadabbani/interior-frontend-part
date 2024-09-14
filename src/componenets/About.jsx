import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section id="about"></section>
      <section className="about-content">
        <h2 className="section-title">About Us</h2>
        <p className="about-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          temporibus error? Eos esse vitae iusto recusandae necessitatibus
          similique laudantium voluptates, voluptas assumenda maxime repellendus
          perferendis officiis, minus, reprehenderit alias earum dolore expedita
          illo suscipit minima quo ratione dolor maiores. Nulla asperiores
          veritatis excepturi sed? Inventore!
        </p>
        <Link to="/aboutUs" style={{ textDecoration: "none" }}>
          <button className="btn">Read More</button>
        </Link>
      </section>
    </>
  );
}

export default About;
