import React from "react";
import styles from "./style.module.css";
import { CircularProgress } from "@material-ui/core";
import { useState, useEffect } from "react";
import { baseAPI } from "../../../config";

const HeaderAd = () => {
  const [ad, setAd] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAds = async () => {
      const res = await fetch(
        `${baseAPI}/api/advertisement/612a5e56bac665751f52590e`
      );
      const data = await res.json();
      setAd(data.advert.imageUrl);
      setUrl(data.advert.ad_url);

      setLoading(false);
    };
    getAds();
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div className={styles.header_wrapper}>
        <div className={styles.header_main}>
          <a href={url} target="_blank" rel="noreferrer">
            <img src={ad} alt="advertisement" />
          </a>
        </div>
      </div>
    );
  }
};

export default HeaderAd;
