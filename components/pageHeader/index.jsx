import React from "react";
import styles from "./style.module.scss";

const PageHeader = ({ title }) => {
  return (
    <div className={styles.PageHeader}>
      <h2>{title}</h2>
    </div>
  );
};

export default PageHeader;
