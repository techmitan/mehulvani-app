import React from "react";
import styles from "./style.module.css";
// import Share from "../share";
import moment from "moment";
import Link from "next/link";

const NewsCard = ({ news, category }) => {
  return (
    <>
      <div className={styles.news_card}>
        {category && (
          <div className={styles.category_title}>
            <h3>{category.title}</h3>
            <Link href={`/categories/${category.title}/${category._id}`}>
              <a>और पढ़ें...</a>
            </Link>
          </div>
        )}

        {news.map((article) => {
          return (
            <div className={styles.news_item} key={article._id}>
              <div className={styles.news_row}>
                <div className={styles.news_heading}>
                  <Link href={`/news/${article._id}`}>
                    <a>
                      <h3>{article.title}</h3>
                    </a>
                  </Link>
                </div>

                <div className={styles.news_image}>
                  <img src={article.imageUrl} alt="news" />
                </div>
              </div>

              <div className={styles.news_meta}>
                <div>{moment(article.published_date).format("LL")}</div>
                <div>{/* <Share /> */}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsCard;
