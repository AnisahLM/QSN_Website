import React, { useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import { loginWithToken, fetchProducts } from "../store";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const { auth } = useSelector((state) => state);
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
      </Routes>
    </div>
  );
};

export default App;
