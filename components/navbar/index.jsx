import React from "react";
import styles from "./navbar.module.css";
import moment from "moment";
import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { useState } from "react";


const Navbar = () => {
  const [date, setDate] = useState(Date.now());

  setInterval(() => {
    setDate(Date.now());
  }, 1000);

  return (
    <div className={`${styles.navbar_fluid}`}>
      <div className={`${styles.navbar}`}>
        <div className={styles.nav_left}>
          <Link href="/">
            <a>
              <div className={styles.logo}>
                <img
                  src="https://i2.wp.com/cg24x7.news/wp-content/uploads/2021/08/20210805_222354.jpg?w=789&ssl=1"
                  alt="logo"
                />
              </div>
            </a>
          </Link>
          <div className={styles.nav_date}>
            {moment(date).format("MMMM Do YYYY, h:mm:ss a")}
          </div>
        </div>

        <div className={styles.nav_menu}>
          <ul>
            <Link href="/">
              <a>
                <li>
                  <HomeIcon className={styles.menu_icons} /> होम
                </li>
              </a>
            </Link>

            <Link href="/videos">
              <a>
                <li>
                  <SlowMotionVideoIcon className={styles.menu_icons} /> विडीओ
                </li>
              </a>
            </Link>

            <a
              href="https://newsroom.mehulvani.in"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <AccountCircleIcon className={styles.menu_icons} />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
