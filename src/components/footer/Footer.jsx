import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Asseng Aperture. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Lama Dev" href="https://www.instagram.com/asseng_aperture/" />
      </div>
    </div>
  );
};

export default Footer;
