'use client';
import { memo } from "react";
import styles from "./product.module.css";
import Table from "@/components/Table/Table";
import { useRouter } from "next/navigation";


const Page = () => {

  const router = useRouter();

  const header = [
    { name: "Sr#" },
    { name: "Item Code" },
    { name: "Supplier" },
    { name: "Class" },
    { name: "Company" },
    { name: "Product" },
    { name: "Retail Price(Rs)	" },
    { name: "Total Amount(Rs)	" },
    { name: "Update	" },
    { name: "Delete" },

  ];

  const tdData = [
    ["1", "Product A", "$100", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending"],
    ["2", "Product B", "$200", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending"],
    ["3", "Product C", "$300", "Shipped", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending"],
    ["4", "Product D", "$400", "Delivered", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending"],
    ["5", "Product E", "$500", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending"],
  ];

  return (
    <section className={styles.mtp3050}>
      <div className={styles.mb4}>
        <input type="search" placeholder="Search" className={styles.search} />

      </div>
      <div className={`row`}>
        <div className={`col-lg-9`}>
          <Table header={header} tdData={tdData} />
        </div>
        <div className={`col-lg-3`}>

          <button className={styles.button} onClick={()=>{router.push('/products/existing-stock')}}>Existing Stock</button>
          <button className={styles.button} onClick={()=>{router.push('/products/existing-stock')}}>Existing Purchase</button>
          <button className={styles.button} onClick={()=>{router.push('/products/existing-stock')}}>New Product</button>
        </div>
      </div>
    </section>
  );
};

export default memo(Page);
