'use client';

import Table from '@/components/Table/Table'
import styles from './shop.module.css'
import InputGroup from '@/components/InputGroup/InputGroup';
import { memo } from 'react';

const Page = () => {
  // Sample header and data
  const header = [
    { name: "R.Qty" },
    { name: "Item Code" },
    { name: "Description" },
    { name: "Unit Price" },
    { name: "School(%)" },
    { name: "S.Amount" },
    { name: "Amount" },
    { name: "Cus %" },
    { name: "Tax" },
    { name: "Net Amount" },
    { name: "Action" },

  ];

  const tdData = [
    ["1", "Product A", "$100", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending"],
    ["2", "Product B", "$200", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending"],
    ["3", "Product C", "$300", "Shipped", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending"],
    ["4", "Product D", "$400", "Delivered", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending"],
    ["5", "Product E", "$500", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending", "Pending"]
  ];
  const InputTypes = [
    { name: "Product", type: "text", isHr: true, placeholder: "Start Typing" },
    { name: "Quantity", type: "text" },
    { name: "Price", type: "number" },
    { name: "Total Price", type: "text", disable: true },
    { name: "Cus %", type: "number" },
    { name: "School (%)", type: "number" },
    { name: "S.Amount", type: "number" },
    { name: "Total Price", type: "number", disable: true },
  ]
  const commadInput = [
    { name: "Total", type: "number", placeholder: "0.0", disable: true, id: "Total" },
    { name: "Bill Amount", type: "text", id: "Amount" },
    { name: "Discount Amount", type: "number", id: "DiscountA" },
    { name: "Discount %", type: "text", disable: true, id: "Discount%" },
    { name: "Cash Received", type: "number", id: "CashRec" },
    { name: "Cash Return", type: "number", id: "CashR" },
    { name: "S.Tax(0%)", type: "number", disable: true, id: "S.Tax" },
    // { name: "Method", type: "number", disable: true },
  ]
  const intailInput = [
    { name: "School Name", type: "text", id: "School" },
    { name: "Customer Name", type: "text", id: "Name" },
    { name: "Customer Phone", type: "number", id: "Customer" },
    { name: "Refund ID", type: "text", id: "Refund" },

  ]


  return (
    <>
      <section className={styles.Flex}>
        <div className={styles.shopSideBar}>
          <div className={styles.entry}>

            {InputTypes.map((item, index) => (
              <div key={index}>
                <InputGroup
                  type={item.type}
                  isDisabled={item.disable || false}
                  desc={item.name}
                  placeholder={item.placeholder || ''}
                />
                {item.isHr && <hr style={{ marginBottom: "20px" }} />}
              </div>
            ))}
          </div>
          <div>
            <button className={styles.entrybutton}>Add Entry</button>
          </div>
        </div>
        <div className={styles.shopMain}>
          <div className={styles.topSaleHeader}>
            <div className={styles.commandSale} style={{ marginTop: "0px", padding: "10px" }}>
              {intailInput.map((item, index) => (
                <div key={index}>
                  <label htmlFor={item.id} className={styles.labelBox}>{item.name}</label>
                  <InputGroup
                    type={item.type}
                    isDisabled={item.disable || false}
                    id={item.id}
                    placeholder={item.placeholder || ''}

                  />
                  {item.isHr && <hr style={{ marginBottom: "20px" }} />}
                </div>
              ))}

            </div>
          </div>
          <hr />
          <div className={styles.entrySale}>
            <Table header={header} tdData={tdData} />

          </div>
          <hr />
          <div className={styles.commandSale}>
            {commadInput.map((item, index) => (
              <div key={index}>
                <label htmlFor={item.id} className={styles.labelBox}>{item.name}</label>
                <InputGroup
                  type={item.type}
                  isDisabled={item.disable || false}
                  id={item.id}
                  placeholder={item.placeholder || ''}

                />
                {item.isHr && <hr style={{ marginBottom: "20px" }} />}
              </div>
            ))}
            <div className={styles.Flex} style={{ marginTop: "0px", gap: "10px" }}>
              <div style={{ width: "30%" }}>

                <button className={styles.entrybutton}>Generate Invoice</button>
              </div>
              <div style={{ width: "30%" }}>
                <button className={styles.entrybutton}>Refund</button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(Page)
