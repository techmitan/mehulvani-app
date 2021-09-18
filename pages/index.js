import React from "react";
import Head from "next/head";
import Image from "next/image";
import FeaturedNews from "../components/featuredNews";
import NewsCard from "../components/newsCard";
import { baseAPI } from "../config";

import { useState, useEffect } from "react";

const Home = ({ data }) => {
  const news = data.news;

  return (
    <>
      <Head>
        <title>cg24x7 News - हर खबर पर नजर</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedNews />

      <>
        {news.map((item, index) => {
          return (
            <NewsCard key={index} category={item.category} news={item.news} />
          );
        })}
      </>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const response = await fetch(`${baseAPI}/api/news/home/get`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
