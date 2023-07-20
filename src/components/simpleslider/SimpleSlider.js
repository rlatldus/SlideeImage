import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "../box/Box.js";
import "./slider.scss";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <Box />
        </div>
        <div>
          <Box />
        </div>
        <div>
          <Box />
        </div>
        <div>
          <Box />
        </div>
        <div>
          <Box />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
