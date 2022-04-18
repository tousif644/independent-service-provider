import React from "react";
import rated_1 from "../../../Images/rated-recipes/1.png";
import rated_2 from "../../../Images/rated-recipes/2.png";
const Product = () => {
  return (
    <div>
      <div class="row  mx-4 row-cols-1 row-cols-md-3 gy-3">
        <div class="col">
          <div class="card ">
            <img
              src={rated_1}
              class="card-img-top my-3 me-auto mx-auto"
              alt="..."
              style={{ width: "40%" }}
            />
            <div class="card-body">
              <h5 class="card-title">Bread & Bun</h5>
              <p class="card-text">
                Bread Buns are typically small, round breads, which can be
                flavoured with an array of ingredients. They have a dome shape
                and a flat bottom, and a light brown crust is visible on the
                dome.
              </p>
              <button className="btn btn-outline-danger">Read More</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <img
              src={rated_2}
              class="card-img-top me-auto mx-auto my-3"
              alt="..."
              style={{ width: "60%" }}
            />
            <div class="card-body">
              <h5 class="card-title">Muffin</h5>
              <p class="card-text">
                Muffins are single-serving quick breads, which rise with the
                help of baking soda or baking powder and eggs instead of yeast.
                They tend to be sweet and somewhat moist, but heavier than a
                cake or cupcake.
              </p>
              <button className="btn btn-outline-danger">Read More</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <img
              src={rated_2}
              class="card-img-top mx-auto my-3"
              alt="..."
              style={{ width: "60%" }}
            />
            <div class="card-body">
              <h5 class="card-title">Muffin</h5>
              <p class="card-text">
                Muffins are single-serving quick breads, which rise with the
                help of baking soda or baking powder and eggs instead of yeast.
                They tend to be sweet and somewhat moist, but heavier than a
                cake or cupcake.
              </p>
              <button className="btn btn-outline-danger">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
