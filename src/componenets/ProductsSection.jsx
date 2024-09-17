import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Product from "./Product";

function ProductsSection() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const {
    data: products,
    loading,
    error,
  } = useFetch(
    `/products?filters[categories][title][$eq]=${decodedTitle}&populate[image]=*&populate[categories][populate]=*`
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <>
      <section id="productsSection">
        {loading ? (
          <p style={{ fontSize: "28px", textAlign: "center" }}>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : products.length > 0 ? (
          <>
            <div className="container">
              <div className="row section-desc">
                <button className="back-button" onClick={handleBackClick}>
                  <i className="bi bi-arrow-left-short"></i>
                </button>
                <div className="col-12 col-sm-6">
                  <h1 className="section-title">{decodedTitle}</h1>
                  <p>
                    {" "}
                    {
                      products[0]?.attributes.categories.data[0]?.attributes
                        .description
                    }
                  </p>
                </div>
                <div className="col-12 col-sm-6">
                  <img
                    src={
                      products[0]?.attributes.categories.data[0]?.attributes
                        .image.data?.attributes.formats.large.url
                    }
                    alt={decodedTitle}
                  />
                </div>
              </div>
            </div>
            {/*list of products */}
            <div className="container container-fluid items">
              <div className="row items-row">
                <div className="col-1">
                  <h2 className="section-title second-title">{decodedTitle}</h2>
                </div>
                <div className="col-11 d-flex flex-wrap">
                  {" "}
                  {products.map((product, index) => (
                    <Product
                      key={index}
                      imageUrl={
                        product.attributes.image.data.attributes.formats.medium
                          .url
                      }
                      category={
                        product.attributes.categories.data[0].attributes.title
                      }
                      name={product.attributes.name}
                      id={product.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <p style={{ fontSize: "28px", textAlign: "center" }}>
            {`Nothing Found in ${decodedTitle}`}.
          </p>
        )}
      </section>
    </>
  );
}

export default ProductsSection;
