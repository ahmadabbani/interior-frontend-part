import React, { useEffect } from "react";
import ProductGallery from "./ProductGallery";
import SimilarProducts from "./SimilarProducts";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function SingleProduct() {
  const { id } = useParams();
  const {
    data: productDetails,
    loading,
    error,
  } = useFetch(`/products/${id}?populate=*`);
  const product = productDetails?.attributes;

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
      <section id="description">
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
            <div className="img-container">
              <button className="back-button" onClick={handleBackClick}>
                <i className="bi bi-arrow-left-short"></i>
              </button>
              <img src={product.image.data.attributes.url} alt={product.name} />
            </div>
            <div className="desc">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
            <div className="container details">
              <div className="row  align-items-center">
                <ul className=" col-2 first-list ">
                  <li>Name</li>
                  <li>Type</li>
                  <li>Price</li>
                  <li>Material</li>
                  <li>Color</li>
                </ul>
                <ul className=" col-3 second-list ">
                  <li>{product.name}</li>
                  <li>{product.categories.data[0].attributes.title}</li>
                  <li>${product.price}</li>
                  <li>{product.material}</li>
                  <li>{product.color}</li>
                </ul>
                <div className="col-7  ">
                  <ProductGallery gallery={product.gallery} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <p style={{ fontSize: "28px", textAlign: "center" }}>
            No Product Details Available.
          </p>
        )}
      </section>
      <SimilarProducts
        category={product?.categories?.data?.[0]?.attributes?.title}
      />
    </>
  );
}

export default SingleProduct;
