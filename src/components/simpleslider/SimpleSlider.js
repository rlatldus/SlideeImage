import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slider.scss";

const SimpleSlider = ({ setting, children }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
     slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const mergedSettings = { ...defaultSettings, ...setting };

  return (
    <div>
      <Slider {...mergedSettings}>{children}</Slider>
    </div>
  );
};

export default SimpleSlider;