import Image from "next/image";
import styles from "./page.module.css";
import Hand from "public/hand.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Photography for your car collection.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality.
        </p>
        <Button url="/portfolio" text="Our Work"/>
      </div>
      <div className={styles.item}>
        <Image src={Hand} alt="" className={styles.img} />
      </div>
    </div>
  );
}
