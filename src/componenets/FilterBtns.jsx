import React from "react";

function FilterBtns({
  loading,
  error,
  categories,
  selectedCategorie,
  setSelectedCategorie,
}) {
  return (
    <div className="container container-fluid">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center filter">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : categories.length > 0 ? (
            <>
              {/* Default "All" button */}
              <button
                className={`filter-btns ${
                  selectedCategorie === "all" ? "bold" : ""
                }`}
                onClick={() => setSelectedCategorie("all")}
              >
                All
              </button>
              {/* Map through the categories */}
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`filter-btns ${
                    selectedCategorie === category.attributes.title
                      ? "bold"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedCategorie(category.attributes.title)
                  }
                >
                  {category.attributes.title}
                </button>
              ))}
            </>
          ) : (
            <p>No categories available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterBtns;
