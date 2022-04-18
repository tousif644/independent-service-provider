import React from "react";

const Services = () => {
  return (
    <div>
      <div class="row  mx-4 row-cols-1 row-cols-md-3 gy-3">
        <div class="col">
          <div class="card ">
            <img
              src=""
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
              src=""
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
              src=""
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

export default Services;
