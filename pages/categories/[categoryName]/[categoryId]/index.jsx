import NewsCard from "../../../../components/newsCard";
import { baseAPI } from "../../../../config";
import React from "react";
import PageHeader from "../../../../components/pageHeader";
import Head from "next/head";

const NewsCategory = ({ data }) => {
  const news = data.news;
  const category = data.category;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${category} | mehulvani`}</title>

        <meta name="description" content="news"></meta>
      </Head>
      <PageHeader title={category} />

      {news.length === 0 && (
        <h2 style={{ margin: "15px" }}>
          Oops, no news published in this category!
        </h2>
      )}
      <NewsCard news={news} />
    </>
  );
};

export default NewsCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  const { categoryId } = params;
  const page = 1;
  const response = await fetch(
    `${baseAPI}/api/news?category=${categoryId}&isPublished=true&page=${page}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
