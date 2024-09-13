import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import FilterBtns from "./FilterBtns";
import ProductsList from "./ProductsList";
import { useNavigate } from "react-router-dom";

function AllProducts({
  selectedCategorie,
  setSelectedCategorie,
  products,
  productsLoading,
  productsError,
}) {
  const {
    data: categories,
    loading,
    error,
  } = useFetch("/categories?populate=*");

  //scroll top when visit the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <section id="allProducts" className="works">
      <div className="container container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-between align-items-center all-prds-relative">
            <div>
              <h1 className="section-title">All Works.</h1>
            </div>
            <button className="back-button" onClick={handleBackClick}>
              <i className="bi bi-arrow-left-short"></i>
            </button>
          </div>
        </div>
      </div>
      <FilterBtns
        loading={loading}
        error={error}
        categories={categories}
        selectedCategorie={selectedCategorie}
        setSelectedCategorie={setSelectedCategorie}
      />
      <ProductsList
        products={products}
        loading={productsLoading}
        error={productsError}
        selectedCategorie={selectedCategorie}
      />
    </section>
  );
}

export default AllProducts;
