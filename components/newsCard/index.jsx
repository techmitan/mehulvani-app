import React from "react";
import styles from "./style.module.scss";
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
              <Link href={`/news/${article._id}`}>
                <a>
                  <div className={styles.news_row}>
                    <div className={styles.news_heading}>
                      <a>
                        <h3>{article.title}</h3>
                      </a>
                    </div>

                    <div className={styles.news_image}>
                      {/* <img
                        src="https://images.news18.com/ibnlive/uploads/2019/09/news18-home-og.jpg"
                        alt="headlines-one"
                      /> */}
                      <img src={article.imageUrl} alt="news" />
                    </div>
                  </div>
                </a>
              </Link>
              <div className={styles.news_meta}>
                <div>{moment(article.published_date).format("LL")}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsCard;
