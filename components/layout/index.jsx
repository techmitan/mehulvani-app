import React from "react";
import styles from "./style.module.scss";
import Menubar from "../menubar";
import Navbar from "../navbar";
import SideAd2 from "../advertisements/sideAd2";
import SideAd1 from "../advertisements/sideAd1";
import HeaderAdvertisement from "../advertisements/headerAd";
import Poll from "../poll";
import MenubarMobile from "../menubarMobile";
import BottomNav from "../bottomNav";
import TickerNews from "../tickerNews";
import Footer from "../footer";
import SocialMediaIcons from "../socialMedia";
import TechMitan from "../techmitan";
import SideVideo from "../sideVideo";
import Donate from "../donate";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.stickyNav}>
        <Navbar />
        <MenubarMobile />
      </div>

      {/* <TickerNews /> */}
      <HeaderAdvertisement />

      {/* main page layout starts here */}
      <div className={styles.layout}>
        <div className={styles.left}>
          <div className={styles.left_inner}>
            <Menubar />
            <SocialMediaIcons />
          </div>
        </div>
        <div className={styles.center}>
          {children}
          <div className={styles.center_footer}>
            <Donate />
            <Footer />
            <TechMitan />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right_inner}>
            <SideVideo />
            <SideAd1 />
            <Poll />
            <SideAd2 />
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Layout;
