'use client';
import { memo } from "react";
import styles from "./purchase.module.css";
import Table from "@/components/Table/Table";
import { useRouter } from "next/navigation";


const Page = () => {

  const router = useRouter();

  const header = [
    { name: "Date#" },
    { name: "Name" },
    { name: "Cell" },
    { name: "Invoice" },
    { name: "Amount(Rs)" },
  
  ];

  const tdData = [
    ["1", "Product A", "$100", "Pending", "Pending"],
    ["1", "Product A", "$100", "Pending", "Pending"],
    ["1", "Product A", "$100", "Pending", "Pending"],
    ["1", "Product A", "$100", "Pending", "Pending"],

  ];

  return (
    <section className={styles.mtp3050}>
      <div className={styles.mb4}>
        <input type="search" placeholder="Search" className={styles.search} />

      </div>
      <div className={`row`}>
        <div className={`col-lg-10`}>
          <Table header={header} tdData={tdData} />
        </div>
        <div className={`col-lg-2`}>

          <button className={styles.button} onClick={() => { router.push('/products/existing-stock') }}>Add School</button>

        </div>
      </div>
    </section>
  );
};

export default memo(Page);
