import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/photography" className={styles.item}>
          <span className={styles.title}>Photography</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
