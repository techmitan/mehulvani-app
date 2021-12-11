import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { baseAPI } from "../../config";

import Slider from "react-slick";
import Link from "next/link";

const FeaturedNews = () => {
  const CustomPrevArrow = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIosIcon style={{ color: "white", fontSize: "20px" }} />
      </div>
    );
  };

  const CustomNextArrow = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIosIcon style={{ color: "white", fontSize: "20px" }} />
      </div>
    );
  };
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const [featuredNews, setFeaturedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(`${baseAPI}/api/featured-news`);
      const data = await response.json();
      setFeaturedNews(data.featured);
      setLoading(false);
    };

    getNews();
  }, []);
  return (
    <div className={`${styles.slide} customSlider`}>
      <Slider {...settings}>
        {featuredNews.map((item) => {
          return (
            <div key={item._id} className="">
              <Link href={`/news/${item._id}`}>
                <a>
                  <img src={item.imageUrl} alt="featured-news" />
                  <div className={styles.headline}>
                    <h1>{item.title}</h1>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FeaturedNews;
