import React, { useState } from "react";
import hero1 from "../assets/images/hero-left.jpg";
import hero2 from "../assets/images/hero-right.jpg";
import hero2mobile from "../assets/images/services1.jpg";
function Home() {
  const [loaded, setLoaded] = useState(false);
  const [loadedTwo, setLoadedTwo] = useState(false);
  return (
    <section id="hero">
      <div className=" container">
        <div className="row">
          <div className="d-none col-md-2 d-md-block left-img p-0 m-0">
            <img
              src={hero1}
              className={loaded ? "loaded" : ""}
              onLoad={() => setLoaded(true)} // Set loaded state to true once the image is loaded
            />
          </div>
          <div className="col-12 col-md-5 order-md-1 order-2 text">
            <div className="divider d-none d-md-block"></div>
            <h1 className="main-title">Warner &</h1>
            <h1 className="hero-sc-title">Spencer</h1>
            <p className="hero-p">Luxury and Art Meet Design</p>
          </div>
          <div className="col-12 col-md-5 order-md-2 order-1 m-0 p-0 hero-third-block">
            <div className="sc-divider d-none d-md-block"></div>
            <div className="second-image">
              <picture>
                <source media="(max-width: 768px)" srcSet={hero2mobile} />
                <img
                  src={hero2}
                  className={`hero-right-img ${loadedTwo ? "loaded" : ""}`}
                  onLoad={() => setLoadedTwo(true)}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
