import React from "react";
import styles from "./style.module.css";

import { CircularProgress } from "@material-ui/core";
import { useState, useEffect } from "react";
import { baseAPI } from "../../../config";

const SideAdvert = () => {
  const [ad, setAd] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAds = async () => {
      const res = await fetch(
        `${baseAPI}/api/advertisement/612a5e4fbac665751f52590c`
      );
      const data = await res.json();
      setAd(data.advert.imageUrl);
      setUrl(data.advert.ad_url);

      setLoading(false);
    };
    getAds();
  }, []);

  if (loading) {
    return <CircularProgress />;
  } else {
    return (
      <div className={styles.sideAd_wrapper}>
        <div>
          <a href={url} target="_blank" rel="noreferrer">
            <img src={ad} alt="advertisement" />
          </a>
        </div>
      </div>
    );
  }
};

export default SideAdvert;
