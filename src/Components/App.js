import React, { useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav/Nav";
import AboutUs from "./AboutUs";
import Products from "./Products/Products";
import Product from "./Products/Product";
import { useSelector, useDispatch } from "react-redux";
import { loginWithToken, fetchProducts } from "../store";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const { auth, products } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginWithToken());
    dispatch(fetchProducts);
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
