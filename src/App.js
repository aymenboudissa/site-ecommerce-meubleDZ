import React from "react";
import Home from "./screens/Home";
import Products from "./screens/Products/Products";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Detai from "./screens/Detail/Detai";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/Detail/:id" exact element={<Detai />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
