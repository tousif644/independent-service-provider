import React from "react";

const Menus = () => {
  return (
    <div>
      <div class="row  mx-4 row-cols-1 row-cols-md-3 gy-3">
        <div class="col">
          <div class="card ">
            <div class="card-body">
              <h5 class="card-title">Private Catering</h5>
              <p class="card-text">
                Life is full of occasions and celebrations. Scrumptious food
                makes these events long-lasting. YES, we proudly deliver super
                delicious food and fabulous service.
              </p>
              <button className="btn btn-outline-danger">Order Now</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <div class="card-body">
              <h5 class="card-title">Corporate Catering</h5>
              <p class="card-text">
                <span>For this We have:</span>
                <li>1.Plain Polao / Bhuna Khichuri</li>
                <li>2.Chicken Roast / Tandoori Chicken</li>
                <li>3.Beef Rezala / Bhuna</li>
                <li>4.Shami Kabab (Beef / Chicken)</li>
                <li>5.Borhani</li>
              </p>
              <button className="btn btn-outline-danger">Read More</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <div class="card-body">
              <h5 class="card-title">Wedding Catering</h5>
              <p class="card-text" style={{listStyle:"none"}}>
               <span className="text-danger">For this we have:</span> 
                <li>1.Shahi Polao / MotorShuti Polao</li>
                <li>2.Chicken Roast / Tandoori Chicken</li>
                <li>3.Mutton Rezala</li>
                <li>4.Prawn MalaiKari / DoPiaza</li>
              </p>
              <button className="btn btn-outline-danger">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
<h1>Hello</h1>;
