import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { baseAPI } from "../../config";

import Slider from "react-slick";
import Link from "next/link";

const FeaturedNews = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div className={styles.slide}>
      <Slider {...settings}>
        {featuredNews.map((item) => {
          return (
            <div key={item._id}>
              <Link href={`/news/${item._id}`}>
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
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FeaturedNews;
