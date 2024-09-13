import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
function Categories() {
  const {
    data: categoriesResponse,
    loading,
    error,
  } = useFetch("/categories?populate=*");
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categories = categoriesResponse || [];

  const activeCategory = categories[activeCategoryIndex]?.attributes;
  console.log("ss", activeCategory);
  return (
    <section id="wt-we-do">
      <h1 className="section-title">What We Do.</h1>
      <div className="container container-fluid">
        <div className="row">
          <div className="col-10 catg-desc">
            {loading ? (
              <div className="loading-catg-img"> </div>
            ) : error ? (
              <p style={{ textAlign: "center" }}>Error: {error.message}</p>
            ) : categories.length > 0 ? (
              <>
                {/* Show the main image of the active category */}
                <img
                  src={activeCategory?.image?.data?.attributes?.url}
                  alt={activeCategory?.title}
                />
                <div className="catg-text">
                  {/* Show the description of the active category */}
                  <p>{activeCategory?.description}</p>
                  <Link
                    to={`/category/${encodeURIComponent(
                      activeCategory?.title
                    )}`}
                    style={{ textDecoration: "none" }}
                  >
                    <button className="btn">DISCOVER</button>
                  </Link>
                </div>
              </>
            ) : (
              <div className="loading-catg-img"> </div>
            )}
          </div>

          <div className="col-2 d-flex flex-column thumbs gap-3 align-items-center">
            {/* Render thumbnail images */}
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <img
                  key={category.id}
                  src={
                    category.attributes.image.data.attributes.formats.thumbnail
                      .url
                  }
                  alt={category.attributes.title}
                  className={index === activeCategoryIndex ? "active" : ""}
                  onClick={() => setActiveCategoryIndex(index)}
                />
              ))
            ) : (
              <>
                <div> </div>
                <div> </div>
                <div> </div>
              </>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col catgs">
            {/* Render category titles */}
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <h4
                  key={category.id}
                  onClick={() => setActiveCategoryIndex(index)}
                  className={index === activeCategoryIndex ? "active" : ""}
                >
                  {category.attributes.title} <i class="bi bi-arrow-right"></i>
                </h4>
              ))
            ) : (
              <>
                <h4 className="catg-title-loading">Loading..</h4>
                <h4 className="catg-title-loading">Loading..</h4>
                <h4 className="catg-title-loading">Loading..</h4>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
