import React from "react";
import Banner from "./Banner/Banner";
import Product from "./Product/Product";
import Services from './../Services/Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="cotnainer text-center my-3">
        <h1 className="my-5 text-capitalize">My top rated Recipes</h1>
        <Product></Product>
        <h1 className="my-5 text-capitalize">My Services</h1>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
