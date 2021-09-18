import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import styles from "./style.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useRouter } from "next/router";

export default function BottomNav() {
  const router = useRouter();

  return (
    <div className={styles.bottom_nav}>
      <div className={styles.bottom_menu}>
        <div
          className={styles.bottom_menuBtn}
          onClick={() => {
            router.push("/");
          }}
        >
          <div>
            <HomeIcon />
          </div>
          <p>Home</p>
        </div>
        <div
          className={styles.bottom_menuBtn}
          onClick={() => {
            router.push("/videos");
          }}
        >
          <VideoLibraryIcon /> <p>Videos</p>
        </div>
        <div
          className={styles.bottom_menuBtn}
          onClick={() => {
            window.open("https://newsroom.mehulvani.in");
          }}
        >
          <AccountCircleIcon /> <p>Account</p>
        </div>
      </div>
    </div>
  );
}
