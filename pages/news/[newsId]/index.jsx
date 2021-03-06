import React from "react";
import styles from "./style.module.scss";
import NewsCard from "../../../components/newsCard";
import parse from "html-react-parser";
import moment from "moment";
import Share from "../../../components/share";
import { baseAPI } from "../../../config";
import Avatar from "../../../components/avatar";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WhatsAppGroup from "../../../components/whatsappGroup";
import NewsAd from "../../../components/advertisements/newsAd";
import Head from "next/head";
import Image from "next/image";
import TodayIcon from "@material-ui/icons/Today";

const NewsPage = ({ data, pathname }) => {
  const news = data.news;
  const relatedNews = data.relatedNews;

  const location = `https://mehulvani.in${pathname}`;

  const myLoader = ({ src }) => {
    return news.imageUrl;
  };

  return (
    <>
      <Head>
        <title>{news.title}</title>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="url" content={location} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        <meta property="title" content={news.title} />
        <meta property="quote" content={"mehulvani - आम जनता की खबर"} />
        <meta name="description" content={news.content} />
        <meta property="image" content={news.imageUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={news.title} />
        <meta property="og:quote" content={"mehulvani - आम जनता की खबर"} />
        <meta property="og:hashtag" content={"#mehulvani"} />
        <meta property="og:image" content={news.imageUrl} />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content={location} />
        <meta property="og:site_name" content="mehulvani" />
        <meta
          property="og:description"
          content={"mehulvani - आम जनता की खबर"}
        />
      </Head>

      <div className={styles.news}>
        <div className="flex items-center justify-between">
          <div className="bg-blue-600 text-white px-4 py-1 rounded-md">
            {news.category && news.category.title}
          </div>
          <div>
            <Share
              title={news.title}
              url={location}
              user={news.author.full_name}
            />
          </div>
        </div>

        <h1 className="text-2xl mt-2 font-bold">{news.title}</h1>

        <div className="flex items-center justify-between mb-1">
          <div className={styles.meta2}>
            {news.location && (
              <div className="flex items-center">
                <LocationOnIcon color="secondary" />
                {news.location}
              </div>
            )}
          </div>
          <div className={styles.news_author}>
            <Avatar
              image={news.author.profileImageUrl}
              alt={news.author.full_name}
            />
            <div>{news.author.full_name}</div>
          </div>
        </div>

        <div className={styles.fImgContainer}>
          <Image
            loader={myLoader}
            src={news.imageUrl}
            alt="news-image"
            width={1920}
            height={1080}
            // objectFit="fill"
          />
        </div>
        <div className="text-center mt">
          <TodayIcon />
          {moment(news.published_date).format("LL")}
        </div>
        <div className={styles.news_article}>{parse(news.content)}</div>
      </div>

      <hr style={{ marginBottom: "20px" }} />

      <NewsAd />

      <WhatsAppGroup />

      <h2
        style={{ marginTop: "30px", color: "blueviolet", marginLeft: "15px" }}
      >
        और भी खबरें ...
      </h2>

      <NewsCard news={relatedNews} />
    </>
  );
};

export default NewsPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const { newsId } = params;
  const { resolvedUrl } = context;
  let pathname = resolvedUrl;
  const response = await fetch(`${baseAPI}/api/news/${newsId}`);
  const data = await response.json();

  return {
    props: {
      data,
      pathname,
    },
  };
}
