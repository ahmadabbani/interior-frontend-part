import React, { useState } from "react";
import hero1 from "../assets/images/hero-left.jpg";
import hero2 from "../assets/images/hero-right.jpg";
function Home() {
  const [loaded, setLoaded] = useState(false);
  const [loadedTwo, setLoadedTwo] = useState(false);
  return (
    <section id="hero">
      <div className="container-fluid container">
        <div className="row">
          <div className="col-md-2 d-lg-block d-none left-img">
            <img
              src={hero1}
              className={loaded ? "loaded" : ""}
              onLoad={() => setLoaded(true)} // Set loaded state to true once the image is loaded
            />
          </div>
          <div className="col-12 col-md-6 col-lg-5 order-md-1 order-2">
            <div className="divider d-none d-md-block"></div>
            <h1 className="main-title">Warner &</h1>
            <h1 className="hero-sc-title">Spencer</h1>
            <p className="hero-p">Luxury and Art Meet Design</p>
          </div>
          <div className="col-12 col-md-6 col-lg-5 order-md-2 order-1 hero-third-block">
            <div className="sc-divider"></div>
            <img
              src={hero2}
              className={`hero-right-img ${loadedTwo ? "loaded" : ""}`}
              onLoad={() => setLoadedTwo(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
