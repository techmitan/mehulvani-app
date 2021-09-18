import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "./style.module.css";

const SocialMediaIcons = () => {
  return (
    <div className={styles.social}>
      <h3
        style={{ textAlign: "center", marginTop: "30px", color: "blueviolet" }}
      >
        Follow Us
      </h3>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <SocialIcon
          url="https://facebook.com/cg24x7news"
          style={{ marginRight: "15px", marginBottom: "15px" }}
        />
        <SocialIcon
          url="https://twitter.com/7newsCg24"
          style={{ marginRight: "15px" }}
        />
        <SocialIcon
          url="https://instagram.com/cg24x7news"
          style={{ marginRight: "15px" }}
        />
        <SocialIcon
          url="https://linkedin.com/in/cg-news-4762b81a3"
          style={{ marginRight: "15px" }}
        />
        <SocialIcon
          url="https://cg24xnews.tumblr.com"
          style={{ marginRight: "15px" }}
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCC78fZHkgGlNwJvA6NWguBA"
          style={{ marginRight: "15px" }}
        />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
