import React from "react";
import privateCatering from "../../Images/Catering/private-catering.jpg";
import weddingCatering from "../../Images/Catering/wedding-catering-services-1.jpg";
import corporateCatering from "../../Images/Catering/corporate-catering.jpg";
import { useNavigate } from 'react-router-dom';
const Services = () => {

    const navigate = useNavigate();
    // navigate to Menu Choosing
    const handleChoosingMenu =() => {
        navigate('/menus')
    }
  return (
    <div>
      <div class="row  mx-4 row-cols-1 row-cols-md-3 gy-3">
        <div class="col">
          <div class="card ">
            <img
              src={privateCatering}
              class="card-img-top me-auto mx-auto"
              alt="..."
              style={{ width: "" }}
            />
            <div class="card-body">
              <h5 class="card-title">Private Catering</h5>
              <p class="card-text">
                Life is full of occasions and celebrations. Scrumptious food
                makes these events long-lasting. YES, we proudly deliver super
                delicious food and fabulous service.
              </p>
                <small style={{color:"tomato"}}>Total Cost: ৳665 (per person) <br /><br /></small>
              <button onClick={handleChoosingMenu} className="btn btn-outline-danger">Read More</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <img
              src={weddingCatering}
              class="card-img-top me-auto mx-auto"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Corporate Catering</h5>
              <p class="card-text">
                From made-to-order foods to flawless service, we are the expert
                in making your next corporate event – small or large – a
                delicious success.
              </p>
              <small style={{color:"tomato"}}>Total Cost: ৳650 (per person) <br /><br /></small>
              <button onClick={handleChoosingMenu} className="btn btn-outline-danger">Read More</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card ">
            <img
              src={corporateCatering}
              class="card-img-top mx-auto"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Wedding Catering</h5>
              <p class="card-text">
                In such auspicious moments, you want to treat your loved ones
                with truly delicious food that they will remember for long. Our
                food with innovative menus will meet and exceed your
                expectation.
              </p>
              <small style={{color:"tomato"}}>Total Cost: ৳670 (per person) <br /><br /></small>
              <button onClick={handleChoosingMenu} className="btn btn-outline-danger">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
