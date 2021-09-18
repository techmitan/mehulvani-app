import NewsCard from "../../../../components/newsCard";
import { baseAPI } from "../../../../config";
import React from "react";
import PageHeader from "../../../../components/pageHeader";
import Head from "next/head";

// import Pagination from "@material-ui/lab/Pagination";

import useSWRInfinite from "swr/infinite";

const NewsCategory = ({ data }) => {
  const news = data.news;
  const category = data.category;

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null; // reached the end
    return `${baseAPI}/api/news?category=${categoryId}&isPublished=true&page=${pageIndex}`; // SWR key
  };

  const {
    data: paginatedData,
    error,
    isValidating,
    mutate,
    size,
    setSize,
  } = useSWRInfinite(getKey);

  // pagination

  //   const { categoryId } = useParams();

  //   useEffect(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //     setLoading(true);
  //     setCategory("");
  //     setNews([]);
  //     const getNews = async () => {
  //       const response = await fetch(
  //         `${baseAPI}/api/news?category=${categoryId}&isPublished=true&page=${page}`
  //       );
  //       const data = await response.json();
  //       setNews(data.news);
  //       setLength(Math.ceil(data.totalNews / 10));
  //       setCategory(data.category);
  //       setLoading(false);
  //     };

  //     getNews();
  //   }, [categoryId, page]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${category} | cg24x7 News`}</title>

        <meta name="description" content="news"></meta>
      </Head>
      <PageHeader title={category} />

      {news.length === 0 && <h2>Oops, no news found in this category</h2>}
      <NewsCard news={news} />

      {/* {length > 10 && (
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={length}
            color="secondary"
            page={page}
            onChange={() => {
              setPage((ppage) => ppage + 1);
            }}
          />
        </div>
      )} */}
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
