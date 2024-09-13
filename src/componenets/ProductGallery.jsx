import React, { useEffect } from "react";
import { Carousel } from "bootstrap"; // Import the specific Carousel component

const ProductGallery = ({ gallery }) => {
  useEffect(() => {
    const carouselElement = document.querySelector("#imageSlider");
    const carousel = new Carousel(carouselElement, {
      interval: 2000, // Adjust the interval time as needed
      ride: "carousel",
    });

    // Cleanup if necessary
    return () => {
      carousel.dispose();
    };
  }, []);

  // Ensure gallery.data exists and is an array
  const images = gallery?.data || [];

  return (
    <div id="imageSlider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div
              key={image.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={image.attributes.formats.medium.url}
                className="d-block w-100"
                alt={image.attributes.name || "Image"}
              />
            </div>
          ))
        ) : (
          <div className="carousel-item active">
            <div className="d-block w-100 text-center">
              <p>No images available</p>
            </div>
          </div>
        )}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#imageSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#imageSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ProductGallery;
