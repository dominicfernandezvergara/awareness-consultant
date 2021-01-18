import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import styles from "./slider-section-home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderContentOne from "./slider-content-one/slider-content-one";

// ejemplo de como importar una imagen para usarla en html
// import image from "../../images/images-slider/foto-pampitas.jpeg";

// Github : https://github.com/akiran/react-slick
// Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

function SliderSectionHome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };
  // ejemplo de como importar una imagen para usarla en html
  // const sliderItem = <img className="slider-img" src={image} alt="" />;
  const openNewWindow = (event) => {
    event.preventDefault();
    window.open("https://www.w3schools.com");
  };

  const firstImage = <SliderContentOne />;

  const secondImage = (
    <div className={styles.containerFollowUsSlider}>
      <h1 className={styles.followUstextSlider}>Follow Us!</h1>
      <div className={styles.containerFollowUsLink}>
        <Link
          className={styles.followUsLinkSlider}
          to="https://www.instagram.com/factorynine/"
          onClick={openNewWindow}
        >
          @InstagramName
        </Link>
      </div>
    </div>
  );

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {firstImage}
        {secondImage}
      </Slider>
    </div>
  );
}

export default SliderSectionHome;