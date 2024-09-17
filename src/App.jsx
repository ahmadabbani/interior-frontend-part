import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./componenets/Products";
import ProductsSection from "./componenets/ProductsSection";
import SingleProduct from "./componenets/SingleProduct";
import useFetch from "./hooks/useFetch";
import { useState } from "react";
import Categories from "./componenets/Categories";
import AllProducts from "./componenets/AllProducts";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Services from "./componenets/Services";
import About from "./componenets/About";
import Home from "./componenets/Home";
import Clients from "./componenets/Clients";
import ContactUs from "./componenets/ContactUs";
import AboutUs from "./componenets/AboutUs";
import ServicesDetails from "./componenets/ServicesDetails";
import Values from "./componenets/Values";
import ProductDetails from "./componenets/ProductDetails";

function App() {
  const [selectedCategorie, setSelectedCategorie] = useState("all");
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useFetch("/products?populate=*");

  const {
    data: categories,
    loading,
    error,
  } = useFetch("/categories?populate=*");
  return (
    <Router>
      <>
        <Header categories={categories} loading={loading} error={error} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Clients />
                <About />
                <Services />
                <Categories />
                <Products
                  selectedCategorie={selectedCategorie}
                  setSelectedCategorie={setSelectedCategorie}
                  products={products}
                  productsLoading={productsLoading}
                  productsError={productsError}
                />
                <Values />
              </>
            }
          />
          <Route
            path="/allProducts"
            element={
              <AllProducts
                selectedCategorie={selectedCategorie}
                setSelectedCategorie={setSelectedCategorie}
                products={products}
                productsLoading={productsLoading}
                productsError={productsError}
              />
            }
          />
          {/* Dynamic route for product details */}
          <Route path="/products/:id" element={<SingleProduct />} />
          {/* test */}
          <Route path="/product_details/:id" element={<ProductDetails />} />
          {/* Dynamic route for categorized products */}
          <Route path="/category/:title" element={<ProductsSection />} />
          <Route path="/services" element={<ServicesDetails />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
