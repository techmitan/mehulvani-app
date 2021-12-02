import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { baseAPI } from "../../config";

import Slider from "react-slick";
import Link from "next/link";

const FeaturedNews = () => {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 500,
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

{
  /* <Link href="/">
          <a>
            <img
              src="https://images.indianexpress.com/2021/11/parliament-6.jpg"
              alt="headlines-one"
            />
            <div className={styles.headline}>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                ex?
              </h1>
            </div>
          </a>
        </Link> */
}
