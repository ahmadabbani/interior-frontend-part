import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section id="about"></section>
      <section class="about-content">
        <h2 class="section-title">About Us</h2>
        <p class="about-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          temporibus error? Eos esse vitae iusto recusandae necessitatibus
          similique laudantium voluptates, voluptas assumenda maxime repellendus
          perferendis officiis, minus, reprehenderit alias earum dolore expedita
          illo suscipit minima quo ratione dolor maiores. Nulla asperiores
          veritatis excepturi sed? Inventore!
        </p>
        <Link to="/aboutUs" style={{ textDecoration: "none" }}>
          <button class="btn">Read More</button>
        </Link>
      </section>
    </>
  );
}

export default About;
