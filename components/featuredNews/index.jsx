import React from "react";
import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { baseAPI } from "../../config";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Loader from "../skeleton";

import Link from "next/link";

const FeaturedNews = () => {
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

  if (!loading) {
    return (
      <>
        <div className={styles.featured_box}>
          <h2>ताज़ा खबरें </h2>

          <Carousel
            showThumbs="false"
            autoPlay="true"
            interval="4000"
            showStatus="false"
            infiniteLoop="true"
          >
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
          </Carousel>
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default FeaturedNews;
