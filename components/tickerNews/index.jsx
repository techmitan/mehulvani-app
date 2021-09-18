import React from "react";
import styles from "./style.module.css";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AdjustIcon from "@material-ui/icons/Adjust";
// import { motion } from "framer-motion";
import { baseAPI } from "../../config";
import { useState, useEffect } from "react";
import Link from "next/link";

const TickerNews = () => {
  const [featuredNews, setFeaturedNews] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(`${baseAPI}/api/featured-news`);
      const data = await response.json();
      setFeaturedNews(data.featured);
    };

    getNews();
  }, []);
  return (
    <div className={styles.ticker_wrapper}>
      <div className={styles.news_head}>
        <div>
          <AdjustIcon style={{ color: "red", marginRight: "5px" }} />
        </div>
        Breaking News
      </div>
      <div className={styles.news_items}>
        {featuredNews.map((news) => {
          return (
            <Link href={`/news/${news._id}`} key={news._id}>
              <a>
                <div className={styles.news_item}>
                  <TrendingUpIcon />
                  <p>{news.title}</p>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TickerNews;
