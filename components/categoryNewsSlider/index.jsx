import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { baseAPI } from "../../config";

import Slider from "react-slick";
import Link from "next/link";

const CategoryNewsSlider = () => {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 500,
  };

  const [featuredNews, setFeaturedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  let array = [1, 2, 3, 4, 5, 6, 7];
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
    <div className={styles.slide}>
      <Slider {...settings}>
        {/* {featuredNews.map((item) => {
          return (
            <div key={item._id}> */}
        {/* <Link href={`/news/${item._id}`}>
                <a>
                  <img
                    src={item.imageUrl}
                    alt="featured-news"
                    className={styles.fImage}
                  />
                  <div className={styles.featured_news}>
                    <h1>{item.title}</h1>
                  </div>
                </a>
              </Link> */}

        {array.map((item) => {
          return (
            <Link href="/" key={item}>
              <a>
                <div className={styles.slide_card}>
                  <img
                    src="https://images.news18.com/ibnlive/uploads/2019/09/news18-home-og.jpg"
                    alt="headlines-one"
                  />
                  <h3 className={styles.headline}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro, ex?
                  </h3>
                </div>
              </a>
            </Link>
          );
        })}

        {/* </div> */}
        {/* );
        })} */}
      </Slider>
    </div>
  );
};

export default CategoryNewsSlider;
