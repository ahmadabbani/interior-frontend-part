import ProductsList from "./ProductsList";
import FilterBtns from "./FilterBtns";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Products({
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

  // Limit the number of items to 5
  const limitedProducts = products.slice(0, 7);
  return (
    <section id="works" className="works">
      <div className="container container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-between align-items-center">
            <div>
              <h1 className="section-title">Latest Works.</h1>
            </div>
            <div className="d-sm-block d-none">
              <Link to="/allProducts" style={{ textDecoration: "none" }}>
                <button className="btn">View All</button>
              </Link>
            </div>
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
        products={limitedProducts}
        loading={productsLoading}
        error={productsError}
        selectedCategorie={selectedCategorie}
      />
      <div className="d-sm-none d-flex  justify-content-center mt-5 ">
        <Link to="/allProducts" style={{ textDecoration: "none" }}>
          <button className="btn">View All</button>
        </Link>
      </div>
    </section>
  );
}

export default Products;
