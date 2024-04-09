import React from "react";
import Navbar from "../features/Navbar";
import ProductList from "../features/product/Components/ProductList";

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList />
      </Navbar>
    </div>
  );
};

export default Home;
