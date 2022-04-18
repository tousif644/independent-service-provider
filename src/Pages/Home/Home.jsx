import React from "react";
import Banner from "./Banner/Banner";
import Product from "./Product/Product";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="cotnainer text-center my-3">
        <h1 className="my-5 text-capitalize">My top rated Recipes</h1>
        <Product></Product>
      </div>
    </div>
  );
};

export default Home;
