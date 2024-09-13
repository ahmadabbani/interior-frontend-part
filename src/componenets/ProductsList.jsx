import React from "react";
import Product from "./Product";
import ProductLoading from "./ProductLoading";

function ProductsList({ selectedCategorie, products, loading, error }) {
  const filteredProducts =
    selectedCategorie === "all"
      ? products
      : products.filter((product) =>
          product.attributes.categories.data.some(
            (cat) => cat.attributes.title === selectedCategorie
          )
        );

  return (
    <div className="container container-fluid items">
      <div className="row">
        <div className="col d-flex flex-wrap">
          {loading ? (
            // Render the ProductLoading component for each product while loading
            [...Array(4)].map((_, index) => <ProductLoading key={index} />)
          ) : error ? (
            // Render the error message if an error occurs
            <p
              style={{ textAlign: "center", fontWeight: "700", width: "100%" }}
            >
              Error: {error.message}
            </p>
          ) : filteredProducts.length > 0 ? (
            // Render the Product component for each product once loading is complete and no error
            filteredProducts.map((product, index) => (
              <Product
                key={index}
                imageUrl={
                  product.attributes.image.data.attributes.formats.medium.url
                }
                category={
                  product.attributes.categories.data[0].attributes.title
                }
                name={product.attributes.name}
                id={product.id}
              />
            ))
          ) : (
            // Render the "No products available" message if the product list is empty
            <p
              style={{ textAlign: "center", fontWeight: "700", width: "100%" }}
            >
              No products available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
