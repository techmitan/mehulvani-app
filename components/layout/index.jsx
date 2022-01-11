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
      <div className="sticky top-0 z-50">
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

          <div className="md:hidden">
            <div className="w-full h-full my-10">
              <iframe
                style={{ width: "100%", minHeight: "450px" }}
                src="https://maps.mapmyindia.com/corona"
              ></iframe>
            </div>
            <SideVideo />
            <SideAd1 />
            <Poll />
            <SideAd2 />

            <div style={{ marginTop: "25px" }}>
              <iframe
                src="https://widget.crictimes.org/"
                style={{ width: "100%", minHeight: "450px" }}
                frameBorder="0"
                scrolling="yes"
              ></iframe>
            </div>
          </div>

          <div className={styles.center_footer}>
            <Donate />
            <Footer />
            <TechMitan />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right_inner}>
            <div className="w-full h-full my-10">
              <iframe
                style={{ width: "100%", minHeight: "450px" }}
                src="https://maps.mapmyindia.com/corona"
              ></iframe>
            </div>
            <SideVideo />
            <SideAd1 />
            <Poll />
            <SideAd2 />

            <div style={{ marginTop: "25px" }}>
              <iframe
                src="https://widget.crictimes.org/"
                style={{ width: "100%", minHeight: "450px" }}
                frameBorder="0"
                scrolling="yes"
              ></iframe>
            </div>

            <div className="my-10">
              <iframe
                src="https://bit.ly/2DLbYIl"
                height="500"
                width="300"
                scrolling="no"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Layout;
