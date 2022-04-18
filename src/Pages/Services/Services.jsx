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
              <h5 class="card-title">Private Catering</h5>
              <p class="card-text">
                Life is full of occasions and celebrations. Scrumptious food
                makes these events long-lasting. YES, we proudly deliver super
                delicious food and fabulous service.
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
              <h5 class="card-title">Corporate Catering</h5>
              <p class="card-text">
                From made-to-order foods to flawless service, we are the expert
                in making your next corporate event – small or large – a
                delicious success.
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
              <h5 class="card-title">Wedding Catering</h5>
              <p class="card-text">
                In such auspicious moments, you want to treat your loved ones
                with truly delicious food that they will remember for long. Our
                food with innovative menus will meet and exceed your
                expectation.
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
