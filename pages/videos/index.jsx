import React from "react";
import { useState, useEffect } from "react";
import { baseAPI } from "../../config";
import { CircularProgress } from "@material-ui/core";
import PageHeader from "../../components/pageHeader";
import Head from "next/head";

const Videoes = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  const getVideos = async (channelId, apiKey) => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=date&channelId=${channelId}&maxResults=20&key=${apiKey}`
    );
    const data = await response.json();
    setVideos(data.items);
    setLoading(false);
  };

  useEffect(() => {
    const getChannel = async () => {
      const response = await fetch(`${baseAPI}/api/video`);
      const data = await response.json();
      return data;
    };

    getChannel().then((data) => {
      getVideos(data.video.channelId, data.video.api_key);
    });
  }, []);

  if (loading) {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <title>{"Our Videos | mehulvani"}</title>
          <meta name="description" content="news"></meta>
        </Head>
        <PageHeader title={"Videos"} />
        {videos.map((item) => {
          return (
            <div
              style={{ marginBottom: "20px", width: "100%" }}
              key={item.id.videoId}
            >
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </>
    );
  }
};

export default Videoes;
