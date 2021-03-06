import React from "react";
import Head from "next/head";
import FeaturedNews from "../components/featuredNews";
import NewsCard from "../components/newsCard";
import { baseAPI } from "../config";
import FeaturedNewsSlider from "../components/featuredNewsSlider";
// import CategoryNewsSlider from "../components/categoryNewsSlider";

import NewNewsCard from "../components/newNewsCard";



const Home = ({ data }) => {
  const news = data.news;

  return (
    <>
      <Head>
        <title>MEHUL VANI - आम जनता की खबर</title>
        <meta
          name="description"
          content="छत्तीसगढ़ का सर्वाधिक लोकप्रिय न्यूज वेबसाइट"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <FeaturedNews /> */}

      <FeaturedNewsSlider />

      {/* <div>
        <NewNewsCard />
      </div> */}

      <>
        {news.map((item, index) => {
          return (
            <NewsCard key={index} category={item.category} news={item.news} />
          );
        })}
      </>
      {/* <CategoryNewsSlider /> */}
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
