import React from "react";
import useFetch from "../hooks/useFetch";
import Product from "./Product";

function SimilarProducts({ category }) {
  const {
    data: products,
    loading,
    error,
  } = useFetch(
    `/products?filters[categories][title][$eq]=${category}&populate=*`
  );

  return (
    <section id="similar">
      <h1 className="section-title">Similar Works.</h1>
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-wrap">
            {loading ? (
              <p style={{ fontSize: "28px", textAlign: "center" }}>
                Loading...
              </p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : products.length > 0 ? (
              products.map((product) => (
                <Product
                  key={product.id}
                  name={product.attributes.name}
                  imageUrl={
                    product.attributes.image.data.attributes.formats.medium.url
                  }
                  category={category}
                  id={product.id}
                />
              ))
            ) : (
              <p style={{ fontSize: "28px", textAlign: "center" }}>
                No Similar Products found.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimilarProducts;
