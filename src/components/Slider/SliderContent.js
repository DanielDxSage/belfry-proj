import React from "react";
import { Link } from "react-router-dom";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="textCon">
            <h2 className="slide-title">{slide.title}</h2>
            <h3 className="slide-text">{slide.description}</h3>
            <Link to="/Open-Account">
              <button class="btn btn-primary">Get Started</button>
            </Link>
            
          </div>
          
          
        </div>
      ))}
    </section>
  );
}

export default SliderContent;