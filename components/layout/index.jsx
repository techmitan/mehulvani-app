import React from "react";
import styles from "./style.module.css";
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

      <TickerNews />
      <HeaderAdvertisement />
      <div className={styles.layout_wrapper}>
        <div className={styles.layout_left}>
          <Menubar />

          <SocialMediaIcons />
        </div>

        <div className={styles.layout_center}>
          {children}
          <div className={styles.center_footer}>
            <Donate />
            <Footer />

            <TechMitan />
          </div>
        </div>
        <div className={styles.layout_right}>
          <SideVideo />

          <SideAd1 />
          <Poll />
          <SideAd2 />
          <div className={styles.footer_mobile}>
            <hr />
            <Donate />
            <Footer />
            <SocialMediaIcons />

            <TechMitan />
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default Layout;
