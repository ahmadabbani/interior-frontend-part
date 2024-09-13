import React from "react";
import { Link } from "react-router-dom";
function Product({ category, name, imageUrl, id }) {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
        <div className="plus">+</div>
      </Link>
      <div className="work-info d-flex flex-column align-items-center justify-content-center">
        <h3>Interior . {category}</h3>
        <h3 className="work-name">{name}</h3>
      </div>
    </div>
  );
}

export default Product;
