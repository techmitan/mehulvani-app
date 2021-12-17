import React from "react";
import styles from "./style.module.scss";
import moment from "moment";
import Link from "next/link";

const NewsCard = ({ news, category }) => {
  return (
    <>
      <div>
        {category && (
          <div className="border-b-4 px-2 pb-1 border-red-600 font-bold">
            <span className="text-2xl text-black">{category.title}</span>
          </div>
        )}

        {news.map((article) => {
          return (
            <Link href={`/news/${article._id}`} key={article._id}>
              <a>
                <div className="border-b-2 p-2 bg-slate-50">
                  <div className="flex items-center justify-between ">
                    <h2 className="w-3/4">{article.title}</h2>
                    <div className="w-1/4">
                      <img
                        className="w-28 aspect-video"
                        src={article.imageUrl}
                        alt="news-image"
                      />
                    </div>
                  </div>
                  <div className="text-sm">
                    {moment(article.published_date).format("ll")}
                  </div>
                </div>
              </a>
            </Link>
          );
        })}

        {category && (
          <div className="flex justify-center my-2">
            <Link href={`/categories/${category.title}/${category._id}`}>
              <a>
                <button className="text-red-600 border-red-500 border-2 py-1 px-4 rounded-xl">
                  और भी पढ़ें...
                </button>
              </a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsCard;
