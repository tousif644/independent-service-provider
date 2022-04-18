import React from "react";

const Menus = () => {
  return (
    <div>
        <h1 className="text-center my-4">Our Exclusive Menus 🍴</h1>
      <div class="row  mx-4 row-cols-1 row-cols-md-3 gy-3">
        <div class="col">
          <div class="card ">
            <div class="card-body">
              <h5 class="card-title">Private Catering 🔏</h5>
              <p class="card-text" style={{listStyle:'none'}}>
                <span className="text-danger">For this we have</span>
                <li>1.Shahi Polao / MotorShuti Polao</li>
                <li>2.Chicken Roast / Tandoori Chicken</li>
                <li>3.Duck Meat Bhuna</li>
                <li>4.Jali Kabab (Beef / Chicken)</li>
                <li>5.Jorda / Firni</li>
                <br />
                <small style={{color:"tomato"}}>Total Cost: ৳665 (per person) </small>
              </p>
              <button className="btn btn-outline-dark">Order Now</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <div class="card-body">
              <h5 class="card-title">Corporate Catering 🏢</h5>
              <p class="card-text" style={{listStyle:"none"}}>
                <span className="text-danger">For this We have:</span>
                <li>1.Plain Polao / Bhuna Khichuri</li>
                <li>2.Chicken Roast / Tandoori Chicken</li>
                <li>3.Beef Rezala / Bhuna</li>
                <li>4.Shami Kabab (Beef / Chicken)</li>
                <li>5.Borhani</li>
                <br />
                <small style={{color:"tomato"}}>Total Cost: ৳650 (per person) </small>
              </p>
              <button className="btn btn-outline-dark">Order Now</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <div class="card-body">
              <h5 class="card-title">Wedding Catering 🤵👰</h5>
              <p class="card-text" style={{listStyle:"none"}}>
               <span className="text-danger">For this we have:</span> 
                <li>1.Shahi Polao / MotorShuti Polao</li>
                <li>2.Chicken Roast / Tandoori Chicken</li>
                <li>3.Mutton Rezala</li>
                <li>4.Prawn MalaiKari / DoPiaza</li>
                <li>5.Dim Korma</li>
                <br />
                <small style={{color:"tomato"}}>Total Cost: ৳670 (per person) </small>
              </p>
              <button className="btn btn-outline-dark">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
<h1>Hello</h1>;
