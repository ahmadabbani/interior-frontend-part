import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import SimilarProducts from "./SimilarProducts";

function ProductDetails() {
  const { id } = useParams();
  const {
    data: productDetails,
    loading,
    error,
  } = useFetch(`/products/${id}?populate=*`);
  const [activeImageIndex, setActiveImageIndex] = useState("origin");
  const product = productDetails?.attributes;
  const activeImage =
    activeImageIndex === "origin"
      ? product?.image?.data?.attributes?.formats?.small.url
      : product?.gallery?.data[activeImageIndex]?.attributes?.formats?.small
          .url;
  // scroll top when click on similar product
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <>
      <section id="SingleProduct">
        {loading ? (
          <p
            style={{
              fontSize: "28px",
              textAlign: "center",
              paddingTop: "25px",
            }}
          >
            Loading...
          </p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : product ? (
          <>
            <div className="container">
              <div className="row">
                <button className="back-button" onClick={handleBackClick}>
                  <i className="bi bi-arrow-left-short"></i>
                </button>
                <div className="col-12 col-md-6 order-md-1 order-2">
                  <div className="product-gallery">
                    <div className="main-img-container">
                      <img
                        src={activeImage}
                        alt={product.name}
                        className="main-image"
                      />
                    </div>
                    <div className=" thumbnails align-items-center d-flex">
                      {/*thumbnail images */}
                      <img
                        key={product?.id}
                        className="thumbnail"
                        src={
                          product?.image?.data?.attributes?.formats?.thumbnail
                            .url
                        }
                        alt={product?.name}
                        onClick={() => setActiveImageIndex("origin")} // assuming you want to set the clicked image as active
                        style={{ cursor: "pointer" }}
                      />
                      {product?.gallery?.data?.map((image, index) => (
                        <img
                          key={image?.id}
                          className="thumbnail"
                          src={image?.attributes.formats.thumbnail.url}
                          alt={`Thumbnail ${index}`}
                          onClick={() => setActiveImageIndex(index)} // assuming you want to set the clicked image as active
                          style={{ cursor: "pointer" }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 order-md-2 order-1">
                  <div className="product-details">
                    <div className="product-title">
                      <h1>{product.name}</h1>
                      <span>${product.price}</span>
                    </div>
                    <p className="product-description">{product.description}</p>
                    <div className="product-infos">
                      <span>
                        {" "}
                        <span class="material-symbols-outlined">
                          check_circle
                        </span>
                        For {product.categories.data[0].attributes.title}
                      </span>
                      <span>
                        <span class="material-symbols-outlined">
                          check_circle
                        </span>
                        Made of {product.material}
                      </span>
                      <span>
                        {" "}
                        <span class="material-symbols-outlined">
                          check_circle
                        </span>
                        Available in {product.color}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p style={{ fontSize: "28px", textAlign: "center" }}>
            No Details Available.
          </p>
        )}
      </section>
      <SimilarProducts
        category={product?.categories?.data?.[0]?.attributes?.title}
      />
    </>
  );
}

export default ProductDetails;
