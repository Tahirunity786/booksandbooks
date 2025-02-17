'use client';

import Graph from "@/components/Graph/Graph";
import Table from "@/components/Table/Table";
import Image from "next/image";
import styles from "./page.module.css"; // Import the CSS module

export default function Home() {
  return (
    <section className={styles.mainWrapper}>
      <nav className={styles.breadcrumbNav}>
        <ol className={styles.breadcrumbList}>
          <li className={styles.breadcrumbItem}><a href="#">Home</a></li>
          <li className={`${styles.breadcrumbItem} ${styles.breadcrumbItemActive}`} aria-current="page">Dashboard</li>
        </ol>
      </nav>

      <div className={styles.section}>
        <div className={styles.wrapper}>
          <h1 className={styles.h1}>Welcome Admin , <br /> Books And Books </h1>
          <button className={styles.button}>Logged In</button>
        </div>
        <Image
          src={'/Images/school.png'}
          width={400}
          height={250}
          alt="Pro Image"
        />
      </div>

      <Table/>
      <Graph/>
    </section>
  );
}
